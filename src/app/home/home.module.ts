import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { HomeRoutingModule } from './home.routing';
import { CoursesComponent } from './courses/courses.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MessagesComponent } from './messages/messages.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  imports: [
    NativeScriptCommonModule,
    HomeRoutingModule
  ],
  declarations: [
    HomeComponent,
    CoursesComponent,
    DashboardComponent,
    MessagesComponent,
    ProfileComponent
  ]
})
export class HomeModule { }
