import { Component, OnInit, ElementRef } from '@angular/core';
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

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private validErrorMsgService: ValidationMessageService,
    private el: ElementRef
  ) { }

  ngOnInit() {
    this.createForm();
    this.validationErrorMsg();
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

  verifyForm() {
    const invalidElements = this.el.nativeElement.querySelectorAll('.form-control.ng-invalid');
    if (invalidElements.length > 0) {
      invalidElements[0].focus();
    } else {
      console.log('Registration details => ', this.registerForm.value);
    }
  }

  /*
  *** Get API response as validation error json and load response in validationErrorObj of validErrorMsgService
  */
 validationErrorMsg() {
  this.apiService.getValidationErrorMessage().then(
    (res) => {
      if (this.validErrorMsgService.validationErrorObj.length === 0) {
        this.validErrorMsgService.validationErrorObj = res['validationErrors'];
        console.log('Validation Error => ', this.validErrorMsgService.validationErrorObj);
        this.isLoading = false;
      }
    }, (error) => {
      console.log(error);
      this.isLoading = false;
    });
}

}
