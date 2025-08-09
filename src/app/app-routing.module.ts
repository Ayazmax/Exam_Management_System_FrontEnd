import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './pages/signup/signup.component';
import { IhomeComponent } from './pages/ihome/ihome.component';
import { PhomeComponent } from './pages/phome/phome.component';
import { EhomeComponent } from './pages/ehome/ehome.component';
import { ApplyipComponent } from './pages/applyip/applyip.component';
import { MpostsComponent } from './pages/mposts/mposts.component';
import { FadvisorComponent } from './pages/fadvisor/fadvisor.component';
import { RinquiryComponent } from './pages/rinquiry/rinquiry.component';
import { Fentrepreneur2Component } from './pages/fentrepreneur2/fentrepreneur2.component';
import { FentrepreneurComponent } from './pages/fentrepreneur/fentrepreneur.component';
import { SetupgoalsComponent } from './pages/setupgoals/setupgoals.component';
import { MpostsiComponent } from './pages/mpostsi/mpostsi.component';
import { MpostspComponent } from './pages/mpostsp/mpostsp.component';
import { TradeComponent } from './pages/trade/trade.component';
import { VtradeComponent } from './pages/vtrade/vtrade.component';
import { VbprofileComponent } from './pages/vbprofile/vbprofile.component';
import { UprofileComponent } from './pages/uprofile/uprofile.component';
import { PostFormComponent } from './pages/post-form/post-form.component';
import { LoginComponent } from './pages/login/login.component';
import { VuprofileComponent } from './pages/vuprofile/vuprofile.component';
import { AddpostComponent } from './pages/addpost/addpost.component';
import { UpdatePostComponent } from './pages/updatepost/updatepost.component';
import { ViewInquiriesComponent } from './pages/view-inquiries/view-inquiries.component';
import { LandingpageComponent } from './pages/landingpage/landingpage.component';
import { VpProfileComponent } from './pages/vp-profile/vp-profile.component';
import { PProComponent } from './pages/p-pro/p-pro.component';
import { AdminPanelComponent } from './pages/admin-panel/admin-panel.component';
import { AddAdvisorComponent } from './pages/add-advisor/add-advisor.component';
import { ViewAdvisorComponent } from './pages/view-advisor/view-advisor.component';
import { ViewInqueryAdminComponent } from './pages/view-inquery-admin/view-inquery-admin.component';
import { BprofileComponent } from './pages/bprofile/bprofile.component';
import { SellRawComponent } from './pages/sell-raw/sell-raw.component';
import { TradeRawComponent } from './pages/trade-raw/trade-raw.component';
import { BuyComponent } from './pages/buy/buy.component';
import { ViewGoalsComponent } from './pages/view-goals/view-goals.component';
import { AddBusinessPitchComponent } from './pages/add-business-pitch/add-business-pitch.component';
import { ViewBusinessPitchComponent } from './pages/view-business-pitch/view-business-pitch.component';
import { VbpitchComponent } from './pages/vbpitch/vbpitch.component';

const routes: Routes = [
  {
    path: '',
    component: LandingpageComponent,
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full',
  },
  {
    path: 'signup',
    component: SignupComponent,
    pathMatch: 'full',
  },
  {
    path: 'ihome',
    component: IhomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'phome',
    component: PhomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'ehome',
    component: EhomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'aip',
    component: ApplyipComponent,
    pathMatch: 'full'
  },
  { path: 'mpost', component: MpostsComponent, pathMatch: 'full' },
  { path: 'fadvisor', component: FadvisorComponent, pathMatch: 'full' },
  { path: 'rinquiry', component: RinquiryComponent, pathMatch: 'full' },
  { path: 'ae', component: FentrepreneurComponent, pathMatch: 'full' },
  { path: 'ae2', component: Fentrepreneur2Component, pathMatch: 'full' },
  { path: 'setg', component: SetupgoalsComponent, pathMatch: 'full' },
  { path: 'mposti', component: MpostsiComponent, pathMatch: 'full' },
  { path: 'mpostp', component: MpostspComponent, pathMatch: 'full' },
  { path: 'trade', component: TradeComponent, pathMatch: 'full' },
  { path: 'vtrade', component: VtradeComponent, pathMatch: 'full' },
  { path: 'bpro', component: BprofileComponent, pathMatch: 'full' },
  { path: 'vbpro', component: VbprofileComponent, pathMatch: 'full' },
  { path: 'upro', component: UprofileComponent, pathMatch: 'full' },
  { path: 'pform', component: PostFormComponent, pathMatch: 'full' },
  { path: 'vupro', component: VuprofileComponent, pathMatch: 'full' },
  { path: 'add', component: AddpostComponent, pathMatch: 'full' },
  { path: 'update-post/:id', component: UpdatePostComponent, pathMatch: 'full' },
  { path: 'viewinquiry', component: ViewInquiriesComponent, pathMatch: 'full' },
  { path: 'vp-pro', component: VpProfileComponent, pathMatch: 'full' },
  { path: 'p-pro', component: PProComponent, pathMatch: 'full' },
  { path: 'adminpanel', component: AdminPanelComponent, pathMatch: 'full' },
  { path: 'addadvisor', component: AddAdvisorComponent, pathMatch: 'full' },
  { path: 'viewadvisor', component: ViewAdvisorComponent, pathMatch: 'full' },
  { path: 'viewinqueryadmin', component: ViewInqueryAdminComponent, pathMatch: 'full' },
  { path: 'sellr', component: SellRawComponent, pathMatch: 'full' },
  { path: 'trader', component: TradeRawComponent, pathMatch: 'full' },
  { path: 'buy', component: BuyComponent, pathMatch: 'full' },
  { path: 'vgoal', component: ViewGoalsComponent, pathMatch: 'full' },
  { path: 'add-pitch', component: AddBusinessPitchComponent, pathMatch: 'full' },
  { path: 'view-pitch', component: ViewBusinessPitchComponent, pathMatch: 'full' },
  { path: 'vbp', component: VbpitchComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
