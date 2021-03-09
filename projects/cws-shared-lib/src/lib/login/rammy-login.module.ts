
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './rammy/login.component';
import { Routes, RouterModule } from '@angular/router';
//import { LoginPageRoutingModule } from './login-routing.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: LoginComponent
      }])
    //LoginPageRoutingModule
  ],
  declarations: [LoginComponent]
})
export class RammyLoginPageModule {
}
