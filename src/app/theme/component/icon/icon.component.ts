import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ns-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {

  @Input() col = 0;
  @Input() icon  = ''; //'#&x342;';
  
  constructor() { }

  ngOnInit() {
  }

}
