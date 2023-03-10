import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration.component';
import { UserRegistrationContainerComponent } from './user-registration-container/user-registration-container.component';

const routes: Routes = [{
  path: '', component: RegistrationComponent,

  children: [
    {
      path: 'form',
      component: UserRegistrationContainerComponent
    }
  ]

}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrationRoutingModule { }
