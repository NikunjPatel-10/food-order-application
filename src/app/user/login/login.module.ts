import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { UserLoginContainerComponent } from './user-login-container/user-login-container.component';
import { UserLoginPresentationComponent } from './user-login-container/user-login-presentation/user-login-presentation.component';


@NgModule({
  declarations: [
    LoginComponent,
    UserLoginContainerComponent,
    UserLoginPresentationComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
