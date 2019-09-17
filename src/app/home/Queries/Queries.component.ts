import { Component, OnInit } from '@angular/core';
import * as platformModule from 'tns-core-modules/platform';
import { DataService } from '~/app/data.service';
import { HttpService } from '~/app/shared/http.service';
import { RouterExtensions } from 'nativescript-angular/router'


@Component({
  selector: 'ns-Queries',
  templateUrl: './Queries.component.html',
  styleUrls: ['./Queries.component.css'],
  moduleId: module.id
})
export class QueriesComponent implements OnInit {

  queries;
  pageSide;
  iconSize;

  constructor(
    private httpService: HttpService,
    private routerExtensions:RouterExtensions) {
  }

  ngOnInit() {
    const deviceHeight: number = platformModule.screen.mainScreen.heightDIPs;
    const deviceWidth: number = platformModule.screen.mainScreen.widthDIPs;
    this.pageSide = deviceWidth * 0.10;
    this.iconSize= deviceWidth * 0.095;
    // this.queries = this.service.queries;
    this.getUserQueries();
  }

  public bidinglist(){
    this.routerExtensions.navigate(['home/biddinglist']);
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
