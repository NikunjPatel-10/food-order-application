import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationRoutingModule } from './registration-routing.module';
import { RegistrationComponent } from './registration.component';
import { UserRegistrationContainerComponent } from './user-registration-container/user-registration-container.component';
import { UserRegistrationPresentationComponent } from './user-registration-container/user-registration-presentation/user-registration-presentation.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RegistrationComponent,
    UserRegistrationContainerComponent,
    UserRegistrationPresentationComponent
  ],
  imports: [
    CommonModule,
    RegistrationRoutingModule,
    ReactiveFormsModule
  ]
})
export class RegistrationModule { }
