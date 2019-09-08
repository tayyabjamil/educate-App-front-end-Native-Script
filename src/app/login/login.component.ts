import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';
import * as platformModule from 'tns-core-modules/platform';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { PageService } from '../theme/services/page.service';
import { RouterExtensions } from 'nativescript-angular/router';
import { HttpService } from '../shared/http.service';

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

  constructor(private page: Page, private formBuilder: FormBuilder, private pageService: PageService,
    private routerExtensions: RouterExtensions,
    private httpService: HttpService) { }

  ngOnInit() {
    // const deviceHeight: number = platformModule.screen.mainScreen.heightDIPs;
    const deviceWidth: number = platformModule.screen.mainScreen.widthDIPs;
    this.page.actionBarHidden = true;
    this.boxSize = deviceWidth * 0.35;

    this.pageSide = this.pageService.pageSidePadding();


    this.rform = this.formBuilder.group({
      email: new FormControl("", [Validators.required, Validators.email]),
      pass: new FormControl('', [Validators.required, Validators.minLength(5)]),
      confirmpass: new FormControl('', [Validators.required, Validators.minLength(11)])
    });
  }


  firstEvent() {
    this.childEvent.emit('Data from login');
  }

  onAccountSelection(user) {
    this.userType = user
  }

  get showType() {
    return this.userType;
  }

  toggleForm() {
    this.isLoggingIn = !this.isLoggingIn;
  }

  submit() {
    console.log(this.rform.value);
  }

  login() {
    if (this.userType) {

      if (this.userType === 'student') {
        if (this.rform.valid) {

          console.log(this.rform.value);

          this.httpService.login(this.rform.value).subscribe(result => {
            console.log("working");
            this.navigateTo('login/onBoardingForm');
          }, (error) => {
            console.log(error);
          })
        }
      } else {
          this.navigateTo('login/onBoardingFormteacher');
      }
    } else {
      alert('please select account type')
    }
  }

  navigateTo(url) {
    this.routerExtensions.navigate([url], {
      transition: {
        name: 'fade',
        curve: 'linear'
      }
    });
  }
}

