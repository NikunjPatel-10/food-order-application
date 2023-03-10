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

<<<<<<< HEAD

  { path: 'login', loadChildren: () => import('./user/login/login.module').then(m => m.LoginModule) }, 
  { path: 'registration', loadChildren: () => import('./user/registration/registration.module').then(m => m.RegistrationModule) }];
=======
  { path: 'login', loadChildren: () => import('./user/login/login.module').then(m => m.LoginModule) }, 
  { path: 'registration', loadChildren: () => import('./user/registration/registration.module').then(m => m.RegistrationModule) }
];
>>>>>>> 5f4624ff68d6212f4f8126ff234f4c89bf1fbf11

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
