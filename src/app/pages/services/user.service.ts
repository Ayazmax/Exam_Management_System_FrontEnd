import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:8080/api/users';

  constructor(private http: HttpClient) { }

  registerUser(formData: FormData): Observable<any> {
    // Set the content-type to multipart/form-data
    const headers = new HttpHeaders().set('Content-Type', 'multipart/form-data');

    return this.http.post(`${this.baseUrl}/register`, formData, { headers });
  }
}
