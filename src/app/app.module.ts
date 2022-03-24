import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AccountcreatedComponent } from './accountcreated/accountcreated.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AccountsettingsComponent } from './dashboard/accountsettings/accountsettings.component';
import { MatchlistComponent } from './dashboard/matchlist/matchlist.component';
import { MessageConnectionComponent } from './dashboard/message-connection/message-connection.component';
import { AboutmeComponent } from './signup/aboutme/aboutme.component';
import { ChildrenComponent } from './signup/children/children.component';
import { CredentialsComponent } from './signup/credentials/credentials.component';
import { SkillsComponent } from './signup/skills/skills.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule} from '@angular/material/tabs';
import { CarouselModule, WavesModule } from 'angular-bootstrap-md';
import { DashboardRightComponent } from './dashboard/dashboard-right/dashboard-right.component';
import { EditProfileComponent } from './dashboard/edit-profile/edit-profile.component';
import { EditAboutComponent } from './dashboard/edit-about/edit-about.component';
import { DeleteAccountComponent } from './dashboard/delete-account/delete-account.component';




const routes: Routes = [
  {path: "", component: WelcomeComponent},
  {path: "login", component: LoginComponent},
  {path:"signup", component:SignupComponent, children:[
     {path:"", component:AboutmeComponent},
     {path:"children", component:ChildrenComponent},
     {path:"credentials", component:CredentialsComponent},
     {path:"skils", component:SkillsComponent},

  ]},
  {path: "dashboard", component:DashboardComponent, children:[
      
    {path: "", component: DashboardRightComponent},
     {path:"accountsettings", component: AccountsettingsComponent},
     {path:"deleteaccount", component: DeleteAccountComponent},
     {path:"editabout", component: EditAboutComponent}
     
    
  ]}
]

@NgModule({
  declarations: [
    AppComponent,
    AccountcreatedComponent,
    DashboardComponent,
    LoginComponent,
    SignupComponent,
    WelcomeComponent,
    AccountsettingsComponent,
    MatchlistComponent,
    MessageConnectionComponent,
    AboutmeComponent,
    ChildrenComponent,
    CredentialsComponent,
    SkillsComponent,
    DashboardRightComponent,
    EditProfileComponent,
    EditAboutComponent,
    DeleteAccountComponent
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {useHash:true}),
    BrowserAnimationsModule,
    MatTabsModule,
    CarouselModule,
    WavesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
