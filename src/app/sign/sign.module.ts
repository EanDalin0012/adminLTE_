import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignRoutingModule } from './sign-routing.module';
import { Sign1000Component } from './sign1000/sign1000.component';



@NgModule({
  declarations: [
    Sign1000Component
  ],
  imports: [
    CommonModule,
    SignRoutingModule
  ]
})
export class SignModule {
  constructor() {
    console.log('Sign Module Worked');
  }
}
