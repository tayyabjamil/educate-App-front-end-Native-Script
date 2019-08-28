// app/feature/feature.routing
import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { HometeacherComponent } from "./hometeacher.component";
import { ProfileComponent } from "./profile/profile.component";
import { MessagesComponent } from "./messages/messages.component";

import { QueriesComponent } from "./Queries/Queries.component";
import { NewqueryComponent } from "./Newquery/Newquery.component";
import { RatingsComponent } from "./Ratings/Ratings.component";

export const routes: Routes = [
    {
        path: "", component: HometeacherComponent,
        children: [
            {path:"profile",component:ProfileComponent},
            { path: "inbox", component: MessagesComponent },
            { path:"ratings", component: RatingsComponent},
            { path: "queries", component: QueriesComponent },
            { path: "newquery", component: NewqueryComponent },

        ]
    },
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],  // set the lazy loaded routes using forChild
    exports: [NativeScriptRouterModule]
})
export class HomeTeacherRoutingModule { }