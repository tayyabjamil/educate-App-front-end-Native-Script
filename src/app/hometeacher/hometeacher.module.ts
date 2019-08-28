import { NgModule } from '@angular/core';

import { HometeacherComponent } from './hometeacher.component';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { HomeTeacherRoutingModule } from './hometeacher.routing';
import { ProfileComponent } from '../hometeacher/profile/profile.component';
import { CoursesComponent } from '../hometeacher/courses/courses.component';

import { MessagesComponent } from '../hometeacher/messages/messages.component';
import { QueriesComponent } from '../hometeacher/Queries/Queries.component';
import { NewqueryComponent } from '../hometeacher/Newquery/Newquery.component';
import { RatingsComponent } from './Ratings/Ratings.component';


@NgModule({
  imports: [
    NativeScriptCommonModule,
    HomeTeacherRoutingModule,
    
  ],
  declarations: [
    HometeacherComponent,
    ProfileComponent,
    CoursesComponent,
    MessagesComponent,
    QueriesComponent,
    NewqueryComponent,
    RatingsComponent
  ]
})
export class HometeacherModule { }
