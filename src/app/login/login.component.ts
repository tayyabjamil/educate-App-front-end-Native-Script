import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';
import * as platformModule from 'tns-core-modules/platform';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { PageService } from '../theme/services/page.service';
import { RouterExtensions } from 'nativescript-angular/router';
import { HttpService } from '../shared/http.service';
import { setBoolean } from "tns-core-modules/application-settings";
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'ns-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @ViewChild('scrollView', { static: true }) scrollView: ElementRef;
  @Output() public childEvent = new EventEmitter();

  boxSize;
  userType;
  isLoggingIn: boolean = true;
  rform: FormGroup
  pageSide;
  isBusy = false;

  constructor(private page: Page, private formBuilder: FormBuilder, private pageService: PageService,
    private routerExtensions: RouterExtensions,
    private httpService: HttpService,
    private authService: AuthService) { }

  ngOnInit() {
    const deviceWidth: number = platformModule.screen.mainScreen.widthDIPs;
    this.page.actionBarHidden = true;
    this.boxSize = deviceWidth * 0.35;

    this.pageSide = this.pageService.pageSidePadding();

    this.rform = this.formBuilder.group({
      email: new FormControl("test1@gmail.com", [Validators.required, Validators.email]),
      password: new FormControl('password', [Validators.required, Validators.minLength(5)]),
      userType: new FormControl('', Validators.required),
    });
  }



  onAccountSelection(user) {
    if (this.rform.controls['userType']) {
      this.rform.controls['userType'].setValue(user);
    }
    this.userType = user;
  }

  get showType() {
    return this.userType;
  }

  login() {
    if (this.rform.controls['userType'].valid) {
      if (this.rform.valid) {
        this.isBusy = true;
        this.httpService.login(this.rform.value).subscribe(result => {
          console.log(result);
          this.isBusy = false;
          if ((<any>result).length !== 0) {
            this.authService.setLoggedIn();
            this.routerExtensions.navigate(['home'])
          } else {
            alert('username & email not found');
          }
        }, (error) => {
          console.log(error)
        })
      }
    } else {
      alert('please select user type');
    }
  }

  signup() {
    this.routerExtensions.navigate(['login/onBoardingForm'])
  }
}


