import { Directive, Input, Output, HostListener, ElementRef, Renderer2, EventEmitter, OnInit,
  OnChanges, OnDestroy, SimpleChange } from '@angular/core';
import { NgControl, ValidationErrors } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ValidationMessageService } from './validation-msg.service';

@Directive({
  selector: '[appValidationLabel]'
})
export class ValidationLabelDirective implements OnInit, OnChanges {
  @Input() formControlName;
  @Input() formErrorsArr: any[];
  @Input() fieldInfo: string;
  @Output() formErrorsCount: EventEmitter<any> = new EventEmitter();
  fieldAlreadyExit: Boolean;
  allFields = [];


  constructor(
    private control: NgControl,
    private elr: ElementRef,
    private ren: Renderer2,
    private validationMsgService: ValidationMessageService
  ) { }

  errorSpanId = '';
  statusChangeSubscription: Subscription;

  ngOnInit(): void {
    this.fieldAlreadyExit = false;
  }

  ngOnChanges() {
    // if (changes.formErrorsArr) {
    //   console.log(changes.formErrorsArr);
    // }
  }

  @HostListener('focus', ['$event.target'])
  onFocus(target) {

  }

  @HostListener('click', ['$event.target'])
  onClickFocus(target) {
    this.creteErrorInfoTooltip();
  }

  @HostListener('focusout', ['$event.target'])
  onFocusOut(target) {
    if (this.control.touched && this.control.invalid) {
      if (this.formErrorsArr.length !== 0) {
        for (let i = 0; i < this.formErrorsArr.length; i++) {
          if (this.formErrorsArr[i].fieldName === this.control.name) {
            this.fieldAlreadyExit = true;
          }
        }
      }
      if (!this.fieldAlreadyExit) {
        const errorObj = {fieldName: this.control.name};
        this.formErrorsArr.push(errorObj);
      }
      this.addErrorClass();
    } else {
      for (let i = 0; i < this.formErrorsArr.length; i++) {
        if (this.formErrorsArr[i].fieldName === this.control.name) {
          this.formErrorsArr.splice(i, 1);
          this.removeErrorClass();
        }
      }
    }
    console.log('this.formErrorsArr => ', this.formErrorsArr);
    this.formErrorsCount.emit(this.formErrorsArr);
    this.removeErrorInfoTooltip();
  }

  creteErrorInfoTooltip() {
    const parentElem = this.elr.nativeElement.parentElement;
    const errorDiv = this.ren.createElement('div');
    const text = this.ren.createText(this.fieldInfo);
    this.ren.addClass(errorDiv, 'fieldInfo');
    this.ren.appendChild(errorDiv, text);
    this.ren.appendChild(parentElem, errorDiv);
  }

  removeErrorInfoTooltip() {
    const parentElem = this.elr.nativeElement.parentElement;
    const errorDiv = this.elr.nativeElement.parentElement.querySelector('.fieldInfo');
    console.log(errorDiv);
    if (errorDiv !== null) {
      this.ren.removeChild(parentElem, errorDiv);
    }
  }

  addErrorClass() {
      const fieldElement = this.elr.nativeElement;
      this.ren.addClass(fieldElement, 'errorfield');
      const labelElement = this.elr.nativeElement.parentElement.querySelector('label');
      this.ren.addClass(labelElement, 'errorlabel');
  }

  removeErrorClass() {
      const fieldElement = this.elr.nativeElement;
      this.ren.removeClass(fieldElement, 'errorfield');
      const labelElement = this.elr.nativeElement.parentElement.querySelector('label');
      this.ren.removeClass(labelElement, 'errorlabel');
  }

}
