import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './Components/header/header.component';
import { MasterComponent } from './Components/master/master.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HeaderComponent,
    MasterComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[HeaderComponent,MasterComponent]
})
export class CoreModule { }
