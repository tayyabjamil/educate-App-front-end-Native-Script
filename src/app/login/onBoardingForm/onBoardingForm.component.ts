import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Page } from 'tns-core-modules/ui/page/page';

 import * as imagepicker from "nativescript-imagepicker";

import * as platformModule from 'tns-core-modules/platform';
import { PageService } from '~/app/theme/services/page.service';

@Component({
    selector: 'ns-onBoardingForm',
    templateUrl: './onBoardingForm.component.html',
    styleUrls: ['./onBoardingForm.component.css']
})

export class OnBoardingFormComponent implements OnInit {

    onBoarding;
    onBardingForm
    pageSide;
    boxSize;
    title;
    latestReceivedIndex = 0;
    imageSrc: any;
    previewSize: number;

    @ViewChild('pager', { static: true }) pager: ElementRef;

    constructor(private page: Page, private formBuilder: FormBuilder, private pageService: PageService) {

    }

    ngOnInit(): void {
        this.page.actionBarHidden = true;
        const deviceWidth: number = platformModule.screen.mainScreen.widthDIPs;
        this.boxSize = deviceWidth * 0.35;
        this.previewSize = deviceWidth * 0.40;

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

    get formTitle() {
        return this.onBoarding[this.latestReceivedIndex].title;
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
   

    public onSelectSingleTap() {

        let context = imagepicker.create({
            mode: "single"
        });
        this.startSelection(context);
    }

    private startSelection(context) {
        let that = this;

        context
        .authorize()
        .then(() => {
            that.imageSrc = null;
            return context.present();
        })
        .then((selection) => {
            console.log("Selection done: " + JSON.stringify(selection));
            that.imageSrc = selection.length > 0 ? selection[0] : null;
        }).catch(function (e) {
            console.log(e);
        });
    }
}

