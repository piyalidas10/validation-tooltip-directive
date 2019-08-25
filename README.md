# Validation-Directive-in-Angular-6

## Mockdata
validationerrors.json in assets folder

```
{
    "validationErrors": {
        "firstName-required" : "Firstname is a required field",
        "firstName-minlength" : "Firstname must have 2 characters",
        "firstName-maxlength" : "Firstname can have maximum 30 characters",

        "lastName-required" : "Lastname is a required field",
        "lastName-minlength" : "Lastname must have 2 characters",
        "lastName-maxlength" : "Lastname can have maximum 30 characters",

        "emailId-required": "Email is a required field",
        "emailId-email": "Email is not in valid format",
        "emailId-minlength" : "Email must have 6 characters",

        "mobile-required" : "Mobile is a required field",
        "mobile-minlength" : "Mobile must have 10 characters",

        "password-required" : "Password is a required field",
        "password-minlength" : "Password must have 6 characters",
        "password-maxlength" : "Password can have maximum 20 characters"
    }
}
```

validation-msg.service.ts

```
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ValidationMessageService {
  validationErrorObj = [];
  public getValidationMsg(validationId: string): string {
    return this.validationErrorObj[validationId];
  }
}
```

###Load all messages from validationerrors.json using the following code which is written in register.component.ts

```
validationErrorMsg() {
    this.apiService.getValidationErrorMessage().then(
      (res) => {
        if (this.validErrorMsgService.validationErrorObj.length === 0) {
          this.validErrorMsgService.validationErrorObj = res['validationErrors'];
          console.log('Validation Error => ', this.validErrorMsgService.validationErrorObj);
        }
      }, (error) => {
        this.errorData = this.sharedService.getErrorKeys(error.statusText);
      });
  }
  ```
  
Now i have to create a directive validation-label.directive.ts will run on the status change of the form control elements. It requires a ‘formControlName’ attribute added to the control. This will be used to used to construct the key that will be passed to the validation service class. The above directive will handle the change/blur events on controls and displays the messages accordingly.

Few things to notice in this class are that I defined ‘statusChangeSubscription’ to listen to status changes on the control and remove/add error message depending on the status (INVALID). Also we unsubscribe it on destroy class. And I defined a helper method to construct the message key, get the error message from service class and display it on the view.
