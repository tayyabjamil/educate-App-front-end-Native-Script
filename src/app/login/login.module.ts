import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login.routing';
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { PagerModule } from "nativescript-pager/angular";
import { OnBoardingFormComponent } from './onBoardingForm/onBoardingForm.component';
import { OnBoardingFormteacherComponent } from './onBoardingFormteacher/onBoardingFormteacher.component';
import { ThemeModule } from '../theme/theme.module';
import { DashboardstudentComponent } from './dashboardstudent/dashboardstudent.component';
import { DashboardteacherComponent } from './dashboardteacher/dashboardteacher.component';

@NgModule({
  imports: [
    NativeScriptCommonModule,
    LoginRoutingModule,
    ThemeModule,
    PagerModule,
   ],
  declarations: [
    LoginComponent, 
    OnBoardingFormComponent,
    OnBoardingFormComponent,
    OnBoardingFormteacherComponent,
    DashboardstudentComponent,
    DashboardteacherComponent
  ]
})

export class LoginModule { }
