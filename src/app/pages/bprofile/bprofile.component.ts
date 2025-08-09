import { HttpClient } from '@angular/common/http';
import { Component} from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-bprofile',
    templateUrl: './bprofile.component.html',
    styleUrls: ['./bprofile.component.css'],
})

export class BprofileComponent {

  userProfile: any;
  isCollapsed: boolean = false;
  selectedFile: File | null = null;
  userRoles: string[] = ['Investor', 'Entrepreneur', 'Business Partner']; // Array of user roles

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit(): void {
    // Fetch user data and populate the form
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      const user = JSON.parse(storedUser); // Parse the stored user object
      const username = user.username;
      this.http.get<any>('http://localhost:8080/api/users/' + username).subscribe(
        (userData) => {
          // Update the profile photo URL to load the image
          userData.profilePhoto = 'http://localhost:8080/api/users/images/' + userData.profilePhotoPath;
          this.userProfile = userData; // Assign userData to the user object
        },
        (error) => {
          console.error('Error fetching user data:', error);
        }
      );
    } else {
      console.error('User data not found in local storage');
      // Redirect to login page or handle the scenario as needed
    }
  }
  

  updateProfile() {
    const storedUser = localStorage.getItem('currentUser');
    if (!storedUser) {
      console.error('User data not found in local storage');
      return;
    }
    
    const user = JSON.parse(storedUser);
    const username = user.username;
  
    if (!username || !this.userProfile.email || !this.userProfile.userRole) {
      // Handle validation for required fields
      return;
    }
  
    const formData: FormData = new FormData();
    if (this.selectedFile) {
      formData.append('file', this.selectedFile);
    }
    formData.append('username', this.userProfile.username);
    formData.append('email', this.userProfile.email);
    formData.append('password', this.userProfile.password);
    formData.append('firstName', this.userProfile.firstName);
    formData.append('lastName', this.userProfile.lastName);
    formData.append('phone', this.userProfile.phone);
    formData.append('userRole', this.userProfile.userRole); 
    formData.append('businessName', this.userProfile.businessName);
    formData.append('businessType', this.userProfile.businessType);

    formData.append('product', this.userProfile.product);
    formData.append('productDescription', this.userProfile.productDescription);
    formData.append('productUniqueness', this.userProfile.productUniqueness);
    formData.append('elevatorPitch', this.userProfile.elevatorPitch);
    formData.append('targetAudience', this.userProfile.targetAudience);
    formData.append('lookingFor', this.userProfile.lookingFor);

    formData.append('investmentProduct', this.userProfile.investmentProduct);
    formData.append('noOfInvestors', this.userProfile.noOfInvestors);
    formData.append('capacityAvailable', this.userProfile.capacityAvailable);
    formData.append('investmentPlan', this.userProfile.investmentPlan);
    formData.append('investmentRequired', this.userProfile.investmentRequired);
    formData.append('termsOfInvestmentOpportunity', this.userProfile.termsOfInvestmentOpportunity);
    formData.append('ROI', this.userProfile.ROI);
    formData.append('investmentBenefits', this.userProfile.investmentBenefits);
    formData.append('investmentTimeline', this.userProfile.investmentTimeline);
    formData.append('closingDate', this.userProfile.closingDate);
    formData.append('fundingMilestone', this.userProfile.fundingMilestone);
    formData.append('useOfFunds', this.userProfile.useOfFunds);
    formData.append('investmentCapital', this.userProfile.investmentCapital);
    formData.append('objAndMilestone', this.userProfile.objAndMilestone);

    formData.append('partnershipPurpose', this.userProfile.partnershipPurpose);
    formData.append('partnershipType', this.userProfile.partnershipType);
    formData.append('noOfPartnership', this.userProfile.noOfPartnership);
    formData.append('mutualBenefits', this.userProfile.mutualBenefits);
    formData.append('opportunities', this.userProfile.opportunities);
  


  
    const url = `http://localhost:8080/api/users/${username}/update`;
  
    this.http.put<any>(url, formData).subscribe(
      (response) => {
        console.log('User profile updated successfully:', response);
        Swal.fire({
          icon: 'success',
          title: 'Profile Updated',
          text: 'Your profile has been updated successfully',
        }).then((result) => {
          if (result.isConfirmed) {
            this.router.navigate(['vbpro']);
          }
        });
      },
      (error) => {
        console.error('Error updating user profile:', error);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Can\'t update profile, try again.',
        });
      }
    );
    }

    onFileChange(event: any) {
      const file = event.target.files[0];
      if (file) {
        this.selectedFile = file;
      }
    }
  
    navigate(route: string): void {
      this.router.navigate([route]);
    }

    toggleSidePanel(): void {
      this.isCollapsed = !this.isCollapsed;
    }  

  }
