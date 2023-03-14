import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { MasterComponent } from './core/Components/master/master.component';
import { HomeComponent } from './home/home.component';
import { LoginModule } from './user/login/login.module';
import { RegistrationModule } from './user/registration/registration.module';
const routes: Routes = [

  {
    path: '',
    component: MasterComponent,

    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path:'about',
        component:AboutComponent
      },
      {
        path:'contact-us' ,
        component:ContactUsComponent
      }
    ]

  },


  { path: 'login', loadChildren: () => import('./user/login/login.module').then(m => m.LoginModule) },
  { path: 'registration', loadChildren: () => import('./user/registration/registration.module').then(m => m.RegistrationModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
