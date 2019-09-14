import { Component, OnInit } from '@angular/core';
import * as platformModule from 'tns-core-modules/platform';
import { DataService } from '~/app/data.service';
import { HttpService } from '~/app/shared/http.service';


@Component({
  selector: 'ns-Queries',
  templateUrl: './Queries.component.html',
  styleUrls: ['./Queries.component.css'],
  moduleId: module.id
})
export class QueriesComponent implements OnInit {

  queries;
  pageSide;

  constructor(private httpService: HttpService) {
  }

  ngOnInit() {
    const deviceHeight: number = platformModule.screen.mainScreen.heightDIPs;
    const deviceWidth: number = platformModule.screen.mainScreen.widthDIPs;
    this.pageSide = deviceWidth * 0.10;
    // this.queries = this.service.queries;
    this.getUserQueries();
  }

  getUserQueries() {
    this.httpService.getUserQueries()
    .subscribe(res => {
      this.queries = res;
      console.log(res);
    }, (error) => {
      console.log(error);
    });
  }

}
