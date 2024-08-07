import { Component } from '@angular/core';
import {UntypedFormControl, UntypedFormGroup} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
  value = 'test';
  formGroup: UntypedFormGroup = new UntypedFormGroup({
    richText: new UntypedFormControl({value: 'testing', disabled: true})
  });
}
