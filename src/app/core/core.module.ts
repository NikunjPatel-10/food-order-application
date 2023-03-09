import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './Components/header/header.component';
import { MasterComponent } from './Components/master/master.component';



@NgModule({
  declarations: [
    HeaderComponent,
    MasterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
