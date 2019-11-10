import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  errorsObj: any;
  isGlobalError = false;
  globalErrorTimer: any;

  constructor(private el: ElementRef) {
  }

  formErrorsEvent(evt) {
    this.errorsObj = evt;
    console.log('formErrorsArr => ', this.errorsObj);
    if (this.errorsObj.length > 0) {
      this.isGlobalError = true;
      window.scrollTo(0, 0);
      this.globalErrorTimer = setTimeout( () => {
        console.log(this.el.nativeElement.querySelector('.globalError'));
        this.el.nativeElement.querySelector('.globalError').focus();
      }, 0);
    }
  }

  goToField() {
    console.log(this.el.nativeElement);
    this.el.nativeElement.querySelector('#' + this.errorsObj[0].fieldName).focus();
  }

}
