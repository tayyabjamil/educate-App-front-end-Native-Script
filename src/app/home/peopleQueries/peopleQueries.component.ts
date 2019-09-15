import { Component, OnInit } from '@angular/core';
import * as platformModule from 'tns-core-modules/platform';
import { DataService } from '~/app/data.service';
import { HttpService } from '~/app/shared/http.service';

@Component({
  selector: 'ns-peopleQueries',
  templateUrl: './peopleQueries.component.html',
  styleUrls: ['./peopleQueries.component.css']
})
export class PeopleQueriesComponent implements OnInit {
queries;
pageSide;
  constructor(
    private httpService:HttpService
    ) { }

  ngOnInit() {
    const deviceHeight: number = platformModule.screen.mainScreen.heightDIPs;
    const deviceWidth: number = platformModule.screen.mainScreen.widthDIPs;
    this.pageSide = deviceWidth * 0.10;
   
    this.getPeopleQueries();
  }
  getPeopleQueries() {
    this.httpService.getPeopleQueries()
    .subscribe(res => {
      this.queries = res;
      console.log(res);
    }, (error) => {
      console.log(error);
    });
  }

}
