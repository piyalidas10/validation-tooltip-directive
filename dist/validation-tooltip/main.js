(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/api.service.ts":
/*!********************************!*\
  !*** ./src/app/api.service.ts ***!
  \********************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
    }
    /**
       * Get Form content
      */
    ApiService.prototype.getFormContent = function () {
        var _this = this;
        // tslint:disable-next-line:no-shadowed-variable
        var promise = new Promise(function (resolve, reject) {
            var apiURL = 'http://localhost:4200/assets/formcontent.json';
            return _this.http.get(apiURL).toPromise().then(function (res) {
                resolve(res);
            }, function (msg) {
                reject(msg);
            });
        });
        return promise;
    };
    /**
    * Get Field Info message
   */
    ApiService.prototype.getFieldInfoMessage = function () {
        var _this = this;
        // tslint:disable-next-line:no-shadowed-variable
        var promise = new Promise(function (resolve, reject) {
            var apiURL = 'http://localhost:4200/assets/fieldInfoContent.json';
            return _this.http.get(apiURL).toPromise().then(function (res) {
                resolve(res);
            }, function (msg) {
                reject(msg);
            });
        });
        return promise;
    };
    ApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".globalError{\r\n    position: fixed;\r\n    width: 100%;\r\n    top: 0;\r\n    background: #ffffff;\r\n    text-align: center;\r\n}\r\n.globalError p{\r\n    margin: 10px 0;\r\n}\r\n.globalError p a{\r\n    font-weight: bold;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div class=\"globalError\" *ngIf=\"isGlobalError\">\r\n    <p>To register, please fill up <a href=\"javascript:void(0);\" (click)=\"goToField()\">{{errorsObj.length}}</a> fields.</p>\r\n</div>\r\n<app-register (formErrorsCount)='formErrorsEvent($event)'></app-register>\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent(el) {
        this.el = el;
        this.title = 'app';
        this.isGlobalError = false;
    }
    AppComponent.prototype.formErrorsEvent = function (evt) {
        var _this = this;
        this.errorsObj = evt;
        console.log('formErrorsArr => ', this.errorsObj);
        if (this.errorsObj.length > 0) {
            this.isGlobalError = true;
            window.scrollTo(0, 0);
            this.globalErrorTimer = setTimeout(function () {
                console.log(_this.el.nativeElement.querySelector('.globalError'));
                _this.el.nativeElement.querySelector('.globalError').focus();
            }, 0);
        }
    };
    AppComponent.prototype.goToField = function () {
        console.log(this.el.nativeElement);
        this.el.nativeElement.querySelector('#' + this.errorsObj[0].fieldName).focus();
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _validation_label_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./validation-label.directive */ "./src/app/validation-label.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"],
                _validation_label_directive__WEBPACK_IMPORTED_MODULE_7__["ValidationLabelDirective"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]
            ],
            providers: [],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loader-bg {\r\n    position: fixed;\r\n    background: rgba(0, 0, 0, 0.5);\r\n    z-index: 1000;\r\n    width: 100%;\r\n    height: 100%;\r\n  }\r\n  \r\n  .loader {\r\n    border: 16px solid #FFF;\r\n    border-top: 16px solid #FFF;\r\n    border-radius: 50%;\r\n    width: 120px;\r\n    height: 120px;\r\n    position: absolute;\r\n    left: 50%;\r\n    top: 50%;\r\n    margin-left: -60px;\r\n    margin-top: -60px;\r\n    -webkit-animation: spin 2s linear infinite;\r\n            animation: spin 2s linear infinite;\r\n  }\r\n  \r\n  @-webkit-keyframes spin {\r\n    0% {\r\n      -webkit-transform: rotate(0deg);\r\n              transform: rotate(0deg);\r\n    }\r\n    100% {\r\n      -webkit-transform: rotate(360deg);\r\n              transform: rotate(360deg);\r\n    }\r\n  }\r\n  \r\n  @keyframes spin {\r\n    0% {\r\n      -webkit-transform: rotate(0deg);\r\n              transform: rotate(0deg);\r\n    }\r\n    100% {\r\n      -webkit-transform: rotate(360deg);\r\n              transform: rotate(360deg);\r\n    }\r\n  }\r\n  \r\n  .registerBox {\r\n    background: #FFF;\r\n    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .08);\r\n    border: 1px solid #eaeaea;\r\n    margin-top: 50px;\r\n    padding: 30px;\r\n  }\r\n  \r\n  .registerBox h3{\r\n      margin-bottom: 30px;\r\n  }\r\n  \r\n  .errorfield {\r\n    border-color: #dc3545;\r\n  }\r\n  \r\n  .errorlabel {\r\n    color: #dc3545;\r\n  }\r\n  \r\n  .fieldInfo {\r\n    position: absolute;\r\n    width: 90%;\r\n    padding: 5px 2%;\r\n    color: #fff;\r\n    top: -10px;\r\n    background: #333;\r\n    border-radius: 5px;\r\n  }\r\n  \r\n  .fieldInfo:after {\r\n    border-left: solid transparent 10px;\r\n    border-right: solid transparent 10px;\r\n    border-top: solid #333 10px;\r\n    bottom: -10px;\r\n    content: \" \";\r\n    height: 0;\r\n    left: 20px;\r\n    margin-left: -13px;\r\n    position: absolute;\r\n    width: 0;\r\n  }"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"loader-bg\" *ngIf=\"isLoading\">\n  <div class=\"loader\"></div>\n</div>\n\n<div class=\"container\" *ngIf=\"!isLoading\">\n  <div class=\"col-xl-8 offset-xl-2 col-md-12 registerBox\">\n    <h3 class=\"text-center\">{{title}}</h3>\n    <form [formGroup]=\"registerForm\" (ngSubmit)=\"verifyForm()\">\n      <div class=\"row form-group clearfix\">\n            <div class=\"col-md-4 col-12\">\n              <label for=\"firstName\">First Name</label>\n              <input type=\"text\" appValidationLabel\n              id=\"{{formContent?.controls?.firstName}}\"\n              [formControlName]=\"formContent?.controls?.firstName\"\n              [formErrorsArr]=\"formErrorsArr\"\n              [fieldInfo]=\"fieldInfoMsgArr?.firstName\"\n              (formErrorsCount)='formErrorsEvent($event)'\n              class=\"form-control\" autofocus />\n            </div>\n            <div class=\"col-md-4 col-12\">\n              <label for=\"middleName\">Middle Name</label>\n                <input type=\"text\" appValidationLabel\n                id=\"{{formContent?.controls?.middleName}}\"\n                [formControlName]=\"formContent?.controls?.middleName\"\n                [formErrorsArr]=\"formErrorsArr\"\n                [fieldInfo]=\"fieldInfoMsgArr?.middleName\"\n                (formErrorsCount)='formErrorsEvent($event)'\n                class=\"form-control\" />\n            </div>\n            <div class=\"col-md-4 col-12\">\n              <label for=\"lastName\">Last Name</label>\n                <input type=\"text\" appValidationLabel\n                id=\"{{formContent?.controls?.lastName}}\"\n                [formControlName]=\"formContent?.controls?.lastName\"\n                [formErrorsArr]=\"formErrorsArr\"\n                [fieldInfo]=\"fieldInfoMsgArr?.lastName\"\n                (formErrorsCount)='formErrorsEvent($event)'\n                class=\"form-control\" />\n            </div>\n      </div>      \n      <div class=\"row form-group clearfix\">\n          <div class=\"col-md-4 col-12\">\n            <label for=\"emailId\">Email ID</label>\n              <input type=\"text\" appValidationLabel\n              id=\"{{formContent?.controls?.emailId}}\"\n              [formControlName]=\"formContent?.controls?.emailId\"\n              [formErrorsArr]=\"formErrorsArr\"\n              [fieldInfo]=\"fieldInfoMsgArr?.emailId\"\n              (formErrorsCount)='formErrorsEvent($event)'\n              class=\"form-control\" />\n          </div>    \n          <div class=\"col-md-4 col-12\">\n            <label for=\"mobile\">Mobile No</label>\n            <input type=\"text\" appValidationLabel\n            id=\"{{formContent?.controls?.mobile}}\"\n            [formControlName]=\"formContent?.controls?.mobile\"\n            [formErrorsArr]=\"formErrorsArr\"\n            [fieldInfo]=\"fieldInfoMsgArr?.mobile\"\n            (formErrorsCount)='formErrorsEvent($event)'\n            class=\"form-control\" />\n          </div> \n          <div class=\"col-md-4 col-12\">\n            <label for=\"umail\">Password</label>\n            <input type=\"password\" appValidationLabel\n            id=\"{{formContent?.controls?.password}}\"\n            [formControlName]=\"formContent?.controls?.password\"\n            [formErrorsArr]=\"formErrorsArr\"\n            [fieldInfo]=\"fieldInfoMsgArr?.password\"\n            (formErrorsCount)='formErrorsEvent($event)'\n            class=\"form-control\" />\n          </div>  \n      </div>\n      <div class=\"row form-group clearfix\">\n        <div class=\"col-12 text-center\">\n            <button class=\"btn btn-primary\" type=\"submit\" appFormSubmit>{{formContent?.btnName}}</button>\n        </div>\n      </div>  \n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _validation_msg_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../validation-msg.service */ "./src/app/validation-msg.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(formBuilder, apiService, validErrorMsgService, el, ren) {
        this.formBuilder = formBuilder;
        this.apiService = apiService;
        this.validErrorMsgService = validErrorMsgService;
        this.el = el;
        this.ren = ren;
        this.isLoading = true;
        this.formContent = {};
        this.formErrorsArr = [];
        this.fieldInfoMsgArr = [];
        this.isFieldExit = false;
        this.formErrorsCount = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.title = 'Register';
        this.formContentFunc();
        this.validationErrorMsg();
    };
    RegisterComponent.prototype.formContentFunc = function () {
        var _this = this;
        this.apiService.getFormContent().then(function (res) {
            console.log(res);
            if (res !== undefined || res !== null) {
                _this.formContent = res;
                _this.isLoading = false;
                _this.createForm();
            }
        }, function (error) {
            console.log(error);
            _this.isLoading = false;
        });
    };
    RegisterComponent.prototype.createForm = function () {
        this.registerForm = this.formBuilder.group({
            firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(30)]],
            middleName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(30)]],
            lastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(30)]],
            emailId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]],
            mobile: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[0-9]*$'), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(10), , _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(10)]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)]]
        });
    };
    /*
    *** Get API response as validation error json and load response in validationErrorObj of validErrorMsgService
    */
    RegisterComponent.prototype.validationErrorMsg = function () {
        var _this = this;
        this.apiService.getFieldInfoMessage().then(function (res) {
            if (_this.validErrorMsgService.validationErrorObj.length === 0) {
                _this.fieldInfoMsgArr = res['fieldInfo'];
                console.log('Field Info Array => ', _this.fieldInfoMsgArr);
                _this.isLoading = false;
            }
        }, function (error) {
            console.log(error);
            _this.isLoading = false;
        });
    };
    RegisterComponent.prototype.formErrorsEvent = function (evt) {
        this.errors = evt;
    };
    RegisterComponent.prototype.verifyForm = function () {
        var _this = this;
        var cloneErrors = this.errors;
        Object.keys(this.registerForm.controls).forEach(function (key) {
            if (_this.registerForm.get(key).invalid) {
                _this.el.nativeElement.querySelector('#' + key).classList.add('errorfield');
                _this.el.nativeElement.querySelector('#' + key).parentElement.querySelector('label').classList.add('errorlabel');
                var obj = { fieldName: key };
                if (cloneErrors.length > 0) {
                    for (var i = 0; i < cloneErrors.length; i++) {
                        if (cloneErrors[i].fieldName === key) {
                            _this.isFieldExit = true;
                        }
                    }
                }
                if (!_this.isFieldExit) {
                    _this.errors.push(obj);
                }
            }
            _this.isFieldExit = false;
        });
        this.formErrorsCount.emit(this.errors);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], RegisterComponent.prototype, "formErrorsCount", void 0);
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"],
            _validation_msg_service__WEBPACK_IMPORTED_MODULE_2__["ValidationMessageService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/validation-label.directive.ts":
/*!***********************************************!*\
  !*** ./src/app/validation-label.directive.ts ***!
  \***********************************************/
/*! exports provided: ValidationLabelDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationLabelDirective", function() { return ValidationLabelDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _validation_msg_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./validation-msg.service */ "./src/app/validation-msg.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ValidationLabelDirective = /** @class */ (function () {
    function ValidationLabelDirective(control, elr, ren, validationMsgService) {
        this.control = control;
        this.elr = elr;
        this.ren = ren;
        this.validationMsgService = validationMsgService;
        this.formErrorsCount = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.allFields = [];
        this.errorSpanId = '';
    }
    ValidationLabelDirective.prototype.ngOnInit = function () {
        this.fieldAlreadyExit = false;
    };
    ValidationLabelDirective.prototype.ngOnChanges = function () {
        // if (changes.formErrorsArr) {
        //   console.log(changes.formErrorsArr);
        // }
    };
    ValidationLabelDirective.prototype.onFocus = function (target) {
    };
    ValidationLabelDirective.prototype.onClickFocus = function (target) {
        this.creteErrorInfoTooltip();
    };
    ValidationLabelDirective.prototype.onFocusOut = function (target) {
        if (this.control.touched && this.control.invalid) {
            if (this.formErrorsArr.length !== 0) {
                for (var i = 0; i < this.formErrorsArr.length; i++) {
                    if (this.formErrorsArr[i].fieldName === this.control.name) {
                        this.fieldAlreadyExit = true;
                    }
                }
            }
            if (!this.fieldAlreadyExit) {
                var errorObj = { fieldName: this.control.name };
                this.formErrorsArr.push(errorObj);
            }
            this.addErrorClass();
        }
        else {
            for (var i = 0; i < this.formErrorsArr.length; i++) {
                if (this.formErrorsArr[i].fieldName === this.control.name) {
                    this.formErrorsArr.splice(i, 1);
                    this.removeErrorClass();
                }
            }
        }
        console.log('this.formErrorsArr => ', this.formErrorsArr);
        this.formErrorsCount.emit(this.formErrorsArr);
        this.removeErrorInfoTooltip();
    };
    ValidationLabelDirective.prototype.creteErrorInfoTooltip = function () {
        var parentElem = this.elr.nativeElement.parentElement;
        var errorDiv = this.ren.createElement('div');
        var text = this.ren.createText(this.fieldInfo);
        this.ren.addClass(errorDiv, 'fieldInfo');
        this.ren.appendChild(errorDiv, text);
        this.ren.appendChild(parentElem, errorDiv);
    };
    ValidationLabelDirective.prototype.removeErrorInfoTooltip = function () {
        var parentElem = this.elr.nativeElement.parentElement;
        var errorDiv = this.elr.nativeElement.parentElement.querySelector('.fieldInfo');
        console.log(errorDiv);
        if (errorDiv !== null) {
            this.ren.removeChild(parentElem, errorDiv);
        }
    };
    ValidationLabelDirective.prototype.addErrorClass = function () {
        var fieldElement = this.elr.nativeElement;
        this.ren.addClass(fieldElement, 'errorfield');
        var labelElement = this.elr.nativeElement.parentElement.querySelector('label');
        this.ren.addClass(labelElement, 'errorlabel');
    };
    ValidationLabelDirective.prototype.removeErrorClass = function () {
        var fieldElement = this.elr.nativeElement;
        this.ren.removeClass(fieldElement, 'errorfield');
        var labelElement = this.elr.nativeElement.parentElement.querySelector('label');
        this.ren.removeClass(labelElement, 'errorlabel');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ValidationLabelDirective.prototype, "formControlName", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], ValidationLabelDirective.prototype, "formErrorsArr", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ValidationLabelDirective.prototype, "fieldInfo", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ValidationLabelDirective.prototype, "formErrorsCount", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('focus', ['$event.target']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ValidationLabelDirective.prototype, "onFocus", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click', ['$event.target']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ValidationLabelDirective.prototype, "onClickFocus", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('focusout', ['$event.target']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ValidationLabelDirective.prototype, "onFocusOut", null);
    ValidationLabelDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appValidationLabel]'
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControl"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"],
            _validation_msg_service__WEBPACK_IMPORTED_MODULE_2__["ValidationMessageService"]])
    ], ValidationLabelDirective);
    return ValidationLabelDirective;
}());



/***/ }),

/***/ "./src/app/validation-msg.service.ts":
/*!*******************************************!*\
  !*** ./src/app/validation-msg.service.ts ***!
  \*******************************************/
/*! exports provided: ValidationMessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationMessageService", function() { return ValidationMessageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ValidationMessageService = /** @class */ (function () {
    function ValidationMessageService() {
        this.validationErrorObj = [];
    }
    ValidationMessageService.prototype.getValidationMsg = function (validationId) {
        return this.validationErrorObj[validationId];
    };
    ValidationMessageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], ValidationMessageService);
    return ValidationMessageService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Piyali\Programming_Tutorials\Angular\Angular 6\validation-tooltip-directive\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map