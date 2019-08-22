// app/feature/feature.routing
import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { HomeComponent } from "./home.component";
import { ProfileComponent } from "./profile/profile.component";
import { MessagesComponent } from "./messages/messages.component";
import { CoursesComponent } from "./courses/courses.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { QueriesComponent } from "./Queries/Queries.component";
import { NewqueryComponent } from "./Newquery/Newquery.component";
import { LoginComponent } from "../login/login.component";

export const routes: Routes = [
    { path: "", component: HomeComponent,
        children: [
            // { path: "", component: DashboardComponent },
            { path: "", component: QueriesComponent },
            { path: "messages", component: MessagesComponent },
            { path: "courses", component: CoursesComponent },
            {path:"queries",component:QueriesComponent},
            {path:"newquery",component:NewqueryComponent},
            
        ]
    },
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],  // set the lazy loaded routes using forChild
    exports: [NativeScriptRouterModule]
})
export class HomeRoutingModule { }