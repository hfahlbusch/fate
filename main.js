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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"demo\">\n  <div class=\"demo-type\">Simple UI</div>\n  <form class=\"demo-editor\">\n    <div class=\"form-group\">\n      <fate-ui uiId=\"foo\"></fate-ui>\n      <fate-input uiId=\"foo\" [(ngModel)]=\"aboutFate\" placeholder=\"Rich Textarea\" name=\"simple\"></fate-input>\n    </div>\n  </form>\n</div>\n<div class=\"demo\">\n  <div class=\"demo-type\">Bootstrap4 UI</div>\n  <form class=\"demo-editor\">\n    <div class=\"form-group\">\n      <fate-bootstrap [(ngModel)]=\"aboutFate\" name=\"bootstrap\" placeholder=\"Rich Textarea\"></fate-bootstrap>\n    </div>\n    <!-- remove to compare with default textarea <div class=\"form-group\">\n      <textarea class=\"form-control\" name=\"bootstraptextarea\" placeholder=\"Default textarea\"></textarea>\n    </div>-->\n  </form>\n</div>\n<div class=\"demo material\">\n  <div class=\"demo-type\">Material UI</div>\n  <form class=\"demo-editor\">\n    <div class=\"form-group\">\n      <mat-form-field>\n        <fate-material [(ngModel)]=\"aboutFate\" placeholder=\"Rich Textarea\" name=\"material\"></fate-material>\n      </mat-form-field>\n    </div>\n    <!-- remove to compare with default textarea <div class=\"form-group\">\n      <mat-form-field>\n        <textarea matInput placeholder=\"Default textarea\" name=\"materialtextarea\"></textarea>\n      </mat-form-field>\n    </div>-->\n  </form>\n</div>\n\n<!--\n  <strong>debug</strong>\n  <textarea type=\"text\" [(ngModel)]=\"aboutFate\"  name=\"htmlSrc\"></textarea>\n-->\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  margin-top: -80px;\n  display: flex;\n  justify-content: space-evenly;\n  text-align: center; }\n  :host .demo {\n    width: 30%;\n    flex-grow: 0;\n    flex-shrink: 100; }\n  :host .demo.material .form-group {\n      position: relative;\n      background: #FFF;\n      padding: 10px; }\n  :host .demo.material .form-group mat-form-field {\n        width: 100%; }\n  :host .demo .demo-type {\n      display: inline-block;\n      margin: 0 auto;\n      color: #FFF;\n      font-size: 18px;\n      font-weight: bold;\n      padding: 10px 0;\n      text-shadow: 0 3px 6px rgba(0, 0, 0, 0.5); }\n  :host .demo .demo-editor {\n      text-align: left;\n      box-shadow: 0 3px 20px 0 rgba(0, 0, 0, 0.1); }\n  /deep/ .custom-block {\n  display: inline-block;\n  padding: 1px 5px;\n  border-radius: 3px;\n  border: 1px solid #AAA;\n  outline: 0;\n  cursor: default;\n  -moz-user-select: none;\n  -webkit-user-modify: read-only; }\n  /deep/ .custom-block:active, /deep/ .custom-block:focus {\n    background: #EEE;\n    border: 1px solid #999; }\n"

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
/* harmony import */ var _fate_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fate.module */ "./src/app/fate.module.ts");
/* harmony import */ var _example_mention_dropdown_example_mention_dropdown_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./example-mention-dropdown/example-mention-dropdown.component */ "./src/app/example-mention-dropdown/example-mention-dropdown.component.ts");
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
    function AppComponent(fateControllerService) {
        this.title = 'app';
        this.aboutFate = "<a class=\"repos custom-block\" tabindex=\"0\" contenteditable=\"false\" href=\"https://github.com/onaluf/fate\" title=\"Flexible Angular Text Editor\"><i class=\"fab fa-github\"></i> Fate</a> is a <strong>rich</strong> <em>text</em> <u>editor</u> (wysiwyg) natively written for angular (>= v2) in typescript with footprint and\n  flexibility in mind. Its goal is to be very easy to customise and be as small as\n  it can thanks to tree shaking.";
        fateControllerService.registerInlineAction('mention', {
            command: 'insertHTML',
            display: 'contextual',
            name: 'Mention',
            regexp: /(@\w*)$/,
            matched: '',
            dropdown: _example_mention_dropdown_example_mention_dropdown_component__WEBPACK_IMPORTED_MODULE_2__["ExampleMentionDropdownComponent"]
        });
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_fate_module__WEBPACK_IMPORTED_MODULE_1__["FateControllerService"]])
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
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _example_mention_dropdown_example_mention_dropdown_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./example-mention-dropdown/example-mention-dropdown.component */ "./src/app/example-mention-dropdown/example-mention-dropdown.component.ts");
/* harmony import */ var _example_custom_html_parser_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./example-custom-html-parser.service */ "./src/app/example-custom-html-parser.service.ts");
/* harmony import */ var _example_custom_parser_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./example-custom-parser.service */ "./src/app/example-custom-parser.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _fate_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./fate.module */ "./src/app/fate.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// Customization example





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _example_mention_dropdown_example_mention_dropdown_component__WEBPACK_IMPORTED_MODULE_5__["ExampleMentionDropdownComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _fate_module__WEBPACK_IMPORTED_MODULE_9__["FateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
            ],
            entryComponents: [
                _example_mention_dropdown_example_mention_dropdown_component__WEBPACK_IMPORTED_MODULE_5__["ExampleMentionDropdownComponent"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]],
            providers: [
                { provide: _fate_module__WEBPACK_IMPORTED_MODULE_9__["FateHtmlParserService"], useClass: _example_custom_html_parser_service__WEBPACK_IMPORTED_MODULE_6__["ExampleCustomHtmlParserService"] },
                { provide: _fate_module__WEBPACK_IMPORTED_MODULE_9__["FateParserService"], useClass: _example_custom_parser_service__WEBPACK_IMPORTED_MODULE_7__["ExampleCustomParserService"] },
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/example-custom-html-parser.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/example-custom-html-parser.service.ts ***!
  \*******************************************************/
/*! exports provided: ExampleCustomHtmlParserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleCustomHtmlParserService", function() { return ExampleCustomHtmlParserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fate_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fate.module */ "./src/app/fate.module.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ExampleCustomHtmlParserService = /** @class */ (function (_super) {
    __extends(ExampleCustomHtmlParserService, _super);
    function ExampleCustomHtmlParserService() {
        return _super.call(this) || this;
    }
    ExampleCustomHtmlParserService.prototype.parseType = function (element) {
        if (element.nodeName === 'SPAN' && element.classList.contains('repos')) {
            return [new _fate_module__WEBPACK_IMPORTED_MODULE_1__["FateNode"]('mention', {
                    url: element.getAttribute('data-href'),
                    description: element.getAttribute('title'),
                    name: element.textContent
                })];
        }
        else {
            return _super.prototype.parseType.call(this, element);
        }
    };
    ExampleCustomHtmlParserService.prototype.serializeType = function (node) {
        if (node.type === 'mention') {
            return '<span class="repos custom-block" tabindex="0" contenteditable="false" data-href="' + node.value.url + '" title="' + node.value.description + '"><i class="fab fa-github"></i> ' + node.value.name + '</span>';
        }
        else {
            return _super.prototype.serializeType.call(this, node);
        }
    };
    ExampleCustomHtmlParserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ExampleCustomHtmlParserService);
    return ExampleCustomHtmlParserService;
}(_fate_module__WEBPACK_IMPORTED_MODULE_1__["FateHtmlParserService"]));



/***/ }),

/***/ "./src/app/example-custom-parser.service.ts":
/*!**************************************************!*\
  !*** ./src/app/example-custom-parser.service.ts ***!
  \**************************************************/
/*! exports provided: ExampleCustomParserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleCustomParserService", function() { return ExampleCustomParserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fate_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fate.module */ "./src/app/fate.module.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ExampleCustomParserService = /** @class */ (function (_super) {
    __extends(ExampleCustomParserService, _super);
    function ExampleCustomParserService() {
        return _super.call(this) || this;
    }
    ExampleCustomParserService.prototype.parseType = function (element) {
        if (element.nodeName === 'A' && element.classList.contains('repos')) {
            return [new _fate_module__WEBPACK_IMPORTED_MODULE_1__["FateNode"]('mention', {
                    url: element.getAttribute('href'),
                    description: element.getAttribute('title'),
                    name: element.textContent
                })];
        }
        else {
            return _super.prototype.parseType.call(this, element);
        }
    };
    ExampleCustomParserService.prototype.serializeType = function (node) {
        if (node.type === 'mention') {
            return '<a class="repos custom-block" tabindex="0" contenteditable="false" data-href="' + node.value.url + '" title="' + node.value.description + '"><i class="fab fa-github"></i> ' + node.value.name + '</a>';
        }
        else {
            return _super.prototype.serializeType.call(this, node);
        }
    };
    ExampleCustomParserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ExampleCustomParserService);
    return ExampleCustomParserService;
}(_fate_module__WEBPACK_IMPORTED_MODULE_1__["FateParserService"]));



/***/ }),

/***/ "./src/app/example-mention-dropdown/example-mention-dropdown.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/example-mention-dropdown/example-mention-dropdown.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul>\n  <li *ngFor=\"let repos of filteredList; let i = index\" [class.active]=\"i === selected\" class=\"repos\" (click)=\"changeValue(repos)\">{{repos.name}}</li>\n</ul>\n"

/***/ }),

/***/ "./src/app/example-mention-dropdown/example-mention-dropdown.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/example-mention-dropdown/example-mention-dropdown.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block; }\n  :host ul {\n    padding: 0;\n    margin: 0;\n    list-style: none; }\n  :host ul li {\n      padding: 3px 5px;\n      border-bottom: 1px solid #DDD;\n      cursor: pointer; }\n  :host ul li:last-child {\n        border-bottom: 0; }\n  :host ul li:hover {\n        background: rgba(200, 200, 200, 0.5); }\n  :host ul li.active {\n        background: rgba(200, 200, 200, 0.5); }\n"

/***/ }),

/***/ "./src/app/example-mention-dropdown/example-mention-dropdown.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/example-mention-dropdown/example-mention-dropdown.component.ts ***!
  \********************************************************************************/
/*! exports provided: ExampleMentionDropdownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleMentionDropdownComponent", function() { return ExampleMentionDropdownComponent; });
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

var ExampleMentionDropdownComponent = /** @class */ (function () {
    function ExampleMentionDropdownComponent() {
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.reposList = [
            {
                name: 'Fate',
                description: 'Flexible Angular Text Editor',
                url: 'https://github.com/onaluf/fate'
            }, {
                name: 'ngLipsum',
                description: 'Simple Lorem Ipsum based dummy content generator directive and services for Angular',
                url: 'https://github.com/onaluf/ngLipsum'
            }, {
                name: 'RacerJS',
                description: 'A simple racing game inspired by the classic Lotus series on Amiga. This has been made for the 10k Apart contest (http://10k.aneventapart.com).',
                url: 'https://github.com/onaluf/RacerJS'
            }, {
                name: 'voxel',
                description: 'a voxel spacing demo done in javascript',
                url: 'https://github.com/onaluf/voxel'
            }, {
                name: 'gameQuery',
                description: 'a javascript game engine with jQuery',
                url: 'https://github.com/onaluf/gameQuery'
            }, {
                name: 'jQueryGameDevEssentials',
                description: 'This is the source code for the example of the book "jQuery Game Development Essentials" (http://jquerygamedevelopment.com/)',
                url: 'https://github.com/onaluf/jQueryGameDevEssentials'
            }
        ];
        this.selected = 0;
    }
    Object.defineProperty(ExampleMentionDropdownComponent.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (value) {
            this._value = value;
            this.filterList();
        },
        enumerable: true,
        configurable: true
    });
    ExampleMentionDropdownComponent.prototype.filterList = function () {
        this.filteredList = [];
        var criteria = this._value.substr(1);
        for (var _i = 0, _a = this.reposList; _i < _a.length; _i++) {
            var repos = _a[_i];
            if (repos.name.toLowerCase().indexOf(criteria.toLowerCase()) > -1) {
                this.filteredList.push(repos);
            }
        }
        if (this.selected >= this.filteredList.length) {
            this.selected = Math.max(0, this.filteredList.length - 1);
        }
    };
    ExampleMentionDropdownComponent.prototype.changeValue = function (value) {
        this._value = value;
        this.valueChange.emit('<span class="repos custom-block" tabindex="0" contenteditable="false" data-href="' + value.url + '" title="' + value.description + '"><i class="fab fa-github"></i> ' + value.name + '</span>&nbsp;');
    };
    ExampleMentionDropdownComponent.prototype.selectNext = function () {
        this.selected++;
        if (this.selected >= this.filteredList.length) {
            this.selected = this.filteredList.length - 1;
        }
    };
    ;
    ExampleMentionDropdownComponent.prototype.selecPrevious = function () {
        this.selected--;
        if (this.selected < 0) {
            this.selected = 0;
        }
    };
    ;
    ExampleMentionDropdownComponent.prototype.confirmSelection = function () {
        this.changeValue(this.filteredList[this.selected]);
    };
    ;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], ExampleMentionDropdownComponent.prototype, "value", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ExampleMentionDropdownComponent.prototype, "valueChange", void 0);
    ExampleMentionDropdownComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'example-fate-mention-dropdown',
            template: __webpack_require__(/*! ./example-mention-dropdown.component.html */ "./src/app/example-mention-dropdown/example-mention-dropdown.component.html"),
            styles: [__webpack_require__(/*! ./example-mention-dropdown.component.scss */ "./src/app/example-mention-dropdown/example-mention-dropdown.component.scss")]
        })
    ], ExampleMentionDropdownComponent);
    return ExampleMentionDropdownComponent;
}());



/***/ }),

/***/ "./src/app/fate-bootstrap/fate-bootstrap.component.html":
/*!**************************************************************!*\
  !*** ./src/app/fate-bootstrap/fate-bootstrap.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<fate-input customClass=\"form-control\" [uiId]=\"uiId\" [row]=\"row\" [placeholder]=\"placeholder\" [ngModel]=\"passthrough\" (ngModelChange)=\"onChange($event)\"></fate-input>\n<fate-ui [uiId]=\"uiId\" [buttons]=\"buttons\" [ngClass]=\"{'visible': uiVisible}\" class=\"tooltip tooltip-inner\"></fate-ui>\n"

/***/ }),

/***/ "./src/app/fate-bootstrap/fate-bootstrap.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/fate-bootstrap/fate-bootstrap.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  margin-bottom: 10px;\n  display: block;\n  position: relative; }\n  :host fate-ui {\n    display: block;\n    position: absolute;\n    opacity: 0;\n    pointer-events: none;\n    transition: opacity 300ms;\n    text-align: left;\n    background: #222;\n    color: #eee;\n    max-width: 100%; }\n  :host fate-ui.visible {\n      opacity: 1;\n      pointer-events: all; }\n  :host fate-ui /deep/ .fate-ui-button:active, :host fate-ui /deep/ .fate-ui-button.enabled, :host fate-ui /deep/ .fate-ui-button.with-dropdown {\n      background-color: #555; }\n  :host fate-ui /deep/ .fate-ui-button:hover {\n      background-color: #666; }\n  :host fate-ui /deep/ .fate-ui-separator {\n      background-color: #666 !important; }\n  :host fate-ui /deep/ .fate-ui-dropdown {\n      background-color: #555;\n      border-color: #666; }\n  :host fate-input /deep/ .fate-edit-target {\n    resize: vertical;\n    padding: .375rem .75rem; }\n  :host fate-input /deep/ .fate-inline-dropdown {\n    display: block;\n    transition: opacity 300ms;\n    background: #222;\n    color: #eee;\n    border-radius: .25rem;\n    z-index: 1080; }\n"

/***/ }),

/***/ "./src/app/fate-bootstrap/fate-bootstrap.component.ts":
/*!************************************************************!*\
  !*** ./src/app/fate-bootstrap/fate-bootstrap.component.ts ***!
  \************************************************************/
/*! exports provided: FateBootstrapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FateBootstrapComponent", function() { return FateBootstrapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _fate_ui_fate_ui_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fate-ui/fate-ui.component */ "./src/app/fate-ui/fate-ui.component.ts");
/* harmony import */ var _fate_controller_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../fate-controller.service */ "./src/app/fate-controller.service.ts");
/* harmony import */ var _fate_parser_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../fate-parser.service */ "./src/app/fate-parser.service.ts");
/* harmony import */ var _fate_icon_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../fate-icon.service */ "./src/app/fate-icon.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var instanceCounter = 0;
var FateBootstrapComponent = /** @class */ (function (_super) {
    __extends(FateBootstrapComponent, _super);
    function FateBootstrapComponent(el, controller, parser, icon, factoryResolver) {
        var _this = _super.call(this, el, controller, icon, parser, factoryResolver) || this;
        // implentation of ControlValueAccessor:
        _this.changed = new Array();
        _this.clickOngoing = false;
        _this.uiId = 'bootstrap-' + (instanceCounter++);
        return _this;
    }
    FateBootstrapComponent_1 = FateBootstrapComponent;
    FateBootstrapComponent.prototype.blur = function (event) {
        if (!this.clickOngoing) {
            this.uiVisible = false;
        }
    };
    FateBootstrapComponent.prototype.mousedown = function (event) {
        this.clickOngoing = true;
    };
    FateBootstrapComponent.prototype.mouseup = function (event) {
        this.clickOngoing = false;
    };
    FateBootstrapComponent.prototype.focus = function (event) {
        this.uiVisible = true;
    };
    FateBootstrapComponent.prototype.writeValue = function (value) {
        this.passthrough = value;
    };
    FateBootstrapComponent.prototype.registerOnChange = function (fn) {
        this.changed.push(fn);
    };
    FateBootstrapComponent.prototype.registerOnTouched = function (fn) { };
    // change callback
    FateBootstrapComponent.prototype.onChange = function (value) {
        this.passthrough = value;
        this.changed.forEach(function (f) { return f(value); });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], FateBootstrapComponent.prototype, "row", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], FateBootstrapComponent.prototype, "placeholder", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], FateBootstrapComponent.prototype, "buttons", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('focusout', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], FateBootstrapComponent.prototype, "blur", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mousedown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], FateBootstrapComponent.prototype, "mousedown", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mouseup', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], FateBootstrapComponent.prototype, "mouseup", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('focusin', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], FateBootstrapComponent.prototype, "focus", null);
    FateBootstrapComponent = FateBootstrapComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'fate-bootstrap',
            template: __webpack_require__(/*! ./fate-bootstrap.component.html */ "./src/app/fate-bootstrap/fate-bootstrap.component.html"),
            styles: [__webpack_require__(/*! ./fate-bootstrap.component.scss */ "./src/app/fate-bootstrap/fate-bootstrap.component.scss")],
            providers: [
                { provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"], useExisting: FateBootstrapComponent_1, multi: true }
            ],
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _fate_controller_service__WEBPACK_IMPORTED_MODULE_3__["FateControllerService"], _fate_parser_service__WEBPACK_IMPORTED_MODULE_4__["FateParserService"], _fate_icon_service__WEBPACK_IMPORTED_MODULE_5__["FateIconService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]])
    ], FateBootstrapComponent);
    return FateBootstrapComponent;
    var FateBootstrapComponent_1;
}(_fate_ui_fate_ui_component__WEBPACK_IMPORTED_MODULE_2__["FateUiComponent"]));



/***/ }),

/***/ "./src/app/fate-controller.service.ts":
/*!********************************************!*\
  !*** ./src/app/fate-controller.service.ts ***!
  \********************************************/
/*! exports provided: FateControllerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FateControllerService", function() { return FateControllerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _fate_type_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fate-type.enum */ "./src/app/fate-type.enum.ts");
/* harmony import */ var _fate_link_dropdown_fate_link_dropdown_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fate-link-dropdown/fate-link-dropdown.component */ "./src/app/fate-link-dropdown/fate-link-dropdown.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FateControllerService = /** @class */ (function () {
    function FateControllerService() {
        // List of available commands, alphabetically
        // see https://developer.mozilla.org/en-US/docs/Web/API/Document/execCommand
        this.actionMapping = {
            'bold': {
                command: 'bold',
                name: 'Bold',
                detect: _fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].BOLD
            },
            'italic': {
                command: 'italic',
                name: 'Italic',
                detect: _fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].ITALIC
            },
            'underline': {
                command: 'underline',
                name: 'Underlined',
                detect: _fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].UNDERLINE
            },
            'strike': {
                command: 'strikeThrough',
                name: 'Strike Through',
                detect: _fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].STRIKETHROUGH
            },
            'subscript': {
                command: 'subscript',
                name: 'Subscript',
                label: 'sub',
                detect: _fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].SUBSCRIPT
            },
            'superscript': {
                command: 'superscript',
                name: 'Superscript',
                label: 'sup',
                detect: _fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].SUPERSCRIPT
            },
            'heading1': {
                command: 'formatBlock',
                value: 'H1',
                option: 1,
                name: '1st Header',
                label: 'h1',
                detect: _fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].HEADER1
            },
            'heading2': {
                command: 'formatBlock',
                value: 'H2',
                option: 2,
                name: '2nd Header',
                label: 'h2',
                detect: _fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].HEADER2
            },
            'heading3': {
                command: 'formatBlock',
                value: 'H3',
                option: 3,
                name: '3rd Header',
                label: 'h3',
                detect: _fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].HEADER3
            },
            'heading4': {
                command: 'formatBlock',
                value: 'H4',
                option: 4,
                name: '4th Header',
                label: 'h4',
                detect: _fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].HEADER4
            },
            'heading5': {
                command: 'formatBlock',
                value: 'H5',
                option: 5,
                name: '5th Header',
                label: 'h5',
                detect: _fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].HEADER5
            },
            'heading6': {
                command: 'formatBlock',
                value: 'H6',
                option: 6,
                name: '6th Header',
                label: 'h6',
                detect: _fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].HEADER6
            },
            'normal': {
                command: 'formatBlock',
                value: 'DIV',
                name: 'Normal',
                label: 'p',
            },
            'indent': {
                command: 'indent',
                name: 'Indent',
            },
            'outdent': {
                command: 'outdent',
                name: 'Outdent',
            },
            'ordered': {
                command: 'insertOrderedList',
                name: 'Ordered List',
                detect: _fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].ORDERED_LIST
            },
            'unordered': {
                command: 'insertUnorderedList',
                name: 'Unorder List',
                detect: _fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].UNORDERED_LIST
            },
            'center': {
                command: 'justifyCenter',
                name: 'Center',
                detect: _fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].ALIGN_CENTER
            },
            'justify': {
                command: 'justifyFull',
                name: 'Justify',
                detect: _fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].JUSTIFY
            },
            'left': {
                command: 'justifyLeft',
                name: 'Left',
                detect: _fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].ALIGN_LEFT
            },
            'right': {
                command: 'justifyRight',
                name: 'Right',
                detect: _fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].ALIGN_RIGHT
            },
            'undo': {
                command: 'undo',
                name: 'Undo',
            },
            'redo': {
                command: 'redo',
                name: 'Redo',
            },
            'clean': {
                command: 'removeFormat',
                name: 'Remove Formating',
            },
            'link': {
                command: 'createLink',
                undo: 'unlink',
                name: 'Link',
                detect: _fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].LINK,
                dropdown: _fate_link_dropdown_fate_link_dropdown_component__WEBPACK_IMPORTED_MODULE_3__["FateLinkDropdownComponent"]
            }
        };
        this.inlineActionMapping = {};
        this.commandsPipe = {
            default: new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]()
        };
        this.enabledActions = {
            default: new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]()
        };
    }
    FateControllerService.prototype.registerAction = function (name, action) {
        if (this.actionMapping[name]) {
            throw new Error('An action with the name "' + name + '" already exists!');
        }
        else {
            this.actionMapping[name] = action;
        }
    };
    FateControllerService.prototype.getAction = function (actionName) {
        return this.actionMapping[actionName] || false;
    };
    FateControllerService.prototype.registerInlineAction = function (name, action) {
        if (this.inlineActionMapping[name]) {
            throw new Error('An inline action with the name "' + name + '" already exists!');
        }
        else {
            this.inlineActionMapping[name] = action;
        }
    };
    FateControllerService.prototype.getInlineAction = function (context) {
        for (var _i = 0, _a = Object.keys(this.inlineActionMapping); _i < _a.length; _i++) {
            var action = _a[_i];
            var match = this.inlineActionMapping[action].regexp.exec(context);
            if (match) {
                this.inlineActionMapping[action].matched = match[1];
                return this.inlineActionMapping[action];
            }
        }
        return false;
    };
    FateControllerService.prototype.channel = function (channelId) {
        if (!this.commandsPipe[channelId]) {
            this.commandsPipe[channelId] = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        }
        return this.commandsPipe[channelId];
    };
    FateControllerService.prototype.enabled = function (channelId) {
        if (!this.enabledActions[channelId]) {
            this.enabledActions[channelId] = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        }
        return this.enabledActions[channelId];
    };
    FateControllerService.prototype.enableActions = function (channelId, nodes) {
        var actions = [];
        for (var _i = 0, nodes_1 = nodes; _i < nodes_1.length; _i++) {
            var node = nodes_1[_i];
            for (var action in this.actionMapping) {
                if (this.actionMapping[action].detect && this.actionMapping[action].detect === node.type) {
                    actions.push({ action: action, value: node.value });
                }
            }
        }
        this.enabledActions[channelId].next(actions);
    };
    FateControllerService.prototype.do = function (channel, action, value) {
        if (this.actionMapping[action].dropdown && !value) {
            if (this.actionMapping[action].undo) {
                this.commandsPipe[channel].next({ name: this.actionMapping[action].undo, value: this.actionMapping[action].value || value });
            }
            else {
                throw new Error('Action "' + action + '"doesn\'t have a undo command');
            }
        }
        else {
            this.commandsPipe[channel].next({ name: this.actionMapping[action].command, value: this.actionMapping[action].value || value });
        }
    };
    FateControllerService.prototype.doInline = function (channel, action, value) {
        if (action.dropdown && !value) {
            if (action.undo) {
                this.commandsPipe[channel].next({ name: action.undo, value: action.value || value });
            }
            else {
                throw new Error('Action "' + action + '"doesn\'t have a undo command');
            }
        }
        else {
            this.commandsPipe[channel].next({ name: action.command, value: action.value || value });
        }
    };
    FateControllerService.prototype.undo = function (channel, action, value) {
        var mapping = this.actionMapping[action].undo;
        // TODO
    };
    FateControllerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], FateControllerService);
    return FateControllerService;
}());



/***/ }),

/***/ "./src/app/fate-fontawsome-legacy-icon.service.ts":
/*!********************************************************!*\
  !*** ./src/app/fate-fontawsome-legacy-icon.service.ts ***!
  \********************************************************/
/*! exports provided: FateFontawsomeLegacyIconService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FateFontawsomeLegacyIconService", function() { return FateFontawsomeLegacyIconService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fate_icon_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fate-icon.service */ "./src/app/fate-icon.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var FateFontawsomeLegacyIconService = /** @class */ (function (_super) {
    __extends(FateFontawsomeLegacyIconService, _super);
    function FateFontawsomeLegacyIconService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.iconMapping = {
            'bold': '<i class="fa fa-bold"></i>',
            'italic': '<i class="fa fa-italic"></i>',
            'underline': '<i class="fa fa-underline"></i>',
            'strike': '<i class="fa fa-strikethrough"></i>',
            'subscript': '<i class="fa fa-subscript"></i>',
            'superscript': '<i class="fa fa-superscript"></i>',
            'indent': '<i class="fa fa-indent"></i>',
            'outdent': '<i class="fa fa-outdent"></i>',
            'ordered': '<i class="fa fa-list-ol"></i>',
            'unordered': '<i class="fa fa-list-ul"></i>',
            'center': '<i class="fa fa-align-center"></i>',
            'justify': '<i class="fa fa-align-justify"></i>',
            'left': '<i class="fa fa-align-left"></i>',
            'right': '<i class="fa fa-align-right"></i>',
            'undo': '<i class="fa fa-undo"></i>',
            'redo': '<i class="fa fa-repeat"></i>',
            'clean': '<i class="fa fa-eraser"></i>',
            'link': '<i class="fa fa-link"></i>',
        };
        return _this;
    }
    FateFontawsomeLegacyIconService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], FateFontawsomeLegacyIconService);
    return FateFontawsomeLegacyIconService;
}(_fate_icon_service__WEBPACK_IMPORTED_MODULE_1__["FateIconService"]));



/***/ }),

/***/ "./src/app/fate-html-parser.service.ts":
/*!*********************************************!*\
  !*** ./src/app/fate-html-parser.service.ts ***!
  \*********************************************/
/*! exports provided: FateHtmlParserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FateHtmlParserService", function() { return FateHtmlParserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fate_node__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fate-node */ "./src/app/fate-node.ts");
/* harmony import */ var _fate_type_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fate-type.enum */ "./src/app/fate-type.enum.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FateHtmlParserService = /** @class */ (function () {
    function FateHtmlParserService() {
    }
    FateHtmlParserService.prototype.parse = function (html) {
        var div = document.createElement('div');
        div.innerHTML = html;
        return this.parseElement(div);
    };
    ;
    FateHtmlParserService.prototype.parseElement = function (element) {
        var nodes = this.parseType(element);
        var currentNode = nodes[0];
        for (var i = 1; i < nodes.length; i++) {
            currentNode.children.push(nodes[i]);
            currentNode = nodes[i];
        }
        for (var i = 0; i < element.childNodes.length; i++) {
            var child = element.childNodes[i];
            if (child instanceof Text) {
                currentNode.children.push(child.data);
            }
            else if (child instanceof HTMLElement) {
                currentNode.children.push(this.parseElement(child));
            }
            else {
                // ignore
            }
        }
        return nodes[0];
    };
    FateHtmlParserService.prototype.findParentNodes = function (node, until) {
        var nodes = [];
        var current = (node.nodeType === 1) ? node : node.parentElement;
        while (current !== until) {
            nodes.push.apply(nodes, this.parseType(current));
            current = current.parentElement;
        }
        return nodes;
    };
    FateHtmlParserService.prototype.getAdditonalStyle = function (element) {
        var style = element.style;
        switch (style.textAlign) {
            case 'left':
                return [new _fate_node__WEBPACK_IMPORTED_MODULE_1__["FateNode"](_fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].ALIGN_LEFT)];
            case 'center':
                return [new _fate_node__WEBPACK_IMPORTED_MODULE_1__["FateNode"](_fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].ALIGN_CENTER)];
            case 'right':
                return [new _fate_node__WEBPACK_IMPORTED_MODULE_1__["FateNode"](_fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].ALIGN_RIGHT)];
            case 'justify':
                return [new _fate_node__WEBPACK_IMPORTED_MODULE_1__["FateNode"](_fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].JUSTIFY)];
        }
        switch (element.getAttribute('align')) {
            case 'left':
                return [new _fate_node__WEBPACK_IMPORTED_MODULE_1__["FateNode"](_fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].ALIGN_LEFT)];
            case 'center':
                return [new _fate_node__WEBPACK_IMPORTED_MODULE_1__["FateNode"](_fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].ALIGN_CENTER)];
            case 'right':
                return [new _fate_node__WEBPACK_IMPORTED_MODULE_1__["FateNode"](_fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].ALIGN_RIGHT)];
            case 'justify':
                return [new _fate_node__WEBPACK_IMPORTED_MODULE_1__["FateNode"](_fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].JUSTIFY)];
        }
        return [];
    };
    FateHtmlParserService.prototype.parseType = function (element) {
        switch (element.nodeName) {
            case 'H1':
                return [new _fate_node__WEBPACK_IMPORTED_MODULE_1__["FateNode"](_fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].HEADER1)].concat(this.getAdditonalStyle(element));
            case 'H2':
                return [new _fate_node__WEBPACK_IMPORTED_MODULE_1__["FateNode"](_fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].HEADER2)].concat(this.getAdditonalStyle(element));
            case 'H3':
                return [new _fate_node__WEBPACK_IMPORTED_MODULE_1__["FateNode"](_fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].HEADER3)].concat(this.getAdditonalStyle(element));
            case 'H4':
                return [new _fate_node__WEBPACK_IMPORTED_MODULE_1__["FateNode"](_fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].HEADER4)].concat(this.getAdditonalStyle(element));
            case 'H5':
                return [new _fate_node__WEBPACK_IMPORTED_MODULE_1__["FateNode"](_fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].HEADER5)].concat(this.getAdditonalStyle(element));
            case 'H6':
                return [new _fate_node__WEBPACK_IMPORTED_MODULE_1__["FateNode"](_fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].HEADER6)].concat(this.getAdditonalStyle(element));
            case 'B':
            case 'STRONG':
                return [new _fate_node__WEBPACK_IMPORTED_MODULE_1__["FateNode"](_fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].BOLD)];
            case 'I':
            case 'EM':
                return [new _fate_node__WEBPACK_IMPORTED_MODULE_1__["FateNode"](_fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].ITALIC)];
            case 'U':
                return [new _fate_node__WEBPACK_IMPORTED_MODULE_1__["FateNode"](_fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].UNDERLINE)];
            case 'STRIKE':
                return [new _fate_node__WEBPACK_IMPORTED_MODULE_1__["FateNode"](_fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].STRIKETHROUGH)];
            case 'SUB':
                return [new _fate_node__WEBPACK_IMPORTED_MODULE_1__["FateNode"](_fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].SUBSCRIPT)];
            case 'SUP':
                return [new _fate_node__WEBPACK_IMPORTED_MODULE_1__["FateNode"](_fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].SUPERSCRIPT)];
            case 'A':
                return [new _fate_node__WEBPACK_IMPORTED_MODULE_1__["FateNode"](_fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].LINK, element.getAttribute('href'))];
            case 'OL':
                return [new _fate_node__WEBPACK_IMPORTED_MODULE_1__["FateNode"](_fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].ORDERED_LIST)];
            case 'UL':
                return [new _fate_node__WEBPACK_IMPORTED_MODULE_1__["FateNode"](_fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].UNORDERED_LIST)];
            case 'LI':
                return [new _fate_node__WEBPACK_IMPORTED_MODULE_1__["FateNode"](_fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].LISTITEM)];
            case 'DIV':
            case 'P':
                var styles = this.getAdditonalStyle(element);
                if (styles.length > 0) {
                    return [new _fate_node__WEBPACK_IMPORTED_MODULE_1__["FateNode"](_fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].NONE)].concat(styles);
                }
                return [new _fate_node__WEBPACK_IMPORTED_MODULE_1__["FateNode"](_fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].PARAGRAPH)];
            case 'BLOCKQUOTE':
                // FIXME: this doesn't work on FF
                if (element.style.marginLeft === '40px') {
                    return [new _fate_node__WEBPACK_IMPORTED_MODULE_1__["FateNode"](_fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].INDENT)];
                }
                return [new _fate_node__WEBPACK_IMPORTED_MODULE_1__["FateNode"](_fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].NONE)];
            default:
                return [new _fate_node__WEBPACK_IMPORTED_MODULE_1__["FateNode"](_fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].NONE)];
        }
    };
    FateHtmlParserService.prototype.parseValue = function (element) {
        switch (element.nodeName) {
            case 'A':
                return element.getAttribute('href');
        }
        return undefined;
    };
    FateHtmlParserService.prototype.serializeType = function (node) {
        switch (node.type) {
            case _fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].PARAGRAPH:
                return '<div>' + this.serialize(node, true) + '</div>';
            case _fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].HEADER1:
                return '<h1>' + this.serialize(node, true) + '</h1>';
            case _fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].HEADER2:
                return '<h2>' + this.serialize(node, true) + '</h2>';
            case _fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].HEADER3:
                return '<h3>' + this.serialize(node, true) + '</h3>';
            case _fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].HEADER4:
                return '<h4>' + this.serialize(node, true) + '</h4>';
            case _fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].HEADER5:
                return '<h5>' + this.serialize(node, true) + '</h5>';
            case _fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].HEADER6:
                return '<h6>' + this.serialize(node, true) + '</h6>';
            case _fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].QUOTE:
                return '<quote>' + this.serialize(node) + '</quote>';
            case _fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].CODE:
                return '<code>' + this.serialize(node) + '</code>';
            case _fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].SIZE:
                return '<span style="font-size: ' + node.value + '">' + this.serialize(node) + '</span>';
            case _fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].BOLD:
                return '<strong>' + this.serialize(node) + '</strong>';
            case _fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].ITALIC:
                return '<em>' + this.serialize(node) + '</em>';
            case _fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].UNDERLINE:
                return '<u>' + this.serialize(node) + '</u>';
            case _fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].STRIKETHROUGH:
                return '<strike>' + this.serialize(node) + '</strike>';
            case _fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].SUBSCRIPT:
                return '<sub>' + this.serialize(node) + '</sub>';
            case _fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].SUPERSCRIPT:
                return '<sup>' + this.serialize(node) + '</sup>';
            case _fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].LINK:
                return '<a href="' + node.value + '">' + this.serialize(node) + '</a>';
            case _fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].ORDERED_LIST:
                return '<ol>' + this.serialize(node) + '</ol>';
            case _fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].UNORDERED_LIST:
                return '<ul>' + this.serialize(node) + '</ul>';
            case _fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].LISTITEM:
                return '<li>' + this.serialize(node) + '</li>';
            case _fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].ALIGN_LEFT:
                return '<div style="text-align: left;">' + this.serialize(node, true) + '</div>';
            case _fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].ALIGN_CENTER:
                return '<div style="text-align: center;">' + this.serialize(node, true) + '</div>';
            case _fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].ALIGN_RIGHT:
                return '<div style="text-align: right">' + this.serialize(node, true) + '</div>';
            case _fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].JUSTIFY:
                return '<div style="text-align: justify;">' + this.serialize(node, true) + '</div>';
            case _fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].INDENT:
                return '<blockquote style="margin-left: 40px">' + this.serialize(node, true) + '</blockquote>';
            case _fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].NONE:
                return this.serialize(node);
        }
    };
    ;
    // Saves a Tree in string representation
    FateHtmlParserService.prototype.serialize = function (node, fallbackToBr) {
        var _this = this;
        if (fallbackToBr === void 0) { fallbackToBr = false; }
        var serialized = '';
        node.children.forEach(function (child) {
            if (typeof child === 'string') {
                serialized += child;
            }
            else {
                serialized += _this.serializeType(child);
            }
        });
        if (fallbackToBr && !serialized) {
            serialized = '<br>';
        }
        return serialized;
    };
    ;
    FateHtmlParserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], FateHtmlParserService);
    return FateHtmlParserService;
}());



/***/ }),

/***/ "./src/app/fate-icon.service.ts":
/*!**************************************!*\
  !*** ./src/app/fate-icon.service.ts ***!
  \**************************************/
/*! exports provided: FateIconService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FateIconService", function() { return FateIconService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FateIconService = /** @class */ (function () {
    function FateIconService() {
        this.iconMapping = {
            'bold': '<i class="fas fa-bold"></i>',
            'italic': '<i class="fas fa-italic"></i>',
            'underline': '<i class="fas fa-underline"></i>',
            'strike': '<i class="fas fa-strikethrough"></i>',
            'subscript': '<i class="fas fa-subscript"></i>',
            'superscript': '<i class="fas fa-superscript"></i>',
            'indent': '<i class="fas fa-indent"></i>',
            'outdent': '<i class="fas fa-outdent"></i>',
            'ordered': '<i class="fas fa-list-ol"></i>',
            'unordered': '<i class="fas fa-list-ul"></i>',
            'center': '<i class="fas fa-align-center"></i>',
            'justify': '<i class="fas fa-align-justify"></i>',
            'left': '<i class="fas fa-align-left"></i>',
            'right': '<i class="fas fa-align-right"></i>',
            'undo': '<i class="fas fa-undo-alt"></i>',
            'redo': '<i class="fas fa-redo-alt"></i>',
            'clean': '<i class="fas fa-eraser"></i>',
            'link': '<i class="fas fa-link"></i>',
        };
    }
    FateIconService.prototype.getIcon = function (actionName) {
        return this.iconMapping[actionName];
    };
    FateIconService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], FateIconService);
    return FateIconService;
}());



/***/ }),

/***/ "./src/app/fate-input/fate-input.component.ts":
/*!****************************************************!*\
  !*** ./src/app/fate-input/fate-input.component.ts ***!
  \****************************************************/
/*! exports provided: FateInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FateInputComponent", function() { return FateInputComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _fate_controller_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../fate-controller.service */ "./src/app/fate-controller.service.ts");
/* harmony import */ var _fate_html_parser_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../fate-html-parser.service */ "./src/app/fate-html-parser.service.ts");
/* harmony import */ var _fate_parser_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../fate-parser.service */ "./src/app/fate-parser.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FateInputComponent = /** @class */ (function () {
    function FateInputComponent(el, controller, htmlParser, parser, sanitizer, factoryResolver) {
        this.el = el;
        this.controller = controller;
        this.htmlParser = htmlParser;
        this.parser = parser;
        this.sanitizer = sanitizer;
        this.factoryResolver = factoryResolver;
        this.uiId = 'default';
        this.placeholder = '';
        this.empty = true;
        this.isFocused = false;
        // implentation of ControlValueAccessor:
        this.changed = new Array();
    }
    FateInputComponent_1 = FateInputComponent;
    FateInputComponent.prototype.ngOnInit = function () {
        this.subscribeToUi(this.uiId);
    };
    FateInputComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.editTarget = this.el.nativeElement.querySelector('.fate-edit-target');
        if (this.row) {
            this.computeHeight();
        }
        this.editTarget.addEventListener('click', function (event) {
            console.debug('click');
            // On click we save the text Selection
            _this.saveSelection();
            // We check if there is a dropdown matching this context
            _this.checkForDropdownContext();
        });
        this.editTarget.addEventListener('keyup', function (event) {
            console.debug('keypressed');
            // On click we save the text Selection
            _this.saveSelection();
            // We check if there is a dropdown matching this context
            _this.checkForDropdownContext();
        });
        this.editTarget.addEventListener('focus', function (event) {
            console.debug('(' + _this.uiId + ') focus');
            // On focus we restore it
            _this.restoreSelection();
            _this.isFocused = true;
        });
        this.editTarget.addEventListener('blur', function (event) {
            console.debug('(' + _this.uiId + ') blur');
            _this.isFocused = false;
            _this.saveSelection();
            if (_this.dropdownComponent) {
                setTimeout(function () {
                    _this.inlineAction = null;
                    _this.dropdownComponent.destroy();
                }, 300);
                // this.inlineAction = null;
                // this.dropdownComponent.destroy();
            }
        });
        this.editTarget.addEventListener('keydown', function (event) {
            console.debug('keydown', event);
            var stopDefault = function () {
                event.preventDefault();
                event.stopPropagation();
            };
            var stopDefaultAndForceUpdate = function () {
                stopDefault();
                _this.checkEmpty();
                var tree = _this.htmlParser.parseElement(_this.editTarget);
                _this.changed.forEach(function (f) { return f(_this.parser.serialize(tree)); });
            };
            // This is needed because, if the current selection is part
            // of a non-editable child of the input, the default delete won't
            // work.
            // This case can happen if there is a cutom element that
            // was inserted by some custom controller.
            //
            // Some constraints for a custom block to work on top of contenteditable=false:
            // -moz-user-select: none;
            // -webkit-user-modify: read-only;
            //
            // Note: It may make sense to delete the selection for normal text
            // input too but for now we only do it on deletion.
            if (event.key === 'Backspace' || event.key === 'Delete' && _this.selectionRange) {
                var node = _this.selectionRange.commonAncestorContainer;
                console.debug('Deletion', node);
                if (node instanceof HTMLElement && !node.isContentEditable) {
                    // this is the case on firefox
                    console.debug('deleting inside un-editable block detected');
                    _this.selectionRange.selectNode(node);
                    _this.selectionRange.deleteContents();
                    stopDefaultAndForceUpdate();
                }
                else if (node.nodeName === '#text' && !node.parentElement.isContentEditable) {
                    // this is the case on webkit
                    console.debug('deleting inside un-editable block detected');
                    _this.selectionRange.selectNode(node.parentElement);
                    _this.selectionRange.deleteContents();
                    stopDefaultAndForceUpdate();
                }
            }
            // This is needed because, there is a bug in Firefox that prevent
            // deleting a uneditable element inside an editable element. So we
            // reimplement the whole function for all browsers.
            if (event.key === 'Backspace' && _this.selectionRange) {
                var node = _this.selectionRange.commonAncestorContainer;
                if (_this.selectionRange.collapsed === true &&
                    _this.selectionRange.startOffset === 0 &&
                    node.previousSibling instanceof HTMLElement &&
                    !node.previousSibling.isContentEditable) {
                    node.previousSibling.remove();
                    stopDefaultAndForceUpdate();
                }
            }
            else if (event.key === 'Delete' && _this.selectionRange) {
                var node = _this.selectionRange.commonAncestorContainer;
                if (_this.selectionRange.collapsed === true &&
                    _this.selectionRange.endContainer.nodeName === '#text' &&
                    _this.selectionRange.endOffset === _this.selectionRange.endContainer.length &&
                    node.nextSibling instanceof HTMLElement &&
                    !node.nextSibling.isContentEditable) {
                    node.nextSibling.remove();
                    stopDefaultAndForceUpdate();
                }
            }
            // If a dropdown is currently being displayed we use the up/down
            // key to navigate its content and return to select the selected
            // element
            if (_this.inlineAction) {
                if (event.key === 'Up' || event.key === 'ArrowUp') {
                    stopDefault();
                    _this.dropdownInstance.selecPrevious();
                }
                else if (event.key === 'Down' || event.key === 'ArrowDown') {
                    stopDefault();
                    _this.dropdownInstance.selectNext();
                }
                else if (event.key === 'Enter') {
                    stopDefault();
                    _this.dropdownInstance.confirmSelection();
                }
            }
        });
        this.editTarget.addEventListener('input', function (event) {
            console.debug('value changed');
            _this.checkEmpty();
            var tree = _this.htmlParser.parseElement(_this.editTarget);
            _this.changed.forEach(function (f) { return f(_this.parser.serialize(tree)); });
        });
        var style = window.getComputedStyle(this.editTarget);
        this.editTarget.style.minHeight = this.getHeight(2);
    };
    FateInputComponent.prototype.ngOnChanges = function (changes) {
        if (changes['uiId']) {
            this.subscribeToUi(this.uiId);
        }
        if (changes['row']) {
            if (this.editTarget) {
                this.computeHeight();
            }
        }
    };
    FateInputComponent.prototype.ngOnDestroy = function () {
        if (this.uiSubscription) {
            this.uiSubscription.unsubscribe();
        }
    };
    FateInputComponent.prototype.computeHeight = function () {
        this.editTarget.style.height = this.getHeight(this.row);
    };
    FateInputComponent.prototype.checkEmpty = function () {
        if (this.editTarget.innerHTML === '') {
            this.editTarget.innerHTML = '<br>';
            this.empty = true;
        }
        else if (this.editTarget.innerHTML === '<br>') {
            this.empty = true;
        }
        else {
            this.empty = false;
        }
    };
    FateInputComponent.prototype.getHeight = function (rowCount) {
        var style = window.getComputedStyle(this.editTarget);
        var height = this.editTarget.style.height = (parseInt(style.lineHeight, 10) * rowCount);
        if (style.boxSizing === 'border-box') {
            height += parseInt(style.paddingTop, 10) + parseInt(style.paddingBottom, 10) + parseInt(style.borderTopWidth, 10) + parseInt(style.borderBottomWidth, 10);
        }
        return height + 'px';
    };
    FateInputComponent.prototype.subscribeToUi = function (uiId) {
        var _this = this;
        console.debug('subscribing to ' + uiId, this.uiSubscription);
        if (this.uiSubscription) {
            this.uiSubscription.unsubscribe();
        }
        this.uiSubscription = this.controller.channel(uiId).subscribe(function (command) {
            // if input is not on focus we save current focus:
            var focus = document.activeElement;
            console.debug('(' + uiId + ') got command ' + command.name + '/' + command.value);
            _this.restoreSelection();
            if (command.name === 'insertHTML' && _this.selectionRange) {
                // If something is selected we assume that the goal is to replace it,
                // so first we delete the content
                _this.selectionRange.deleteContents();
                // insertHtml seems quite broken so we do it ourseleves
                _this.selectionRange.insertNode(document.createRange().createContextualFragment(command.value));
                // move cusor to the end of the newly inserted element
                _this.selectionRange.collapse(false);
                // Force the update of the model
                _this.checkEmpty();
                var tree_1 = _this.htmlParser.parseElement(_this.editTarget);
                _this.changed.forEach(function (f) { return f(_this.parser.serialize(tree_1)); });
            }
            else {
                document.execCommand(command.name, false, command.value);
            }
            _this.saveSelection();
            focus.focus();
        });
    };
    FateInputComponent.prototype.saveSelection = function () {
        if (this.selectionInEditableTarget()) {
            var sel = window.getSelection();
            if (sel.getRangeAt && sel.rangeCount) {
                this.selectionRange = sel.getRangeAt(0);
                console.debug('(' + this.uiId + ') saveSelection', this.selectionRange);
                this.detectStyle();
            }
        }
    };
    // Restors the current text selection
    FateInputComponent.prototype.restoreSelection = function () {
        if (this.selectionInEditableTarget()) {
            return;
        }
        console.debug('(' + this.uiId + ') restoreSelection', this.selectionRange);
        if (this.selectionRange) {
            var sel = window.getSelection();
            sel.removeAllRanges();
            sel.addRange(this.selectionRange);
        }
    };
    FateInputComponent.prototype.selectionInEditableTarget = function () {
        var sel = window.getSelection();
        var node = sel.getRangeAt && sel.rangeCount && sel.getRangeAt(0) && sel.getRangeAt(0).commonAncestorContainer;
        return node && (node === this.editTarget || (node.parentElement.closest('.fate-edit-target') && (node.parentElement.closest('.fate-edit-target') === this.editTarget)));
    };
    FateInputComponent.prototype.detectStyle = function () {
        var node = this.selectionRange.commonAncestorContainer;
        if (!node || (!(node.parentElement.closest('.fate-edit-target') && node !== this.editTarget))) {
            // The current selection is not contained in the editable zone.
            // this is most likely due to the input being empty.
            return;
        }
        // special cases for FF when selection is obtained by double click:
        if ((this.selectionRange.endOffset === 0) &&
            (this.selectionRange.startContainer.nodeValue) &&
            (this.selectionRange.startOffset === this.selectionRange.startContainer.nodeValue.length)) {
            node = this.selectionRange.startContainer.nextSibling;
        }
        else if ((this.selectionRange.endOffset === 0) &&
            (this.selectionRange.startOffset === 0)) {
            node = this.selectionRange.startContainer.parentElement;
        }
        else if ((this.selectionRange.commonAncestorContainer === this.editTarget) &&
            (this.selectionRange.startContainer === this.editTarget) &&
            (this.selectionRange.endContainer === this.editTarget)) {
            node = this.selectionRange.commonAncestorContainer.childNodes[this.selectionRange.startOffset];
        }
        if (node && node !== this.editTarget) {
            var nodes = this.htmlParser.findParentNodes(node, this.editTarget);
            console.debug('  -> detected actions: ', nodes);
            this.controller.enableActions(this.uiId, nodes);
        }
    };
    FateInputComponent.prototype.writeValue = function (value) {
        if (value) {
            this.content = this.sanitizer.bypassSecurityTrustHtml(this.htmlParser.serialize(this.parser.parse(value)));
            this.empty = false;
        }
        else {
            this.content = this.sanitizer.bypassSecurityTrustHtml('<br>');
            this.empty = true;
        }
        this.selectionRange = undefined;
    };
    FateInputComponent.prototype.registerOnChange = function (fn) {
        this.changed.push(fn);
    };
    FateInputComponent.prototype.registerOnTouched = function (fn) { };
    FateInputComponent.prototype.checkForDropdownContext = function () {
        var startPos = Math.max(this.selectionRange.startOffset - 20, 0);
        var length = this.selectionRange.startOffset - startPos;
        var context = this.selectionRange.startContainer.textContent.substr(startPos, length);
        var inlineAction = this.controller.getInlineAction(context);
        if (inlineAction) {
            if (!this.inlineAction || this.inlineAction.dropdown !== inlineAction.dropdown) {
                this.inlineAction = inlineAction;
                this.initDropdown(inlineAction, this.selectionRange.getBoundingClientRect());
            }
            else {
                this.inlineAction = inlineAction;
                this.updateDropdown(inlineAction.matched);
            }
        }
        else if (this.dropdownComponent) {
            this.inlineAction = null;
            this.dropdownComponent.destroy();
        }
    };
    FateInputComponent.prototype.initDropdown = function (actionComponent, position) {
        var _this = this;
        // set the dropdown component
        if (this.dropdownComponent) {
            this.dropdownComponent.destroy();
        }
        var factory = this.factoryResolver.resolveComponentFactory(actionComponent.dropdown);
        var component = factory.create(this.viewContainerRef.parentInjector);
        if (component.instance.valueChange) {
            component.instance.value = actionComponent.matched;
            component.instance.valueChange.subscribe(function (value) {
                _this.editTarget.focus();
                var end = _this.selectionRange.endOffset;
                _this.selectionRange.setStart(_this.selectionRange.endContainer, end - actionComponent.matched.length);
                _this.controller.doInline(_this.uiId, _this.inlineAction, value);
                // delete the dropdown
                _this.inlineAction = null;
                _this.dropdownComponent.destroy();
            });
            this.dropdownComponent = this.viewContainerRef.insert(component.hostView);
            this.dropdownInstance = component.instance;
            this.updateDropdownPosition();
        }
        else {
            throw new Error('The component used as a dropdown doesn\'t contain a valueChange emmiter!');
        }
    };
    FateInputComponent.prototype.updateDropdown = function (value) {
        this.dropdownInstance.value = value;
        this.updateDropdownPosition();
    };
    FateInputComponent.prototype.updateDropdownPosition = function () {
        if (this.inlineAction.display === 'contextual') {
            // create a selection to get the size of the matching text
            var parentOffsetBB = this.el.nativeElement.offsetParent.getBoundingClientRect();
            var range = this.selectionRange.cloneRange();
            var end = range.endOffset;
            range.setStart(range.endContainer, end - this.inlineAction.matched.length);
            var boundingBox = range.getBoundingClientRect();
            this.dropdownPostionTop = (boundingBox.top + boundingBox.height - parentOffsetBB.top) + 'px';
            this.dropdownPostionLeft = (boundingBox.left - parentOffsetBB.left) + 'px';
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], FateInputComponent.prototype, "uiId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], FateInputComponent.prototype, "row", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], FateInputComponent.prototype, "customClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], FateInputComponent.prototype, "placeholder", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('dropdown', {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
        }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"])
    ], FateInputComponent.prototype, "viewContainerRef", void 0);
    FateInputComponent = FateInputComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'fate-input',
            template: "\n    <div class=\"fate-inline-dropdown\"\n         [class.hidden]=\"!inlineAction\"\n         [class.contextual]=\"inlineAction?.display === 'contextual'\"\n         [style.top]=\"dropdownPostionTop\"\n         [style.left]=\"dropdownPostionLeft\">\n      <ng-template #dropdown></ng-template>\n    </div>\n    <div [class]=\"'fate-edit-target ' + customClass\"\n         [ngClass]=\"{empty: empty}\"\n         contenteditable=\"true\"\n         [title]=\"placeholder\"\n         [innerHtml]=\"content\"></div>\n  ",
            styles: ["\n    :host div.fate-edit-target {\n      display: block;\n      padding: 10px;\n      border: 1px solid #DDD;\n      outline: 0;\n      resize: vertical;\n      overflow: auto;\n      background: #FFF;\n      color: #000;\n      overflow: visible;\n    }\n    :host div.fate-edit-target.empty:not(:focus):before {\n      content:attr(title);\n      color: #636c72;\n    }\n    .fate-inline-dropdown {\n      border: 1px solid #DDD;\n      border-bottom: 0;\n    }\n    .fate-inline-dropdown.hidden {\n      display: none !important;\n    }\n    .fate-inline-dropdown.contextual {\n      position: absolute;\n      background: #FFF;\n      box-shadow: 0 5px 30px -10px rgba(0,0,0,0.4);\n      border-bottom: 1px solid #CCC;\n    }\n    :host {\n      margin-bottom: 10px;\n      /*position: relative;*/\n    }\n  "],
            providers: [
                { provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"], useExisting: FateInputComponent_1, multi: true }
            ],
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _fate_controller_service__WEBPACK_IMPORTED_MODULE_3__["FateControllerService"], _fate_html_parser_service__WEBPACK_IMPORTED_MODULE_4__["FateHtmlParserService"], _fate_parser_service__WEBPACK_IMPORTED_MODULE_5__["FateParserService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]])
    ], FateInputComponent);
    return FateInputComponent;
    var FateInputComponent_1;
}());



/***/ }),

/***/ "./src/app/fate-link-dropdown/fate-link-dropdown.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/fate-link-dropdown/fate-link-dropdown.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<input type=\"text\" [ngModel]=\"value\" (ngModelChange)=\"changeValue($event)\" placeholder=\"http://\">\n"

/***/ }),

/***/ "./src/app/fate-link-dropdown/fate-link-dropdown.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/fate-link-dropdown/fate-link-dropdown.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/fate-link-dropdown/fate-link-dropdown.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/fate-link-dropdown/fate-link-dropdown.component.ts ***!
  \********************************************************************/
/*! exports provided: FateLinkDropdownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FateLinkDropdownComponent", function() { return FateLinkDropdownComponent; });
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

var FateLinkDropdownComponent = /** @class */ (function () {
    function FateLinkDropdownComponent() {
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    FateLinkDropdownComponent.prototype.changeValue = function (value) {
        this.value = value;
        this.valueChange.emit(value);
    };
    FateLinkDropdownComponent.prototype.selectNext = function () { };
    ;
    FateLinkDropdownComponent.prototype.selecPrevious = function () { };
    ;
    FateLinkDropdownComponent.prototype.confirmSelection = function () { };
    ;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], FateLinkDropdownComponent.prototype, "value", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], FateLinkDropdownComponent.prototype, "valueChange", void 0);
    FateLinkDropdownComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'fate-link-dropdown',
            template: __webpack_require__(/*! ./fate-link-dropdown.component.html */ "./src/app/fate-link-dropdown/fate-link-dropdown.component.html"),
            styles: [__webpack_require__(/*! ./fate-link-dropdown.component.scss */ "./src/app/fate-link-dropdown/fate-link-dropdown.component.scss")]
        })
    ], FateLinkDropdownComponent);
    return FateLinkDropdownComponent;
}());



/***/ }),

/***/ "./src/app/fate-material-icon.service.ts":
/*!***********************************************!*\
  !*** ./src/app/fate-material-icon.service.ts ***!
  \***********************************************/
/*! exports provided: FateMaterialIconService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FateMaterialIconService", function() { return FateMaterialIconService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fate_icon_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fate-icon.service */ "./src/app/fate-icon.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var FateMaterialIconService = /** @class */ (function (_super) {
    __extends(FateMaterialIconService, _super);
    function FateMaterialIconService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.iconMapping = {
            'bold': '<i class="material-icons">format_bold</i>',
            'italic': '<i class="material-icons">format_italic</i>',
            'underline': '<i class="material-icons">format_underlined</i>',
            'strike': '<i class="material-icons">format_strikethrough</i>',
            'subscript': 'x<sub>2</sub>',
            'superscript': 'x<sup>2</sup>',
            'indent': '<i class="material-icons">format_indent_increase</i>',
            'outdent': '<i class="material-icons">format_indent_decrease</i>',
            'ordered': '<i class="material-icons">format_list_numbered</i>',
            'unordered': '<i class="material-icons">format_list_bulleted</i>',
            'center': '<i class="material-icons">format_align_center</i>',
            'justify': '<i class="material-icons">format_align_justify</i>',
            'left': '<i class="material-icons">format_align_left</i>',
            'right': '<i class="material-icons">format_align_right</i>',
            'undo': '<i class="material-icons">undo</i>',
            'redo': '<i class="material-icons">redo</i>',
            'clean': '<i class="material-icons">format_clear</i>',
            'link': '<i class="material-icons">link</i>',
        };
        return _this;
    }
    FateMaterialIconService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], FateMaterialIconService);
    return FateMaterialIconService;
}(_fate_icon_service__WEBPACK_IMPORTED_MODULE_1__["FateIconService"]));



/***/ }),

/***/ "./src/app/fate-material/fate-material.component.html":
/*!************************************************************!*\
  !*** ./src/app/fate-material/fate-material.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<fate-input customClass=\"\" [uiId]=\"uiId\" [row]=\"row\" [ngModel]=\"passthrough\" (ngModelChange)=\"onChange($event)\"></fate-input>\n<fate-ui class=\"mat-select-panel\" [uiId]=\"uiId\" [buttons]=\"buttons\" [ngClass]=\"{'visible': uiVisible}\"></fate-ui>\n"

/***/ }),

/***/ "./src/app/fate-material/fate-material.component.scss":
/*!************************************************************!*\
  !*** ./src/app/fate-material/fate-material.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  position: relative; }\n  :host fate-ui {\n    display: block;\n    position: absolute;\n    opacity: 0;\n    pointer-events: none;\n    transition: opacity 300ms;\n    text-align: left;\n    box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n    background: #FFF;\n    z-index: 1;\n    -webkit-transform: translateY(10px);\n            transform: translateY(10px);\n    max-width: 100%;\n    padding: 0; }\n  :host fate-ui.visible {\n      opacity: 1;\n      pointer-events: all; }\n  :host fate-ui /deep/ .fate-ui-button {\n      height: 40px;\n      line-height: 23px;\n      padding: 7px 0 11px;\n      width: 40px;\n      border-radius: 0;\n      margin-right: -4px;\n      margin-bottom: 0;\n      vertical-align: middle; }\n  :host fate-ui /deep/ .fate-ui-button:active, :host fate-ui /deep/ .fate-ui-button.enabled, :host fate-ui /deep/ .fate-ui-button.with-dropdown {\n        background-color: #EEE; }\n  :host fate-ui /deep/ .fate-ui-button:hover {\n        background-color: #DFDFDF; }\n  :host fate-ui /deep/ .fate-ui-dropdown {\n      background-color: #EEE; }\n  :host fate-ui /deep/ .fate-ui-separator {\n      margin-right: -4px;\n      margin-top: 2px;\n      margin-bottom: 2px;\n      margin-left: -1px;\n      height: 36px;\n      border-radius: 0;\n      width: 1px;\n      vertical-align: middle;\n      background-color: #DFDFDF; }\n  :host fate-input /deep/ div.fate-edit-target {\n    border: none;\n    background: none;\n    padding: 0;\n    outline: none;\n    font: inherit;\n    resize: vertical;\n    margin-bottom: 0; }\n  :host fate-input /deep/ .fate-inline-dropdown {\n    display: block;\n    position: absolute;\n    transition: opacity 300ms;\n    box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n    background: #FFF;\n    z-index: 2;\n    padding: 0; }\n"

/***/ }),

/***/ "./src/app/fate-material/fate-material.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/fate-material/fate-material.component.ts ***!
  \**********************************************************/
/*! exports provided: FateMaterialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FateMaterialComponent", function() { return FateMaterialComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _fate_ui_fate_ui_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../fate-ui/fate-ui.component */ "./src/app/fate-ui/fate-ui.component.ts");
/* harmony import */ var _fate_controller_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../fate-controller.service */ "./src/app/fate-controller.service.ts");
/* harmony import */ var _fate_parser_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../fate-parser.service */ "./src/app/fate-parser.service.ts");
/* harmony import */ var _fate_icon_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../fate-icon.service */ "./src/app/fate-icon.service.ts");
/* harmony import */ var _fate_material_icon_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../fate-material-icon.service */ "./src/app/fate-material-icon.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};









var instanceCounter = 0;
var FateMaterialComponent = /** @class */ (function (_super) {
    __extends(FateMaterialComponent, _super);
    function FateMaterialComponent(controller, parser, icon, el, ngControl, factoryResolver) {
        var _this = _super.call(this, el, controller, icon, parser, factoryResolver) || this;
        _this.ngControl = ngControl;
        _this.id = "" + _this.uiId;
        _this.clickOngoing = false;
        _this.uiVisible = false;
        _this._required = false;
        _this._disabled = false;
        _this.errorState = false;
        _this.controlType = 'fate-material';
        _this.describedBy = '';
        _this.stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        _this.focused = false;
        _this.changed = new Array();
        _this.uiId = 'material-' + (instanceCounter++);
        // Setting the value accessor directly (instead of using
        // the providers) to avoid running into a circular import.
        if (_this.ngControl != null) {
            _this.ngControl.valueAccessor = _this;
        }
        return _this;
    }
    FateMaterialComponent_1 = FateMaterialComponent;
    Object.defineProperty(FateMaterialComponent.prototype, "value", {
        get: function () {
            return this.passthrough;
        },
        set: function (value) {
            this.stateChanges.next();
            this.passthrough = value;
            this.changed.forEach(function (f) { return f(value); });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FateMaterialComponent.prototype, "placeholder", {
        get: function () {
            return this._placeholder;
        },
        set: function (placeholder) {
            this._placeholder = placeholder;
            this.stateChanges.next();
        },
        enumerable: true,
        configurable: true
    });
    FateMaterialComponent.prototype.blur = function () {
        this.focused = false;
        this.stateChanges.next();
        if (!this.clickOngoing) {
            this.uiVisible = false;
        }
    };
    FateMaterialComponent.prototype.focus = function () {
        this.focused = true;
        this.uiVisible = true;
        this.stateChanges.next();
    };
    FateMaterialComponent.prototype.mousedown = function (event) {
        this.clickOngoing = true;
    };
    FateMaterialComponent.prototype.mouseup = function (event) {
        this.clickOngoing = false;
    };
    Object.defineProperty(FateMaterialComponent.prototype, "empty", {
        get: function () {
            return !this.passthrough || this.passthrough === '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FateMaterialComponent.prototype, "shouldLabelFloat", {
        get: function () {
            return this.focused || !this.empty;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FateMaterialComponent.prototype, "required", {
        get: function () {
            return this._required;
        },
        set: function (req) {
            this._required = !!req;
            this.stateChanges.next();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FateMaterialComponent.prototype, "disabled", {
        get: function () {
            return this._disabled;
        },
        set: function (dis) {
            this._disabled = !!dis;
            this.stateChanges.next();
        },
        enumerable: true,
        configurable: true
    });
    FateMaterialComponent.prototype.setDescribedByIds = function (ids) {
        this.describedBy = ids.join(' ');
    };
    FateMaterialComponent.prototype.onContainerClick = function (event) { };
    FateMaterialComponent.prototype.onChange = function (value) {
        this.passthrough = value;
        this.changed.forEach(function (f) { return f(value); });
        this.stateChanges.next();
    };
    FateMaterialComponent.prototype.ngOnDestroy = function () {
        this.stateChanges.complete();
    };
    FateMaterialComponent.prototype.writeValue = function (value) {
        this.passthrough = value;
        this.stateChanges.next();
    };
    FateMaterialComponent.prototype.registerOnChange = function (fn) {
        this.changed.push(fn);
    };
    FateMaterialComponent.prototype.registerOnTouched = function (fn) { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], FateMaterialComponent.prototype, "row", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], FateMaterialComponent.prototype, "buttons", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], FateMaterialComponent.prototype, "value", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], FateMaterialComponent.prototype, "placeholder", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])(),
        __metadata("design:type", Object)
    ], FateMaterialComponent.prototype, "id", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('focusout'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FateMaterialComponent.prototype, "blur", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('focusin'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FateMaterialComponent.prototype, "focus", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mousedown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], FateMaterialComponent.prototype, "mousedown", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mouseup', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], FateMaterialComponent.prototype, "mouseup", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], FateMaterialComponent.prototype, "required", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], FateMaterialComponent.prototype, "disabled", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('attr.aria-describedby'),
        __metadata("design:type", Object)
    ], FateMaterialComponent.prototype, "describedBy", void 0);
    FateMaterialComponent = FateMaterialComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'fate-material',
            template: __webpack_require__(/*! ./fate-material.component.html */ "./src/app/fate-material/fate-material.component.html"),
            styles: [__webpack_require__(/*! ./fate-material.component.scss */ "./src/app/fate-material/fate-material.component.scss")],
            providers: [
                { provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldControl"], useExisting: FateMaterialComponent_1 },
                { provide: _fate_icon_service__WEBPACK_IMPORTED_MODULE_6__["FateIconService"], useClass: _fate_material_icon_service__WEBPACK_IMPORTED_MODULE_7__["FateMaterialIconService"] }
            ],
        }),
        __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"])()),
        __metadata("design:paramtypes", [_fate_controller_service__WEBPACK_IMPORTED_MODULE_4__["FateControllerService"], _fate_parser_service__WEBPACK_IMPORTED_MODULE_5__["FateParserService"], _fate_icon_service__WEBPACK_IMPORTED_MODULE_6__["FateIconService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControl"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]])
    ], FateMaterialComponent);
    return FateMaterialComponent;
    var FateMaterialComponent_1;
}(_fate_ui_fate_ui_component__WEBPACK_IMPORTED_MODULE_3__["FateUiComponent"]));



/***/ }),

/***/ "./src/app/fate-node.ts":
/*!******************************!*\
  !*** ./src/app/fate-node.ts ***!
  \******************************/
/*! exports provided: FateNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FateNode", function() { return FateNode; });
/* harmony import */ var _fate_type_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fate-type.enum */ "./src/app/fate-type.enum.ts");

var FateNode = /** @class */ (function () {
    function FateNode(type, value) {
        if (type === void 0) { type = _fate_type_enum__WEBPACK_IMPORTED_MODULE_0__["FateType"].NONE; }
        this.type = type;
        this.value = value;
        this.children = [];
    }
    return FateNode;
}());



/***/ }),

/***/ "./src/app/fate-parser.service.ts":
/*!****************************************!*\
  !*** ./src/app/fate-parser.service.ts ***!
  \****************************************/
/*! exports provided: FateParserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FateParserService", function() { return FateParserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fate_html_parser_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fate-html-parser.service */ "./src/app/fate-html-parser.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var FateParserService = /** @class */ (function (_super) {
    __extends(FateParserService, _super);
    function FateParserService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FateParserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], FateParserService);
    return FateParserService;
}(_fate_html_parser_service__WEBPACK_IMPORTED_MODULE_1__["FateHtmlParserService"]));



/***/ }),

/***/ "./src/app/fate-type.enum.ts":
/*!***********************************!*\
  !*** ./src/app/fate-type.enum.ts ***!
  \***********************************/
/*! exports provided: FateType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FateType", function() { return FateType; });
var FateType;
(function (FateType) {
    FateType["NONE"] = "NONE";
    FateType["PARAGRAPH"] = "PARAGRAPH";
    FateType["HEADER1"] = "HEADER1";
    FateType["HEADER2"] = "HEADER2";
    FateType["HEADER3"] = "HEADER3";
    FateType["HEADER4"] = "HEADER4";
    FateType["HEADER5"] = "HEADER5";
    FateType["HEADER6"] = "HEADER6";
    FateType["QUOTE"] = "QUOTE";
    FateType["CODE"] = "CODE";
    FateType["SIZE"] = "SIZE";
    FateType["BOLD"] = "BOLD";
    FateType["HIGHLIGHT"] = "HIGHLIGHT";
    FateType["SUBSCRIPT"] = "SUBSCRIPT";
    FateType["SUPERSCRIPT"] = "SUPERSCRIPT";
    FateType["STRIKETHROUGH"] = "STRIKETHROUGH";
    FateType["ITALIC"] = "ITALIC";
    FateType["COLOR"] = "COLOR";
    FateType["UNDERLINE"] = "UNDERLINE";
    FateType["LINK"] = "LINK";
    FateType["ALIGN_LEFT"] = "ALIGN_LEFT";
    FateType["ALIGN_CENTER"] = "ALIGN_CENTER";
    FateType["ALIGN_RIGHT"] = "ALIGN_RIGHT";
    FateType["JUSTIFY"] = "JUSTIFY";
    FateType["ORDERED_LIST"] = "ORDERED_LIST";
    FateType["UNORDERED_LIST"] = "UNORDERED_LIST";
    FateType["LISTITEM"] = "LISTITEM";
    FateType["INDENT"] = "INDENT";
})(FateType || (FateType = {}));


/***/ }),

/***/ "./src/app/fate-ui/fate-ui.component.html":
/*!************************************************!*\
  !*** ./src/app/fate-ui/fate-ui.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <ng-container *ngFor=\"let button of buttons\">\n    <a *ngIf=\"button !== 'separator'\" class=\"fate-ui-button\" [ngClass]=\"{enabled: enabled[button], 'with-dropdown': dropdownAction === button}\" (click)=\"do($event, button)\">\n      <span *ngIf=\"icon.getIcon(button)\" [innerHtml]=\"icon.getIcon(button)\"></span>\n      <span *ngIf=\"!icon.getIcon(button)\">{{controller.getAction(button).label}}</span>\n      <span class=\"reader\">{{controller.getAction(button).name}}</span>\n    </a>\n    <div *ngIf=\"button === 'separator'\" class=\"fate-ui-separator\"></div>\n  </ng-container>\n  <div class=\"fate-ui-dropdown\" [ngClass]=\"{visible: dropdownAction}\">\n    <ng-template #dropdown></ng-template>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/fate-ui/fate-ui.component.scss":
/*!************************************************!*\
  !*** ./src/app/fate-ui/fate-ui.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  border: 1px solid #DDD;\n  border-bottom: 0;\n  display: block;\n  box-sizing: border-box;\n  padding: 5px;\n  background: #FFF;\n  color: #333;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  position: relative;\n  overflow: visible; }\n\n.fate-ui-separator {\n  display: inline-block;\n  width: 2px;\n  height: 14px;\n  vertical-align: middle;\n  background-color: #DDD;\n  border-radius: 2px; }\n\n.fate-ui-button {\n  display: inline-block;\n  height: 25px;\n  width: 25px;\n  text-align: center;\n  line-height: 25px;\n  margin-bottom: 3px;\n  vertical-align: middle;\n  cursor: pointer;\n  font-size: 14px;\n  box-sizing: border-box;\n  transition: background 300ms;\n  border-radius: 3px; }\n\n.fate-ui-button:active, .fate-ui-button.enabled, .fate-ui-button.with-dropdown {\n    background-color: #E5E5E5; }\n\n.fate-ui-button:hover {\n    background-color: #CCC; }\n\n.fate-ui-button span.reader {\n    display: none; }\n\n.fate-ui-dropdown {\n  opacity: 0;\n  pointer-events: none;\n  z-index: 1;\n  font-size: 14px;\n  -webkit-user-select: all;\n     -moz-user-select: all;\n      -ms-user-select: all;\n          user-select: all;\n  box-sizing: border-box;\n  border-radius: 3px;\n  background-color: #E5E5E5;\n  position: absolute;\n  padding: 10px;\n  border-bottom: 1px solid #CCC;\n  box-shadow: 0 10px 10px -10px rgba(0, 0, 0, 0.3); }\n\n.fate-ui-dropdown.visible {\n    opacity: 1;\n    pointer-events: all; }\n"

/***/ }),

/***/ "./src/app/fate-ui/fate-ui.component.ts":
/*!**********************************************!*\
  !*** ./src/app/fate-ui/fate-ui.component.ts ***!
  \**********************************************/
/*! exports provided: FateUiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FateUiComponent", function() { return FateUiComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fate_controller_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fate-controller.service */ "./src/app/fate-controller.service.ts");
/* harmony import */ var _fate_parser_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fate-parser.service */ "./src/app/fate-parser.service.ts");
/* harmony import */ var _fate_icon_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../fate-icon.service */ "./src/app/fate-icon.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FateUiComponent = /** @class */ (function () {
    function FateUiComponent(el, controller, icon, parser, factoryResolver) {
        this.el = el;
        this.controller = controller;
        this.icon = icon;
        this.parser = parser;
        this.factoryResolver = factoryResolver;
        this.uiId = 'default';
        this.buttons = [
            'bold',
            'italic',
            'underline',
            'strike',
            'separator',
            'subscript',
            'superscript',
            'link',
            'separator',
            'heading1',
            'heading2',
            'heading3',
            'heading4',
            'heading5',
            'heading6',
            'normal',
            'separator',
            'indent',
            'outdent',
            'ordered',
            'unordered',
            'separator',
            'center',
            'justify',
            'left',
            'right',
            'separator',
            'undo',
            'redo',
            'clean'
        ];
        this.enabled = {};
        this.dropdownAction = false;
    }
    FateUiComponent.prototype.mouseDown = function (event) {
        if (!event.target.closest('.fate-ui-dropdown')) {
            event.preventDefault();
        }
    };
    FateUiComponent.prototype.do = function (event, action) {
        var _this = this;
        event.preventDefault();
        event.stopPropagation();
        if (this.controller.getAction(action).dropdown) {
            if (action === this.dropdownAction) {
                this.dropdownAction = false;
            }
            else {
                var button_1 = event.target;
                if (!button_1.classList.contains('fate-ui-button')) {
                    button_1 = button_1.closest('.fate-ui-button');
                }
                var dropdown_1 = this.el.nativeElement.querySelector('.fate-ui-dropdown');
                // Enable the dropdown
                this.dropdownValue = this.enabled[action];
                console.debug('action has value', button_1, dropdown_1, this.dropdownValue);
                this.initDropdown(this.controller.getAction(action).dropdown, this.dropdownValue);
                // Postion the dropdown
                setTimeout(function () {
                    var buttonSize = button_1.getBoundingClientRect();
                    var dropdownSize = dropdown_1.getBoundingClientRect();
                    var leftPosition = button_1.offsetLeft + (buttonSize.width / 2) - (dropdownSize.width / 2);
                    // make sure the dropdown is not bleeding out of the viewport
                    if (buttonSize.left + window.pageXOffset + (buttonSize.width / 2) - (dropdownSize.width / 2) < 3) {
                        leftPosition = -buttonSize.left - window.pageXOffset + button_1.offsetLeft + 3;
                    }
                    else if (buttonSize.left + window.pageXOffset + (buttonSize.width / 2) + (dropdownSize.width / 2) > window.innerWidth - 3) {
                        leftPosition = window.innerWidth - buttonSize.left - window.pageXOffset + button_1.offsetLeft - dropdownSize.width - 3;
                    }
                    var topPosition = button_1.offsetTop + buttonSize.height - 3;
                    dropdown_1.style.left = leftPosition + 'px';
                    dropdown_1.style.top = topPosition + 'px';
                    // make the dropdown visible
                    _this.dropdownAction = action;
                }, 0);
            }
        }
        else {
            this.dropdownAction = false;
            this.controller.do(this.uiId, action);
        }
    };
    FateUiComponent.prototype.getOffset = function (element) {
        var top = 0;
        var left = 0;
        do {
            top += element.offsetTop || 0;
            left += element.offsetLeft || 0;
            element = element.offsetParent;
        } while (element);
        return {
            top: top,
            left: left
        };
    };
    FateUiComponent.prototype.initDropdown = function (actionComponent, value) {
        var _this = this;
        if (this.dropdownComponent) {
            this.dropdownComponent.destroy();
        }
        var factory = this.factoryResolver.resolveComponentFactory(actionComponent);
        var component = factory.create(this.viewContainerRef.parentInjector);
        if (component.instance.valueChange) {
            component.instance.value = value;
            component.instance.valueChange.subscribe(function (newValue) {
                _this.dropdownValue = newValue;
                _this.controller.do(_this.uiId, _this.dropdownAction, newValue);
            });
            this.dropdownComponent = this.viewContainerRef.insert(component.hostView);
        }
        else {
            throw new Error('The component used as a dropdown doesn\'t contain a valueChange emmiter!');
        }
    };
    FateUiComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (changes['uiId']) {
            if (this.inputSubscription) {
                this.inputSubscription.unsubscribe();
            }
            this.inputSubscription = this.controller.enabled(this.uiId).subscribe(function (actions) {
                _this.enabled = {};
                for (var _i = 0, actions_1 = actions; _i < actions_1.length; _i++) {
                    var action = actions_1[_i];
                    _this.enabled[action.action] = action.value || true;
                }
            });
        }
    };
    FateUiComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var handle = document.body.addEventListener('click', function (event) {
            if (!event.target.closest('.fate-ui-dropdown')) {
                _this.dropdownAction = false;
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], FateUiComponent.prototype, "uiId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], FateUiComponent.prototype, "buttons", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mousedown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], FateUiComponent.prototype, "mouseDown", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('dropdown', {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
        }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"])
    ], FateUiComponent.prototype, "viewContainerRef", void 0);
    FateUiComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'fate-ui',
            template: __webpack_require__(/*! ./fate-ui.component.html */ "./src/app/fate-ui/fate-ui.component.html"),
            styles: [__webpack_require__(/*! ./fate-ui.component.scss */ "./src/app/fate-ui/fate-ui.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _fate_controller_service__WEBPACK_IMPORTED_MODULE_1__["FateControllerService"], _fate_icon_service__WEBPACK_IMPORTED_MODULE_3__["FateIconService"], _fate_parser_service__WEBPACK_IMPORTED_MODULE_2__["FateParserService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]])
    ], FateUiComponent);
    return FateUiComponent;
}());



/***/ }),

/***/ "./src/app/fate.module.ts":
/*!********************************!*\
  !*** ./src/app/fate.module.ts ***!
  \********************************/
/*! exports provided: FateUiComponent, FateInputComponent, FateLinkDropdownComponent, FateIconService, FateMaterialIconService, FateFontawsomeLegacyIconService, FateParserService, FateControllerService, FateHtmlParserService, FateNode, FateType, FateModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FateModule", function() { return FateModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _fate_ui_fate_ui_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fate-ui/fate-ui.component */ "./src/app/fate-ui/fate-ui.component.ts");
/* harmony import */ var _fate_input_fate_input_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fate-input/fate-input.component */ "./src/app/fate-input/fate-input.component.ts");
/* harmony import */ var _fate_bootstrap_fate_bootstrap_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fate-bootstrap/fate-bootstrap.component */ "./src/app/fate-bootstrap/fate-bootstrap.component.ts");
/* harmony import */ var _fate_material_fate_material_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./fate-material/fate-material.component */ "./src/app/fate-material/fate-material.component.ts");
/* harmony import */ var _fate_link_dropdown_fate_link_dropdown_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./fate-link-dropdown/fate-link-dropdown.component */ "./src/app/fate-link-dropdown/fate-link-dropdown.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FateUiComponent", function() { return _fate_ui_fate_ui_component__WEBPACK_IMPORTED_MODULE_4__["FateUiComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FateInputComponent", function() { return _fate_input_fate_input_component__WEBPACK_IMPORTED_MODULE_5__["FateInputComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FateLinkDropdownComponent", function() { return _fate_link_dropdown_fate_link_dropdown_component__WEBPACK_IMPORTED_MODULE_8__["FateLinkDropdownComponent"]; });

/* harmony import */ var _fate_icon_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./fate-icon.service */ "./src/app/fate-icon.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FateIconService", function() { return _fate_icon_service__WEBPACK_IMPORTED_MODULE_9__["FateIconService"]; });

/* harmony import */ var _fate_material_icon_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./fate-material-icon.service */ "./src/app/fate-material-icon.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FateMaterialIconService", function() { return _fate_material_icon_service__WEBPACK_IMPORTED_MODULE_10__["FateMaterialIconService"]; });

/* harmony import */ var _fate_fontawsome_legacy_icon_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./fate-fontawsome-legacy-icon.service */ "./src/app/fate-fontawsome-legacy-icon.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FateFontawsomeLegacyIconService", function() { return _fate_fontawsome_legacy_icon_service__WEBPACK_IMPORTED_MODULE_11__["FateFontawsomeLegacyIconService"]; });

/* harmony import */ var _fate_parser_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./fate-parser.service */ "./src/app/fate-parser.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FateParserService", function() { return _fate_parser_service__WEBPACK_IMPORTED_MODULE_12__["FateParserService"]; });

/* harmony import */ var _fate_controller_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./fate-controller.service */ "./src/app/fate-controller.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FateControllerService", function() { return _fate_controller_service__WEBPACK_IMPORTED_MODULE_13__["FateControllerService"]; });

/* harmony import */ var _fate_html_parser_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./fate-html-parser.service */ "./src/app/fate-html-parser.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FateHtmlParserService", function() { return _fate_html_parser_service__WEBPACK_IMPORTED_MODULE_14__["FateHtmlParserService"]; });

/* harmony import */ var _fate_node__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./fate-node */ "./src/app/fate-node.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FateNode", function() { return _fate_node__WEBPACK_IMPORTED_MODULE_15__["FateNode"]; });

/* harmony import */ var _fate_type_enum__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./fate-type.enum */ "./src/app/fate-type.enum.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FateType", function() { return _fate_type_enum__WEBPACK_IMPORTED_MODULE_16__["FateType"]; });

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var FateModule = /** @class */ (function () {
    function FateModule() {
    }
    FateModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _fate_input_fate_input_component__WEBPACK_IMPORTED_MODULE_5__["FateInputComponent"],
                _fate_ui_fate_ui_component__WEBPACK_IMPORTED_MODULE_4__["FateUiComponent"],
                _fate_bootstrap_fate_bootstrap_component__WEBPACK_IMPORTED_MODULE_6__["FateBootstrapComponent"],
                _fate_material_fate_material_component__WEBPACK_IMPORTED_MODULE_7__["FateMaterialComponent"],
                _fate_link_dropdown_fate_link_dropdown_component__WEBPACK_IMPORTED_MODULE_8__["FateLinkDropdownComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
            ],
            exports: [
                _fate_ui_fate_ui_component__WEBPACK_IMPORTED_MODULE_4__["FateUiComponent"],
                _fate_input_fate_input_component__WEBPACK_IMPORTED_MODULE_5__["FateInputComponent"],
                _fate_bootstrap_fate_bootstrap_component__WEBPACK_IMPORTED_MODULE_6__["FateBootstrapComponent"],
                _fate_material_fate_material_component__WEBPACK_IMPORTED_MODULE_7__["FateMaterialComponent"],
                _fate_link_dropdown_fate_link_dropdown_component__WEBPACK_IMPORTED_MODULE_8__["FateLinkDropdownComponent"]
            ],
            entryComponents: [
                _fate_link_dropdown_fate_link_dropdown_component__WEBPACK_IMPORTED_MODULE_8__["FateLinkDropdownComponent"]
            ]
        })
    ], FateModule);
    return FateModule;
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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


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
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/travis/build/onaluf/fate/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map