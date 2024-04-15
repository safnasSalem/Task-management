// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DialogboxComponent } from './dialogbox/dialogbox.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';




const routes: Routes = [
  { path: '', component: LoginComponent },


  { path: 'home', component: HomeComponent },
  { path: 'sign', component: SignupComponent },

  { path: 'modal', component: DialogboxComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
