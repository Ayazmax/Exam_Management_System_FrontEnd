import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { FooterComponent } from './components/footer/footer.component';
import { SignupComponent } from './pages/signup/signup.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSelectModule} from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { LsnavbarComponent } from './pages/lsnavbar/lsnavbar.component';
import { PostFormComponent } from './pages/post-form/post-form.component';
import { LoginComponent } from './pages/login/login.component';
import { HnavbarComponent } from './pages/hnavbar/hnavbar.component';
import { IhomeComponent } from './pages/ihome/ihome.component';
import { VuprofileComponent } from './pages/vuprofile/vuprofile.component';
import { Fentrepreneur2Component } from './pages/fentrepreneur2/fentrepreneur2.component';
import { MpostsiComponent } from './pages/mpostsi/mpostsi.component';
import { AddpostComponent } from './pages/addpost/addpost.component';
import { UpdatePostComponent } from './pages/updatepost/updatepost.component';
import { UprofileComponent } from './pages/uprofile/uprofile.component';
import { MatSliderModule } from '@angular/material/slider';
import { MatDialogModule } from '@angular/material/dialog';
import { RateDialogComponent } from './pages/rate-dialog/rate-dialog.component';
import { RatingsDialogComponent } from './pages/ratings-dialog/ratings-dialog.component';
import { EhomeComponent } from './pages/ehome/ehome.component';
import { RinquiryComponent } from './pages/rinquiry/rinquiry.component';
import { ViewInquiriesComponent } from './pages/view-inquiries/view-inquiries.component';
import { SetupgoalsComponent } from './pages/setupgoals/setupgoals.component';
import { ApplyipComponent } from './pages/applyip/applyip.component';
import { VbprofileComponent } from './pages/vbprofile/vbprofile.component';
import { CommentsDialogComponent } from './pages/comments-dialog/comments-dialog.component';
import { LandingpageComponent } from './pages/landingpage/landingpage.component';
import { VpProfileComponent } from './pages/vp-profile/vp-profile.component';
import { MpostsComponent } from './pages/mposts/mposts.component';
import { PhomeComponent } from './pages/phome/phome.component';
import { FentrepreneurComponent } from './pages/fentrepreneur/fentrepreneur.component';
import { MpostspComponent } from './pages/mpostsp/mpostsp.component';
import { PProComponent } from './pages/p-pro/p-pro.component';
import { AdminPanelComponent } from './pages/admin-panel/admin-panel.component';
import { AdminNavbarComponent } from './pages/admin-navbar/admin-navbar.component';
import { AddAdvisorComponent } from './pages/add-advisor/add-advisor.component';
import { ViewAdvisorComponent } from './pages/view-advisor/view-advisor.component';
import { FadvisorComponent } from './pages/fadvisor/fadvisor.component';
import { ViewInqueryAdminComponent } from './pages/view-inquery-admin/view-inquery-admin.component';
import { BprofileComponent } from './pages/bprofile/bprofile.component';
import { SellRawComponent } from './pages/sell-raw/sell-raw.component';
import { TradeRawComponent } from './pages/trade-raw/trade-raw.component';
import { TradeComponent } from './pages/trade/trade.component';
import { BuyComponent } from './pages/buy/buy.component';
import { ViewGoalsComponent } from './pages/view-goals/view-goals.component';
import { UserProfileDialogComponent } from './pages/user-profile-dialog/user-profile-dialog.component';
import { BusinessProfileDialogComponent } from './pages/business-profile-dialog/business-profile-dialog.component';
import { AddBusinessPitchComponent } from './pages/add-business-pitch/add-business-pitch.component';
import { ViewBusinessPitchComponent } from './pages/view-business-pitch/view-business-pitch.component';
import { VbpitchComponent } from './pages/vbpitch/vbpitch.component';



@NgModule({
    declarations: [
        AppComponent,
        LsnavbarComponent,
        FooterComponent,
        SignupComponent,
        PostFormComponent,
        LoginComponent,
        HnavbarComponent,
        IhomeComponent,
        VuprofileComponent,
        Fentrepreneur2Component,
        MpostsiComponent,
        AddpostComponent,
        AddpostComponent,
        UpdatePostComponent,
        UprofileComponent,
        RateDialogComponent,
        RateDialogComponent,
        IhomeComponent,
        RatingsDialogComponent,
        EhomeComponent,
        RinquiryComponent,
        ViewInquiriesComponent,
        SetupgoalsComponent,
        ApplyipComponent,
        VbprofileComponent,
        BprofileComponent,
        CommentsDialogComponent,
        CommentsDialogComponent,
        LandingpageComponent,
        VpProfileComponent,
        MpostsComponent,
        PhomeComponent,
        FentrepreneurComponent,
        MpostspComponent,
        PProComponent,
        AdminPanelComponent,
        AdminNavbarComponent,
        AddAdvisorComponent,
        ViewAdvisorComponent,
        FadvisorComponent,
        ViewInqueryAdminComponent,
        SellRawComponent,
        TradeRawComponent,
        TradeComponent,
        BuyComponent,
        ViewGoalsComponent,
        UserProfileDialogComponent,
        BusinessProfileDialogComponent,
        AddBusinessPitchComponent,
        ViewBusinessPitchComponent,
        VbpitchComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatInputModule,
        MatFormFieldModule,
        MatIconModule,
        MatSliderModule,
        MatDialogModule,
        FormsModule,
        HttpClientModule,
        MatSnackBarModule,
        MatCardModule,
        MatToolbarModule,
        MatListModule,
        MatTableModule,
        MatSlideToggleModule,
        MatSelectModule,
        CommonModule,
        CKEditorModule,
        MatProgressSpinnerModule,
        CommonModule,
    ]
})
export class AppModule { }
