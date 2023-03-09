import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { RegistrationComponent } from './user/registration/registration.component';

const routes: Routes = [

  {
path:'',
pathMatch:'full',
redirectTo:'login'
  },




  { path: 'login', loadChildren: () => import('./user/login/login.module').then(m => m.LoginModule) }, { path: 'registration', loadChildren: () => import('./user/registration/registration.module').then(m => m.RegistrationModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
