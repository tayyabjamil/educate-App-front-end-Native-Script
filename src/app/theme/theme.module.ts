import { NgModule } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { ButtonComponent } from './component/button/button.component';

import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { PageService } from './services/page.service';
import { TextFieldComponent } from './component/textField/textField.component';
import { ImageUploadComponent } from './component/image-upload/image-upload.component';
import { IconComponent } from './component/icon/icon.component';

@NgModule({
  imports: [
    NativeScriptCommonModule,
    NativeScriptFormsModule,
    ReactiveFormsModule
  ],
  declarations: [ButtonComponent, TextFieldComponent, ImageUploadComponent, IconComponent],
  exports: [ButtonComponent, TextFieldComponent, ImageUploadComponent, IconComponent],
  providers: [PageService]
})
export class ThemeModule { }
