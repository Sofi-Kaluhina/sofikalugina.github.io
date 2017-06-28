webpackJsonp([1,4],{

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__experience_service__ = __webpack_require__(58);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExperienceDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ExperienceDetailComponent = (function () {
    function ExperienceDetailComponent(route, router, service) {
        this.route = route;
        this.router = router;
        this.service = service;
    }
    ExperienceDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.service.getExperience(+params['id']); })
            .subscribe(function (experience) { return _this.experience = experience; });
    };
    ExperienceDetailComponent.prototype.gotoExperiences = function () {
        var experienceId = this.experience ? this.experience.id : null;
        // Pass along the hero id if available
        // so that the HeroList component can select that hero.
        // Include a junk 'foo' property for fun.
        this.router.navigate(['/experience', { id: experienceId, foo: 'foo' }]);
    };
    return ExperienceDetailComponent;
}());
ExperienceDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["D" /* Component */])({
        template: __webpack_require__(247),
        styles: [__webpack_require__(238)],
        providers: [__WEBPACK_IMPORTED_MODULE_3__experience_service__["a" /* ExperienceService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__experience_service__["a" /* ExperienceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__experience_service__["a" /* ExperienceService */]) === "function" && _c || Object])
], ExperienceDetailComponent);

var _a, _b, _c;
//# sourceMappingURL=experience-detail.component.js.map

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__experience_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(34);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExperienceListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ExperienceListComponent = (function () {
    function ExperienceListComponent(route, router, service) {
        this.route = route;
        this.router = router;
        this.service = service;
    }
    ExperienceListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.experiences = this.route.params
            .switchMap(function (params) {
            _this.selectedId = +params['id'];
            return _this.service.getExperiences();
        });
    };
    ExperienceListComponent.prototype.isSelected = function (experience) { return experience.id === this.selectedId; };
    ExperienceListComponent.prototype.onSelect = function (experience) {
        this.router.navigate(['/experience', experience.id]);
    };
    return ExperienceListComponent;
}());
ExperienceListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["D" /* Component */])({
        selector: 'app-experience',
        template: __webpack_require__(248),
        styles: [__webpack_require__(239)],
        providers: [__WEBPACK_IMPORTED_MODULE_2__experience_service__["a" /* ExperienceService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__experience_service__["a" /* ExperienceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__experience_service__["a" /* ExperienceService */]) === "function" && _c || Object])
], ExperienceListComponent);

var _a, _b, _c;
//# sourceMappingURL=experience-list.component.js.map

/***/ }),

/***/ 158:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 158;


/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(180);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'app-about',
        template: __webpack_require__(245),
        styles: [__webpack_require__(236)]
    }),
    __metadata("design:paramtypes", [])
], AboutComponent);

//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(246),
        styles: [__webpack_require__(237)]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__about_about_component__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__page_not_found_page_not_found_component__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_home_component__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__experience_experience_module__ = __webpack_require__(177);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_10__home_home_component__["a" /* HomeComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_8__about_about_component__["a" /* AboutComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_9__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */] },
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__about_about_component__["a" /* AboutComponent */],
            __WEBPACK_IMPORTED_MODULE_9__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */],
            __WEBPACK_IMPORTED_MODULE_10__home_home_component__["a" /* HomeComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_11__experience_experience_module__["a" /* ExperienceModule */],
            __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__experience_list_component__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__experience_detail_component__ = __webpack_require__(132);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExperienceRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var experienceRoutes = [
    { path: 'experience', component: __WEBPACK_IMPORTED_MODULE_2__experience_list_component__["a" /* ExperienceListComponent */] },
    { path: 'experience/:id', component: __WEBPACK_IMPORTED_MODULE_3__experience_detail_component__["a" /* ExperienceDetailComponent */] }
];
var ExperienceRoutingModule = (function () {
    function ExperienceRoutingModule() {
    }
    return ExperienceRoutingModule;
}());
ExperienceRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(experienceRoutes)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]
        ]
    })
], ExperienceRoutingModule);

//# sourceMappingURL=experience-routing.module.js.map

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__experience_list_component__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__experience_detail_component__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__experience_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__experience_routing_module__ = __webpack_require__(176);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExperienceModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ExperienceModule = (function () {
    function ExperienceModule() {
    }
    return ExperienceModule;
}());
ExperienceModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_6__experience_routing_module__["a" /* ExperienceRoutingModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__experience_list_component__["a" /* ExperienceListComponent */],
            __WEBPACK_IMPORTED_MODULE_4__experience_detail_component__["a" /* ExperienceDetailComponent */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_5__experience_service__["a" /* ExperienceService */]]
    })
], ExperienceModule);

//# sourceMappingURL=experience.module.js.map

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
        this.title = 'SOFI KALUGINA';
        this.isExpanded = false;
        this.state = 'small';
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.toExpand = function () {
        this.isExpanded = !this.isExpanded;
    };
    HomeComponent.prototype.animateMe = function () {
        this.state = (this.state === 'small' ? 'large' : 'small');
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__(249),
        styles: [__webpack_require__(240)],
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* trigger */])('myAwesomeAnimation', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* state */])('small', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* style */])({
                    transform: 'scale(1)',
                })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* state */])('large', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* style */])({
                    transform: 'scale(1.2)',
                })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* transition */])('small => large', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* animate */])('100ms ease-in', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* keyframes */])([
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* style */])({ opacity: 1, transform: 'translateY(35px)', offset: 0.5 }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* style */])({ opacity: 1, transform: 'translateY(0)', offset: 1.0 })
                ]))),
            ]),
        ]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    return PageNotFoundComponent;
}());
PageNotFoundComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'app-page-not-found',
        template: __webpack_require__(250),
        styles: [__webpack_require__(241)]
    }),
    __metadata("design:paramtypes", [])
], PageNotFoundComponent);

//# sourceMappingURL=page-not-found.component.js.map

/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 236:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 237:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 238:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 239:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 240:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, ".container {\n  width: 100%;\n  padding: 0;\n}\narticle {\n  margin-top: 150px;\n}\n.logo {\n  margin: 0;\n  position: relative;\n  z-index: 5;\n  text-align: center;\n  padding: 340px 0 200px 0;\n}\n.logo-text a {\n  font-size: -webkit-xxx-large;\n  font-family: sans-serif;\n  color: ghostwhite;\n}\n.logo-text a:focus,\n.logo-text a:hover {\n  text-decoration: none;\n}\n.mail {\n  padding-top: 55px;\n}\n.mail-text {\n  text-align: center;\n}\n.mail-text p {\n  color: ghostwhite;\n}\n.mail-text p a {\n  color: rgba(0, 55, 133, 0.82);\n}\n.about-me, .my-experience {\n  background-color: rgba(25, 33, 44, 0.71);\n}\n.about-me-content, .my-experience-content {\n  width: 70%;\n  margin: 0 auto;\n  padding: 20px;\n  background-color: ghostwhite;\n}\n.my-experience-content {\n  background-color: transparent;\n  border: 40px solid rgba(248, 248, 255, 0.57);\n}\nh2, h3, span {\n  color: rgba(0, 55, 133, 0.82);\n}\nh2, h3 {\n  text-align: center;\n}\n.photo {\n  width: 400px;\n  height: 400px;\n  background: #000 url(\"/assets/images/ava2.jpg\");\n  background-size: cover;\n  border-radius: 200px;\n  margin: 0 auto;\n}\n\n.exp-1 {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin: 40px;\n}\n.preview, .prev-image {\n  width: 50%;\n  height: 345px;\n  padding: 25px;\n  background-color: rgba(248, 248, 255, 0.57);\n}\n.prev-image {\n  margin-left: 20px;\n  background: #000 url(" + __webpack_require__(286) + ");\n  background-size: cover;\n}\n.show-title {\n  height: 100%;\n  visibility: hidden;\n}\n.show-title:hover {\n  visibility: visible;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 241:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 245:
/***/ (function(module, exports) {

module.exports = "<p>About works!</p>\n"

/***/ }),

/***/ 246:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ 247:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"experience\">\n  <h2>{{experience.companyName}}</h2>\n  <div>Start:\n    {{experience.companyStart.getDate()}}/{{experience.companyStart.getMonth()}}/{{experience.companyStart.getFullYear()}}</div>\n  <div>End:\n    {{experience.companyEnd.getDate()}}/{{experience.companyEnd.getMonth()}}/{{experience.companyEnd.getFullYear()}}</div>\n  <div>Responsibility: {{experience.responsibilityFull}}</div>\n  <p>\n    <button (click)=\"gotoExperiences()\">Back</button>\n  </p>\n</div>\n"

/***/ }),

/***/ 248:
/***/ (function(module, exports) {

module.exports = "<div>\n  <div\n    *ngFor=\"let experience of experiences | async\"\n    [class.selected]=\"isSelected(experience)\"\n    (click)=\"onSelect(experience)\"\n    style=\"border: 1px solid black\"\n  >\n\n    <div>Company: {{experience.name}}</div>\n    <div>Start:\n      {{experience.companyStart.getDate()}}/{{experience.companyStart.getMonth()}}/{{experience.companyStart.getFullYear()}}</div>\n    <div>End:\n      {{experience.companyEnd.getDate()}}/{{experience.companyEnd.getMonth()}}/{{experience.companyEnd.getFullYear()}}</div>\n    <div>Responsibility: {{experience.responsibilityShort}}</div>\n  </div>\n</div>\n"

/***/ }),

/***/ 249:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-toggleable-md navbar-light bg-faded\">\n  <button\n    class=\"navbar-toggler navbar-toggler-right\"\n    type=\"button\"\n    aria-controls=\"navbarNav\"\n    (click)=\"toExpand()\"\n    [attr.aria-expanded]=\"isExpanded\"\n    aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarNav\" [ngbCollapse]=\"!isExpanded\">\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"\">Home<span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#Sophiya\">About me</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#experience\">Experience</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#contacts\">Contact me</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n<div class=\"container\" id=\"top\">\n\n  <div class=\"logo\">\n    <div class=\"logo-text\"><a href=\"#top\">{{title}}</a></div>\n  </div>\n\n  <div class=\"mail\">\n    <div class=\"mail-text\">\n      <p>E-mail:\n      <a title=\"Write me\" href=\"mailto:sofi.kalugina@gmail.com\">\n        sofi.kalugina@gmail.com\n      </a> </p>\n    </div>\n  </div>\n\n  <article class=\"about-me\">\n    <div class=\"about-me-content\">\n      <h2><a id=\"Sophiya\"></a> Sophia Kalugina</h2>\n      <h3>Front End Developer</h3>\n      <div class=\"photo\"></div>\n      <p>\n        <span>Date of birth:</span>\n        october 22, 1988\n      </p>\n      <p>\n        <span>City:</span>\n        Kiev\n      </p>\n      <p>\n        <span>\n          More:\n        </span>\n        I'm a Front End software developer. I started learning front end in December 2015, at Brain Academy courses. I studied layout, styling, Less, Grunt builder, and of course JavaScript. At the moment I am studying such technologies as TypeScript, webpack 2, Angular 2. During my professional growth I worked in one small product company ParaShoes - this company is engaged in selling shoes. I was envolved in developing a client part of the internet showcase.\n        I am a young and fast-paced specialist, I am open to new knowledge and technologies, and most importantly - I dream to work in a big team of professionals, from which I could learn a lot, be able to improve my knowledge and skills and could bring benefit to the project with my work.\n      </p>\n      <p>\n        <span>Languages:</span>\n        Ukrainian, Russian, English - advanced: high communicative skills, reading of technical documentation.\n      </p>\n      <p>\n        <span>Education:</span>\n        Mariupol State University, foreign languages (English translation)\n      </p>\n      <p>\n        <span id=\"experience\">Courses:</span>\n        Brain Academy, LLC\n        <br>\n        Frontend course\n        <br>\n        Certificate of Achievement Brain Academy Career Certification, Licence 0443\n      </p>\n    </div>\n  </article>\n\n  <article class=\"my-experience\">\n    <div class=\"my-experience-content\">\n      <h2>\n        Experience list\n      </h2>\n      <div class=\"exp-1\">\n        <div class=\"preview\">nklnlkn</div>\n        <div class=\"prev-image\">\n          <div class=\"show-title\">\n            ParaShoes\n          </div>\n        </div>\n      </div>\n    </div>\n  </article>\n</div>\n"

/***/ }),

/***/ 250:
/***/ (function(module, exports) {

module.exports = "<p>page not found</p>\n<a routerLink=\"\">Go home</a>\n"

/***/ }),

/***/ 286:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ava2.4fca3cf8bccf60a1fca2.jpg";

/***/ }),

/***/ 290:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(159);


/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* unused harmony export Experience */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExperienceService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Experience = (function () {
    function Experience(id, companyName, companyStart, companyEnd, responsibilityShort, responsibilityFull) {
        this.id = id;
        this.companyName = companyName;
        this.companyStart = companyStart;
        this.companyEnd = companyEnd;
        this.responsibilityShort = responsibilityShort;
        this.responsibilityFull = responsibilityFull;
        this.name = companyName;
        this.start = companyStart;
        this.end = companyEnd;
    }
    return Experience;
}());

var EXPERIENCE;
EXPERIENCE = [
    new Experience(1, 'BUlavka', new Date('2016-05-22T00:00:00'), new Date('2016-12-27T00:00:00'), 'frontend', 'frontend bla bla bla'),
    new Experience(2, 'Roga & Kopyta LTD', new Date('2017-01-12T00:00:00'), new Date(), 'frontend', 'frontend bla bla bla')
];
var experiencePromise = Promise.resolve(EXPERIENCE);
var ExperienceService = (function () {
    function ExperienceService() {
    }
    ExperienceService.prototype.getExperiences = function () {
        return experiencePromise;
    };
    ExperienceService.prototype.getExperience = function (id) {
        return experiencePromise.then(function (experience) { return experience.find(function (experience) { return experience.id === +id; }); });
    };
    return ExperienceService;
}());
ExperienceService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Injectable */])()
], ExperienceService);

//# sourceMappingURL=experience.service.js.map

/***/ })

},[290]);
//# sourceMappingURL=main.bundle.js.map