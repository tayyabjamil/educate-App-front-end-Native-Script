import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { HomeRoutingModule } from './home.routing';
import { CoursesComponent } from './courses/courses.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MessagesComponent } from './messages/messages.component';
import { ProfileComponent } from './profile/profile.component';
import { QueriesComponent } from './Queries/Queries.component';
import { NewqueryComponent } from './Newquery/Newquery.component';
import { ThemeModule } from '../theme/theme.module';

@NgModule({
  imports: [
    NativeScriptCommonModule,
    HomeRoutingModule,
    ThemeModule
  ],
  declarations: [
    HomeComponent,
    CoursesComponent,
    DashboardComponent,
    MessagesComponent,
    ProfileComponent,
    QueriesComponent,
    NewqueryComponent
  ]
})
export class HomeModule { }
