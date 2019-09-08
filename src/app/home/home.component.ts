import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';

@Component({
  selector: 'ns-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  moduleId: module.id
})

export class HomeComponent implements OnInit {

  newview: any;

  constructor(private _page: Page) { }

  ngOnInit() {
    this._page.actionBarHidden = true;
  }

  onviewSelection(view) {
    this.newview = view
  }

  get showType() {
    return this.newview;
  }

}
