import { Component, OnInit } from '@angular/core';
import * as platformModule from 'tns-core-modules/platform';

   
@Component({
  selector: 'ns-Queries',
  templateUrl: './Queries.component.html',
  styleUrls: ['./Queries.component.css'],
  moduleId:module.id
})
export class QueriesComponent implements OnInit {
  countries: { name: string, imageSrc: string }[] = [
    { name: "Operating System", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/au.png" },
    { name: "English", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/be.png" },
    { name: "Assignment", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/bg.png" },
    { name: "Lab database", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/ca.png" },
    { name: "Operating System", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/ch.png" },
    { name: "English", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/cn.png" },
    { name: "Assignmen", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/cz.png" },
    { name: "Lab database", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/de.png" },
    ];
pageSide;
  constructor() {
   

   }

  ngOnInit() {
    const deviceHeight: number = platformModule.screen.mainScreen.heightDIPs;
    const deviceWidth: number = platformModule.screen.mainScreen.widthDIPs;

    this.pageSide = deviceWidth * 0.10;
  }
 
}
