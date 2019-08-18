import { Component, OnInit } from '@angular/core';
import { TabView } from "tns-core-modules/ui/tab-view";
import { Page } from 'tns-core-modules/ui/page/page';
@Component({
  selector: 'ns-dashboardstudent',
  templateUrl: './dashboardstudent.component.html',
  styleUrls: ['./dashboardstudent.component.css'],
  moduleId:module.id
})
export class DashboardstudentComponent implements OnInit {

  constructor(private _page: Page) { this._page.actionBarHidden = true;}



  ngOnInit() {
  }

}
