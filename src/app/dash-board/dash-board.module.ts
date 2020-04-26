import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashBoard1000Component } from './dash-board1000/dash-board1000.component';
import { DashBoarRoutingModule } from './dash-board-routing.module';
import { DashBoard2000Component } from './dash-board2000/dash-board2000.component';
import { SBSharedModule } from '../shared/sbshare.module';



@NgModule({
  declarations: [
    DashBoard1000Component,
    DashBoard2000Component,
  ],
  imports: [
    CommonModule,
    DashBoarRoutingModule,
    SBSharedModule
  ]
})
export class DashBoardModule {
  constructor() {
    console.log('home module worked');
  }
 }
