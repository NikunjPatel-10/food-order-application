import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import { UserLoginContainerComponent } from './user-login-container/user-login-container.component';

const routes: Routes = [{ path: '', component: LoginComponent ,

children:[
  {
    path:'',
    pathMatch:'full',
    redirectTo:'form'
  },
  {
    path:'form',
    component:UserLoginContainerComponent
  }
]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
