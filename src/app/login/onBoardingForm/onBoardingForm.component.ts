import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Page } from 'tns-core-modules/ui/page/page';


import * as platformModule from 'tns-core-modules/platform';
import { PageService } from '~/app/theme/services/page.service';

@Component({
    selector: 'ns-onBoardingForm',
    templateUrl: './onBoardingForm.component.html',
    styleUrls: ['./onBoardingForm.component.scss']
})

export class OnBoardingFormComponent implements OnInit {

    onBoarding;
    onBardingForm
    pageSide;
    boxSize;
    title;
    currentPagerIndex: 0;
    latestReceivedIndex = 0;

    @ViewChild('pager', { static: true }) pager: ElementRef;
   

    constructor(private page: Page, private formBuilder: FormBuilder, private pageService: PageService) {

    }

    ngOnInit(): void {
        this.page.actionBarHidden = true;
        const deviceWidth: number = platformModule.screen.mainScreen.widthDIPs;
        this.boxSize = deviceWidth * 0.35;

        this.pageSide = this.pageService.pageSidePadding();
        this.onBardingForm = this.formBuilder.group({
            Firstname: new FormControl("", [Validators.required, Validators.email]),
            Lastname: new FormControl('', [Validators.required, Validators.minLength(5)]),
            Adress: new FormControl('', [Validators.required]),
            Contact: new FormControl('', [Validators.required]),
            University: new FormControl('', [Validators.required]),
            Department: new FormControl('', [Validators.required]),
            Semester: new FormControl('', [Validators.required]),

        })

        this.onBoarding = [
            {
                title: 'Personal Information',
                key: 'personalInfo'

            },
            {
                title: 'Academics Information',
                key: 'contactInfo'
            },
            {
                title: 'Profile Picture',
                key: 'imageInfo'
            },
        ];

    }


    onIndexChanged($event) {
        this.latestReceivedIndex = $event.value;
    }

    get formtitle() {
        if (this.onBoarding[this.currentPagerIndex].title) {
            return this.onBoarding[this.currentPagerIndex].title;
          }
        }

    onSubmit() {
        debugger;
        console.log(this.onBardingForm.value);
    }

    public templateSelector = (item: any) => {
        switch (item.key) {
            case 'personalInfo': {
                return 'personalInfo'
            }
                break;
            case 'contactInfo': {
                return 'contactInfo'
            }
                break;
            case 'imageInfo': {
                return 'imageInfo'
            }
                break;
        }
    }

    onSelectedImage(img) {
        alert('image is selected');
    }
}

