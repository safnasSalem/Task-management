
  import { NgModule } from '@angular/core';
  import { BrowserModule } from '@angular/platform-browser';
  import { AppRoutingModule } from './app-routing.module';
  import { AppComponent } from './app.component';
  import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import { HomeComponent } from './pages/home/home.component';
import { NavComponent } from './common/nav/nav.component';
import { FooterComponent } from './common/footer/footer.component';
import { DialogboxComponent } from './dialogbox/dialogbox.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
  @NgModule({
    declarations: [
      
    AppComponent,
    HomeComponent,
    NavComponent,
    FooterComponent,
    DialogboxComponent,
    LoginComponent,
    SignupComponent,
  ],
    imports: [
      MatCardModule,
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      MatDialogModule,
      MatButtonModule,
      HttpClientModule,
      MatInputModule,
      FormsModule,
      MatFormFieldModule,
      MatSelectModule
      ,ReactiveFormsModule

     
    ],
    providers: [],
    bootstrap: [AppComponent],
  })
  export class AppModule {}