import { Component, OnInit } from '@angular/core';
import * as platformModule from 'tns-core-modules/platform';
import { Page } from 'tns-core-modules/ui/page/page';
import * as ModalPicker from 'nativescript-modal-datetimepicker';
@Component({
  selector: 'ns-Newquery',
  templateUrl: './Newquery.component.html',
  styleUrls: ['./Newquery.component.css'],
  moduleId: module.id
})
export class NewqueryComponent implements OnInit {
  pageSide: number;
  birthday: string;

  constructor(private _page: Page) { }

  ngOnInit() {


    this._page.actionBarHidden = true;
    const deviceHeight: number = platformModule.screen.mainScreen.heightDIPs;
    const deviceWidth: number = platformModule.screen.mainScreen.widthDIPs;

    this.pageSide = deviceWidth * 0.10;
  }
  todate;
  fromdate;
  pickDatefrom() {
    const picker = new ModalPicker.ModalDatetimepicker();
    picker.pickDate({
      theme: 'dark',
      maxDate: new Date(),
      is24HourView: false
    }).then((result) => {
      this.fromdate = result['year'] + '-' + result['month'] + '-' + result['day'];
    }).catch((error) => {
      console.log('Error: ' + error);
    });
  }

  pickDateto() {
    const picker = new ModalPicker.ModalDatetimepicker();
    picker.pickDate({
      theme: 'dark',
      maxDate: new Date(),
      is24HourView: false
    }).then((result) => {
      this.todate = result['year'] + '-' + result['month'] + '-' + result['day'];
    }).catch((error) => {
      console.log('Error: ' + error);
    });
  }
}

