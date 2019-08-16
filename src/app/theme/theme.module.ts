import { NgModule } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { ButtonComponent } from './component/button/button.component';

import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { PageService } from './services/page.service';
import { TextFieldComponent } from './component/textField/textField.component';

@NgModule({
  imports: [
    NativeScriptCommonModule,
    NativeScriptFormsModule,
    ReactiveFormsModule
  ],
  declarations: [ButtonComponent, TextFieldComponent],
  exports: [ButtonComponent, TextFieldComponent],
  providers: [PageService]
})
export class ThemeModule { }
