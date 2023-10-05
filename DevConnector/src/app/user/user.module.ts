import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { RegisterComponent } from './components/auth/register/register.component';
import { LoginComponent } from './components/auth/login/login.component';
import { FormsModule } from '@angular/forms';
import { UserService } from './services/user.service';
import {HttpClientModule} from '@angular/common/http';
import { httpInterceptor } from '../shared/interceptors';

@NgModule({
  declarations: [
   LoginComponent, RegisterComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    UserRoutingModule
  ],
  providers:[UserService,httpInterceptor],
})
export class UserModule { }
