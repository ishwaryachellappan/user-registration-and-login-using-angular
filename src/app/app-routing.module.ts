import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';

const routes: Routes = [
  { path:'home', component:HomeComponent},
  { path:'signup', component:SignupComponent},
  { path:'Login', component:LoginComponent},
  { path:'Forgetpassword', component:ForgetpasswordComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
