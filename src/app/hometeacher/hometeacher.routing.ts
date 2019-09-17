// app/feature/feature.routing
import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { HometeacherComponent } from "./hometeacher.component";
import { ProfileComponent } from "./profile/profile.component";
import { MessagesComponent } from "./messages/messages.component";

import { QueriesComponent } from "./Queries/Queries.component";
import { CoursesComponent } from "./courses/courses.component";

export const routes: Routes = [
    {
        path: "", component: HometeacherComponent,
        children: [
            {path:"profile",component:ProfileComponent},
            { path: "inbox", component: MessagesComponent },
            { path: "queries", component: QueriesComponent },
            { path:"courses",component:CoursesComponent}
        ]
    },
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],  // set the lazy loaded routes using forChild
    exports: [NativeScriptRouterModule]
})
export class HomeTeacherRoutingModule { }