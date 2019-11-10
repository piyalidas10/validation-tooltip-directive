import { Component, OnInit, ElementRef, EventEmitter, Output, Renderer2 } from '@angular/core';
import { ApiService } from '../api.service';
import { ValidationMessageService } from '../validation-msg.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  isLoading: Boolean = true;
  registerForm: FormGroup;
  formContent = {};
  formErrorsArr = [];
  title: String;
  fieldInfoMsgArr = [];
  errors: any;
  isFieldExit = false;
  @Output() formErrorsCount: EventEmitter<any> = new EventEmitter();

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private validErrorMsgService: ValidationMessageService,
    private el: ElementRef,
    private ren: Renderer2
  ) {
  }

  ngOnInit() {
    this.title = 'Register';
    this.formContentFunc();
    this.validationErrorMsg();
  }

  formContentFunc() {
    this.apiService.getFormContent().then(
      (res) => {
        console.log(res);
        if (res !== undefined || res !== null) {
          this.formContent = res;
          this.isLoading = false;
          this.createForm();
        }
      }, (error) => {
        console.log(error);
        this.isLoading = false;
      });
  }

  createForm() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
      middleName: ['', [Validators.minLength(2), Validators.maxLength(30)]],
      lastName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
      emailId: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]*$'), Validators.minLength(10), , Validators.maxLength(10)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  /*
  *** Get API response as validation error json and load response in validationErrorObj of validErrorMsgService
  */
 validationErrorMsg() {
  this.apiService.getFieldInfoMessage().then(
    (res) => {
      if (this.validErrorMsgService.validationErrorObj.length === 0) {
        this.fieldInfoMsgArr = res['fieldInfo'];
        console.log('Field Info Array => ', this.fieldInfoMsgArr);
        this.isLoading = false;
      }
    }, (error) => {
      console.log(error);
      this.isLoading = false;
    });
  }

  formErrorsEvent(evt) {
    this.errors = evt;
  }

  verifyForm() {
    const cloneErrors = this.errors;
    Object.keys(this.registerForm.controls).forEach(key => {
      if (this.registerForm.get(key).invalid) {
        this.el.nativeElement.querySelector('#' + key).classList.add('errorfield');
        this.el.nativeElement.querySelector('#' + key).parentElement.querySelector('label').classList.add('errorlabel');
        const obj = {fieldName: key};
        if (cloneErrors.length > 0) {
          for (let i = 0; i < cloneErrors.length; i++) {
            if (cloneErrors[i].fieldName === key) {
              this.isFieldExit = true;
            }
          }
        }
        if (!this.isFieldExit) {
          this.errors.push(obj);
        }
      }
      this.isFieldExit = false;
    });
    this.formErrorsCount.emit(this.errors);
  }

}
