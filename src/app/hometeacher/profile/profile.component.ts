import { Component, OnInit } from '@angular/core';
import * as platformModule from 'tns-core-modules/platform';
import { Page } from 'tns-core-modules/ui/page/page';
import { PageService } from '~/app/theme/services/page.service';
import { DataService } from '~/app/data.service';

@Component({
  selector: 'ns-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  moduleId:module.id
})
export class ProfileComponent implements OnInit {

  previewSize: number;
  itemPadding: number;
  pageSide;
  profileData;

  constructor(private _page: Page, private pageService: PageService, private dataService: DataService) { }

  ngOnInit() {
    // const deviceHeight: number = platformModule.screen.mainScreen.heightDIPs;
    const deviceWidth: number = platformModule.screen.mainScreen.widthDIPs;
    this.previewSize = deviceWidth * 0.25;
    this.itemPadding = deviceWidth * 0.04;

    this.pageSide = this.pageService.pageSidePadding();
    this._page.actionBarHidden = true;
    // this.profileData = this.dataService.profileData;
  }

}
