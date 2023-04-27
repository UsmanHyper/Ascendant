import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Subject } from 'rxjs';
import { FormConfig, FormField } from './models';

@Component({
  selector: 'app-general-forms',
  templateUrl: './general-forms.component.html',
  styleUrls: ['./general-forms.component.scss']
})
export class GeneralFormsComponent implements OnInit {

  @Input() config: FormConfig;
  @Input() intervalConfig: FormConfig;
  @Input() generalForm: FormGroup;
  @Input() actions: Subject<any>;
  @Output() signals = new EventEmitter<any>();
  formFields: any[]//FormField[];
  formFieldsDict: any;
  formSections: FormGroup;
  data: any;
  
  idRefDatePicker: any
  disableEnableDatePicker: boolean;

  constructor(
    private _fb: FormBuilder,
  ) {
    this.config = null;
    this.intervalConfig = null;
    this.actions = null;
    this.generalForm = this._fb.group({});
    this.formFields = []
    this.formFieldsDict = {};
    this.data = null;
    this.disableEnableDatePicker = true;
  }

  ngOnInit(): void {
    console.log("this.config== ", this.config)
    console.log("this.intervalConfig== ", this.intervalConfig)

    this.config?.columns.forEach((dc: FormField) => {
      if (!dc.exclude) {
        let field: FormField;
        if (dc.formControl === void 0) {
          field = new FormField(dc);

          // if (dc.minLength != null) {
          //   field.formControl.setValidators(field.formControl.validator ? [field.formControl.validator, Validators.minLength(dc.minLength)] : [Validators.minLength(dc.minLength)]);
          // }

          // if (dc.maxLength != null) {
          //   field.formControl.setValidators(field.formControl.validator ? [field.formControl.validator, Validators.maxLength(dc.maxLength)] : [Validators.maxLength(dc.maxLength)]);
          // }

          // if (dc.type === 'email') {
          //   field.formControl.setValidators(field.formControl.validator ? [field.formControl.validator, Validators.email] : [Validators.email]);
          // }
        } else {
          // if (dc.type === 'email') {
          //   dc.formControl.setValidators(dc.formControl.validator ? [dc.formControl.validator, Validators.email] : [Validators.email]);
          // }

          field = dc;
        }
        this.generalForm.addControl(field.name, field.formControl);
        this.formFields.push(field);
        this.formFieldsDict[field.name] = field;
      }
    });

    this.intervalConfig?.columns.forEach((dc: FormField) => {
      if (!dc.exclude) {
        let field: FormField;

        if (dc.formControl === void 0) {
          field = new FormField(dc);

          // if (dc.minLength != null) {
          //   field.formControl.setValidators(field.formControl.validator ? [field.formControl.validator, Validators.minLength(dc.minLength)] : [Validators.minLength(dc.minLength)]);
          // }

          // if (dc.maxLength != null) {
          //   field.formControl.setValidators(field.formControl.validator ? [field.formControl.validator, Validators.maxLength(dc.maxLength)] : [Validators.maxLength(dc.maxLength)]);
          // }

          // if (dc.type === 'email') {
          //   field.formControl.setValidators(field.formControl.validator ? [field.formControl.validator, Validators.email] : [Validators.email]);
          // }
        } else {
          // if (dc.type === 'email') {
          //   dc.formControl.setValidators(dc.formControl.validator ? [dc.formControl.validator, Validators.email] : [Validators.email]);
          // }

          field = dc;
        }

        this.generalForm.addControl(field.name, field.formControl);
        this.formFields.push(field);
        this.formFieldsDict[field.name] = field;
      }
    });

    // Add controls in form
    // if (this.config['sections'].length > 0) {
    //   this.formSections = this._fb.group({});
    //   this.generalForm.addControl('sections', this.formSections);
    // }
  }

  ngAfterViewInit() {
    console.log("this.formFields== ", this.formFields)
  }

  onKeyPress(ev: any) {
    if (ev.target.selectionStart === 0 && ev.keyCode === 32) {
      return false;
    }
  }

  changedRadioButtons(event, item) {
    // console.log("event== ", event)
    console.log("item== ", item)

    if (item?.value == 'select') {
      this.disableEnableDatePicker = false;
    } else {
      this.disableEnableDatePicker = true;
    }
  }


  onSubmit() {
    const value = this.generalForm.value;
    this.signals.emit({type:"onSubmit", value: value})

  }

}
