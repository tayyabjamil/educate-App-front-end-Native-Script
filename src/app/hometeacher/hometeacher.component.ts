import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';

@Component({
  selector: 'ns-hometeacher',
  templateUrl: './hometeacher.component.html',
  styleUrls: ['./hometeacher.component.css']
})
export class HometeacherComponent implements OnInit {
  constructor(private _page: Page
    ) { 
      this._page.actionBarHidden = true;

    }
newview;

  ngOnInit() {
  }
  onviewSelection(view) {
    this.newview = view
  }
  
  get showType() {
    return this.newview;
  }
}
