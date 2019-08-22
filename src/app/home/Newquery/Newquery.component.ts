import { Component, OnInit } from '@angular/core';
import * as platformModule from 'tns-core-modules/platform';
import { Page } from 'tns-core-modules/ui/page/page';
@Component({
  selector: 'ns-Newquery',
  templateUrl: './Newquery.component.html',
  styleUrls: ['./Newquery.component.css'],
  moduleId: module.id
})
export class NewqueryComponent implements OnInit {
  pageSide: number;

  constructor(private _page: Page) { }

  ngOnInit() {


    this._page.actionBarHidden = true;
    const deviceHeight: number = platformModule.screen.mainScreen.heightDIPs;
    const deviceWidth: number = platformModule.screen.mainScreen.widthDIPs;

    this.pageSide = deviceWidth * 0.10;
  }

}
