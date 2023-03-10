import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginModule } from './user/login/login.module';
import { RegistrationModule } from './user/registration/registration.module';
const routes: Routes = [

  {
path:'',
pathMatch:'full',
redirectTo:'login'
  },

  { path: 'login', loadChildren: () => import('./user/login/login.module').then(m => m.LoginModule) }, 
  { path: 'registration', loadChildren: () => import('./user/registration/registration.module').then(m => m.RegistrationModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
