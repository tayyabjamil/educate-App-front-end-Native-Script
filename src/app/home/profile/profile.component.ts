import { Component, OnInit } from '@angular/core';
import * as platformModule from 'tns-core-modules/platform';
@Component({
  selector: 'ns-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  moduleId:module.id
})
export class ProfileComponent implements OnInit {
  previewSize: number;
  pageSide;
  constructor() { }

  ngOnInit() {
    const deviceHeight: number = platformModule.screen.mainScreen.heightDIPs;
    const deviceWidth: number = platformModule.screen.mainScreen.widthDIPs;
    this.previewSize = deviceWidth * 0.30;
    this.pageSide = deviceWidth * 0.10;
  }

}
