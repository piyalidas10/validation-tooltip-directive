# Validation-Tooltip-Directive-in-Angular-6

## RUN Application

```
ng serve
http://localhost:4200
```

## Mockdata
fieldInfoContent.json in assets folder

```
{
    "fieldInfo": {
        "firstName" : "Firstname is a required field",
        "middleName": "middleName is not a required field",
        "lastName" : "Lastname is a required field",
        "emailId": "Email is a required field",
        "mobile" : "Mobile is a required field",
        "password" : "Password is a required field"
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

###Load all messages from fieldInfoContent.json using the following code which is written in register.component.ts

```
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
  ```
  
Now i have to create a directive validation-label.directive.ts will run on the status change of the form control elements. It requires a ‘formControlName’ attribute added to the control. This will be used to used to construct the key that will be passed to the validation service class. The above directive will handle the change/blur events on controls and displays the messages accordingly.
