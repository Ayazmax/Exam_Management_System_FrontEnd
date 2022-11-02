import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData = {
    username: '',
    password: '',
  };

  constructor(private snack:MatSnackBar, private login:LoginService) { }

  ngOnInit(): void {
  }

  formSubmit() {
    console.log("Login form Submitted");

    if(this.loginData.username.trim()=='' || this.loginData.username == null) {
      this.snack.open("Username is Required", 'Ok');
      return;
    }else if(this.loginData.password.trim()=='' || this.loginData.password==null) {
      this.snack.open("Password is Required", 'Ok');
      return;
    }
      //request to server to generate token
      this.login.generateToken(this.loginData).subscribe(
        (data:any)=>{
          console.log('success');
          console.log(data);

          //Login...
        },
        (error)=>{
          console.log("Error !");
          console.log(error);
        }
      );
  }

}
