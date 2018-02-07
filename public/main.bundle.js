webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#router-outlet-wrapper{\r\n    width: 100%;\r\n}\r\n#app-background{\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100vh;\r\n    z-index: -1;\r\n    background-image: url('https://images.unsplash.com/photo-1485003975062-9946bdb9dbae?auto=format&fit=crop&w=1500&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D');\r\n    background-size: cover;\r\n    background-position: center;\r\n}\r\n#app-background:before{\r\n    content: \"\";\r\n    display: block;\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    top: 0;\r\n    left: 0;\r\n    background-color: rgba(0, 0, 0, 0.5);\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div id=\"router-outlet-wrapper\" [@routerAnimation]=\"getRouteAnimation(route)\">\r\n    <div class=\"container\">\r\n        <flash-messages></flash-messages>\r\n    </div>\r\n\r\n    <router-outlet #route=\"outlet\"></router-outlet>\r\n    <!-- <app-footer></app-footer> -->\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    // Animation state
    AppComponent.prototype.getRouteAnimation = function (outlet) {
        return outlet.activatedRouteData['animation'];
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")],
        animations: [
            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["l" /* trigger */])('routerAnimation', [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* transition */])("home => dashboard,\n                  home => login,\n                  home => register,\n                  home => post-resource,\n                  home => find-resource,\n                  dashboard => login,\n                  dashboard => register,\n                  dashboard => post-resource,\n                  dashboard => find-resource,\n                  search => login,\n                  search => register,\n                  search => post-resource,\n                  search => find-resource,\n                  profile => login,\n                  profile => register,\n                  login => register,\n                  post-resource => find-resource,\n                  post-resource => login,\n                  post-resource => register,\n                  find-resource => login,\n                  find-resource => register", [
                    // Initial state of new route
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* query */])(':enter', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* style */])({
                        position: 'fixed',
                        width: '100%',
                        height: '100%',
                        transform: 'translateX(100%)'
                    }), { optional: true }),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* group */])([
                        // move page off screen left on leave
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* query */])(':leave', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('500ms ease', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* style */])({
                            position: 'fixed',
                            width: '100%',
                            height: '100%',
                            transform: 'translateX(-100%)'
                        })), { optional: true }),
                        // move page in screen from left to right
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* query */])(':enter', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('500ms ease', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* style */])({
                            opacity: 1,
                            transform: 'translateX(0%)'
                        })), { optional: true }),
                    ])
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* transition */])("dashboard => home,\n                  login => home,\n                  login => dashboard,\n                  login => search,\n                  login => post-resource,\n                  login => find-resource,\n                  register => home,\n                  register => login,\n                  register => dashboard,\n                  register => search,\n                  register => post-resource,\n                  register => find-resource,\n                  post-resource => home,\n                  post-resource => dashboard,\n                  post-resource => search,\n                  find-resource => home,\n                  find-resource => dashboard,\n                  find-resource => search,\n                  find-resource => post-resource", [
                    // Initial state of new route
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* query */])(':enter', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* style */])({
                        position: 'fixed',
                        width: '100%',
                        height: '100%',
                        transform: 'translateX(-100%)'
                    }), { optional: true }),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* group */])([
                        // move page off screen right on leave
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* query */])(':leave', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('500ms ease', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* style */])({
                            position: 'fixed',
                            width: '100%',
                            height: '100%',
                            transform: 'translateX(100%)'
                        })), { optional: true }),
                        // move page in screen from right to left
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* query */])(':enter', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('500ms ease', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* style */])({
                            opacity: 1,
                            transform: 'translateX(0%)'
                        })), { optional: true }),
                    ])
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* transition */])("home => search,\n                  home => profile,\n                  dashboard => search,\n                  dashboard => profile,\n                  search => profile,\n                  login => profile,\n                  register => profile,\n                  post-resource => profile,\n                  find-resource => profile", [
                    // Initial state of new route
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* query */])(':enter', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* style */])({
                        position: 'fixed',
                        width: '100%',
                        height: '100%',
                        transform: 'translateY(100%)'
                    }), { optional: true }),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* group */])([
                        // move page off screen left on leave
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* query */])(':leave', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('500ms ease', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* style */])({
                            position: 'fixed',
                            width: '100%',
                            height: '100%',
                            transform: 'translateX(-100%)'
                        })), { optional: true }),
                        // move page in screen up from bottom
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* query */])(':enter', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('700ms ease', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* style */])({
                            opacity: 1,
                            transform: 'translateY(0%)'
                        })), { optional: true }),
                    ])
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* transition */])("search => home,\n                  search => dashboard,\n                  profile => home,\n                  profile => dashboard,\n                  profile => search,\n                  profile => post-resource,\n                  profile => find-resource", [
                    // Initial state of new route
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* query */])(':enter', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* style */])({
                        position: 'fixed',
                        width: '100%',
                        height: '100%',
                        transform: 'translateX(-100%)'
                    }), { optional: true }),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* group */])([
                        // move page off screen down on leave
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* query */])(':leave', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('500ms ease', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* style */])({
                            position: 'fixed',
                            width: '100%',
                            height: '100%',
                            opacity: '0'
                        })), { optional: true }),
                        // move page in screen from left to right
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* query */])(':enter', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('700ms ease', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* style */])({
                            opacity: 1,
                            transform: 'translateX(0%)'
                        })), { optional: true }),
                    ])
                ]),
            ])
        ]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_search_search_component__ = __webpack_require__("../../../../../src/app/components/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_search_service__ = __webpack_require__("../../../../../src/app/services/search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_update_user_service__ = __webpack_require__("../../../../../src/app/services/update-user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_ng2_avatar__ = __webpack_require__("../../../../ng2-avatar/ng2-avatar.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_ng2_avatar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_ng2_avatar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_search_history_list_search_history_list_component__ = __webpack_require__("../../../../../src/app/components/search-history-list/search-history-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_edit_profile_edit_profile_component__ = __webpack_require__("../../../../../src/app/components/edit-profile/edit-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_post_resource_post_resource_component__ = __webpack_require__("../../../../../src/app/components/post-resource/post-resource.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_resources_service__ = __webpack_require__("../../../../../src/app/services/resources.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_find_resource_find_resource_component__ = __webpack_require__("../../../../../src/app/components/find-resource/find-resource.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_footer_footer_component__ = __webpack_require__("../../../../../src/app/components/footer/footer.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















// import { SearchHistoryComponent } from './components/search-history/search-history.component';







var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__["a" /* HomeComponent */], data: { animation: 'home' } },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_9__components_register_register_component__["a" /* RegisterComponent */], data: { animation: 'register' } },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_8__components_login_login_component__["a" /* LoginComponent */], data: { animation: 'login' } },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_11__components_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_18__guards_auth_guard__["a" /* AuthGuard */]], data: { animation: 'dashboard' } },
    { path: 'search', component: __WEBPACK_IMPORTED_MODULE_13__components_search_search_component__["a" /* SearchComponent */], data: { animation: 'search' } },
    { path: 'post-resource', component: __WEBPACK_IMPORTED_MODULE_23__components_post_resource_post_resource_component__["a" /* PostResourceComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_18__guards_auth_guard__["a" /* AuthGuard */]], data: { animation: 'post-resource' } },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_12__components_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_18__guards_auth_guard__["a" /* AuthGuard */]], data: { animation: 'profile' } },
    { path: 'find-resource', component: __WEBPACK_IMPORTED_MODULE_25__components_find_resource_find_resource_component__["a" /* FindResourceComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_18__guards_auth_guard__["a" /* AuthGuard */]], data: { animation: 'find-resource' } },
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_search_search_component__["a" /* SearchComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_search_history_list_search_history_list_component__["a" /* SearchHistoryListComponent */],
            __WEBPACK_IMPORTED_MODULE_22__components_edit_profile_edit_profile_component__["a" /* EditProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_23__components_post_resource_post_resource_component__["a" /* PostResourceComponent */],
            __WEBPACK_IMPORTED_MODULE_25__components_find_resource_find_resource_component__["a" /* FindResourceComponent */],
            __WEBPACK_IMPORTED_MODULE_26__components_footer_footer_component__["a" /* FooterComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_17_angular2_flash_messages__["FlashMessagesModule"],
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_20_ng2_avatar__["AvatarModule"].forRoot()
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_14__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_15__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_18__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_16__services_search_service__["a" /* SearchService */], __WEBPACK_IMPORTED_MODULE_19__services_update_user_service__["a" /* UpdateUserService */], __WEBPACK_IMPORTED_MODULE_24__services_resources_service__["a" /* ResourcesService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* #dashboard-container{ */\r\n    /* padding: 0; */\r\n    /* width: 100%; */\r\n    /* min-height: 100vh; */\r\n    /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#03a9f4+0,0288d1+100 */\r\n    /* background: #03a9f4; */ /* Old browsers */\r\n    /* background: -moz-linear-gradient(top,  #03a9f4 0%, #0288d1 100%); */ /* FF3.6-15 */\r\n    /* background: -webkit-linear-gradient(top,  #03a9f4 0%,#0288d1 100%); */ /* Chrome10-25,Safari5.1-6 */\r\n    /* background: linear-gradient(to bottom,  #03a9f4 0%,#0288d1 100%); */ /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\r\n    /* filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#03a9f4', endColorstr='#0288d1',GradientType=0 ); */ /* IE6-9 */\r\n/* } */\r\na, a:hover, a:focus, a:visited, a:active{\r\n    text-decoration: none;\r\n}\r\n.container.inner{\r\n    height: calc(100vh - 64px);\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    /* background-color: #fff; */\r\n}\r\n.row.dashboard-options-title{\r\n    text-align: center;\r\n}\r\n.row.dashboard-btns{\r\n    width: 100%;\r\n}\r\n.dashboard-options-title{\r\n    color: #333;\r\n}\r\n.container.inner .col-md-12.dashboard-title{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n}\r\n.col-md-12.dashboard-title .dashboard-title{\r\n    color: #333;\r\n    margin: 1em 0 0 0;\r\n    /* text-shadow: 0 1px 4px rgba(0, 0, 0, 0.4); */\r\n}\r\n.container.inner .col-md-4{\r\n    padding: 3em 0 4em 0;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n}\r\n.container.inner .col-md-4 a{\r\n    width: 80%;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n}\r\n.dashboard-btn{\r\n    width: 100%;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    height: 150px;\r\n    text-align: center;\r\n    font-size: 2em;\r\n    background-color: #fff;\r\n    color: #666;\r\n    border-radius: .3rem;\r\n    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);\r\n    transition: all 300ms ease;\r\n}\r\n.btn-text-top{\r\n    color: #44A7EB;\r\n}\r\n.dashboard-btn:hover{\r\n    background-color: #44A7EB;\r\n    cursor: pointer;\r\n}\r\n.dashboard-btn:hover p{\r\n    color: #fff;\r\n}\r\n.dashboard-btn:hover hr{\r\n    border-color: #fff;\r\n}\r\n.dashboard-btn p{\r\n    margin: 0;\r\n    transition: all 300ms ease;\r\n}\r\n.dashboard-btn hr{\r\n    margin: 0;\r\n    width: 45%;\r\n    border-top: 1px solid #ccc;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container inner\">\r\n    <div class=\"row dashboard-title\">\r\n        <div class=\"col-md-12 dashboard-title\">\r\n            <h3 class=\"dashboard-title\">{{ titleText }}</h3>\r\n        </div>\r\n    </div><!-- .row -->\r\n    <div class=\"row dashboard-btns\">\r\n        <div class=\"col-md-4\">\r\n            <a [routerLink]=\"['/find-resource']\">\r\n                <div class=\"dashboard-btn find\" (mouseenter)=\"findBtnEnter()\" (mouseleave)=\"btnLeave()\">\r\n                    <p class=\"btn-text-top\">Find</p>\r\n                    <hr>\r\n                    <p>Resource</p>\r\n                </div>\r\n            </a>\r\n        </div><!-- .col-md-4 -->\r\n        <div class=\"col-md-4\">\r\n            <a [routerLink]=\"['/post-resource']\">\r\n                <div class=\"dashboard-btn post\" (mouseenter)=\"postBtnEnter()\" (mouseleave)=\"btnLeave()\">\r\n                    <p class=\"btn-text-top\">Post</p>\r\n                    <hr>\r\n                    <p>Resource</p>\r\n                </div>\r\n            </a>\r\n        </div><!-- .col-md-4 -->\r\n        <div class=\"col-md-4\">\r\n            <a [routerLink]=\"['/search']\">\r\n                <div class=\"dashboard-btn search\" (mouseenter)=\"searchBtnEnter()\" (mouseleave)=\"btnLeave()\">\r\n                    <p class=\"btn-text-top\">Search</p>\r\n                    <hr>\r\n                    <p>Tags</p>\r\n                </div>\r\n            </a>\r\n        </div><!-- .col-md-4 -->\r\n    </div><!-- .row -->\r\n</div><!-- .container.inner -->\r\n<app-footer></app-footer>\r\n<!-- <app-search></app-search> -->"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = (function () {
    function DashboardComponent() {
        this.titleText = "Find the code references you're looking for.";
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent.prototype.findBtnEnter = function () {
        this.titleText = "Find the resources you're looking for.";
    };
    DashboardComponent.prototype.postBtnEnter = function () {
        this.titleText = "Post the resources you'd like.";
    };
    DashboardComponent.prototype.searchBtnEnter = function () {
        this.titleText = "Search for the tags you need.";
    };
    DashboardComponent.prototype.btnLeave = function () {
        this.titleText = "Find the code references you're looking for.";
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [])
], DashboardComponent);

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/edit-profile/edit-profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "label {\r\n    font-size: 1.25em;\r\n}\r\n\r\n.btn-link {\r\n    text-decoration: underline;\r\n    text-transform: capitalize;\r\n}\r\n\r\n.card-title {\r\n  width: 100%;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  margin: 0;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n}\r\n\r\n.card-title a.btn{\r\n  margin-left: auto;\r\n}\r\n\r\n.card-header {\r\n  background-color: #fff;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/edit-profile/edit-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <link href=\"https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.4.3/css/mdb.css\" rel=\"stylesheet\"> -->\r\n<!-- Form subscription -->\r\n\r\n<div class=\"card\">\r\n    <div class=\"card-header\">\r\n        <h3 class=\"card-title\">Update your profile\r\n            <a class=\"btn btn-primary btn-rounded\" (click)=\"isEdit = !isEdit\">\r\n                <span *ngIf=\"isEdit; else noEdit\">Edit</span>\r\n                <ng-template #noEdit>Hide</ng-template>\r\n            </a>\r\n        </h3>\r\n    </div>\r\n    <div class=\"card-body\" [hidden]=\"isEdit\">\r\n        <form (submit)=\"onSubmit($event)\">\r\n            <div class=\"form-group\">\r\n                <label><i class=\"fa fa-picture-o prefix grey-text\"></i> Profile Image:</label>\r\n                <input type=\"text\" class=\"form-control\" name=\"profileImg\" [(ngModel)]=\"updateProfile.profileImg\" placeholder=\"http://example.com/img/me.jpg\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label><i class=\"fa fa-facebook prefix grey-text\"></i> Facebook:</label>\r\n                <input type=\"text\" class=\"form-control\" name=\"facebook\" [(ngModel)]=\"updateProfile.facebook\" placeholder=\"https://www.facebook.com/user.name.14606936\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label><i class=\"fa fa-twitter prefix grey-text\"></i> Twitter:</label>\r\n                <input type=\"text\" class=\"form-control\" name=\"twitter\" [(ngModel)]=\"updateProfile.twitter\" placeholder=\"https://twitter.com/twitter_hadle\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label><i class=\"fa fa-instagram prefix grey-text\"></i> Instagram:</label>\r\n                <input type=\"text\" class=\"form-control\" name=\"instagram\" [(ngModel)]=\"updateProfile.instagram\" placeholder=\"https://www.instagram.com/user.name/\">\r\n            </div>\r\n            <input type=\"submit\" value=\"Save\" class=\"btn btn-primary\">\r\n        </form>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/edit-profile/edit-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_update_user_service__ = __webpack_require__("../../../../../src/app/services/update-user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditProfileComponent = (function () {
    function EditProfileComponent(authService, updateUserService) {
        this.authService = authService;
        this.updateUserService = updateUserService;
        this.isEdit = true;
        this.updateProfile = {
            user: '',
            profileImg: '',
            facebook: '',
            twitter: '',
            instagram: ''
        };
    }
    EditProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.updateProfile.user = profile.user.name;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    EditProfileComponent.prototype.onSubmit = function (e) {
        e.preventDefault();
        this.updateUserService.updateUserProfile(this.updateProfile).subscribe(function (profile) {
            console.log(profile);
        });
    };
    return EditProfileComponent;
}());
EditProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-edit-profile',
        template: __webpack_require__("../../../../../src/app/components/edit-profile/edit-profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/edit-profile/edit-profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_update_user_service__["a" /* UpdateUserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_update_user_service__["a" /* UpdateUserService */]) === "function" && _b || Object])
], EditProfileComponent);

var _a, _b;
//# sourceMappingURL=edit-profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/find-resource/find-resource.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".col {\r\n    padding: 0;\r\n}\r\n\r\n.d-flex {\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n}\r\n\r\n.avatar {\r\n    width: 100%;\r\n}\r\n\r\n.author-info {\r\n    text-transform: capitalize;\r\n}\r\n\r\n.author-info .date {\r\n    color: #aaa;\r\n    font-size: 0.5em;\r\n}\r\n\r\n.post-title {\r\n    font-weight: 700;\r\n}\r\n\r\n.tags {\r\n    background-color: #eee;\r\n    padding: 10px 40px;\r\n    border-radius: 30px;\r\n    box-shadow: 0 4px 10px rgba(0,0,0, .2);\r\n}\r\n\r\n.card .card-body h3 {\r\n  margin-bottom: 1rem;\r\n  text-align: center;\r\n  font-weight: 300;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/find-resource/find-resource.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid py-5\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-4 \">\r\n      <div class=\"card\">\r\n        <div class=\"card-header bg-primary\">\r\n          \r\n        </div>\r\n        <div class=\"card-body\">\r\n            <h3>Filter resources</h3>\r\n            <form>        \r\n                    <div class=\"md-form\">\r\n                        <i class=\"fa fa-font prefix\"></i>\r\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Title\">\r\n                        <label for=\"form3\"></label>\r\n                    </div>\r\n                \r\n                    <div class=\"md-form\">\r\n                        <i class=\"fa fa-pencil prefix\"></i>\r\n                        <input type=\"text\"class=\"form-control\" placeholder=\"Author\">\r\n                        <label for=\"form2\"></label>\r\n                    </div>\r\n                \r\n                    <div class=\"md-form\">\r\n                        <select class=\"form-control\" id=\"category\" name=\"category\" [(ngModel)]=\"category\">\r\n                            <option>Front end development</option>\r\n                            <option>Back end development</option>\r\n                            <option>App development</option>\r\n                            <option>Game development</option>\r\n                            <option>Databases</option>\r\n                            <option>Other</option>\r\n                          </select>\r\n                    </div>\r\n                \r\n                    <div class=\"md-form\">\r\n                        <i class=\"fa fa-link prefix\"></i>\r\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Url\">\r\n                        <label for=\"form2\"></label>\r\n                    </div>\r\n                \r\n                    <div class=\"text-center\">\r\n                        <button class=\"btn btn-primary\">Go <i class=\"fa fa-paper-plane-o ml-1\"></i></button>\r\n                    </div>\r\n                \r\n                </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-8\">\r\n        <div class=\"container\">\r\n            <div class=\"row\" *ngFor=\"let post of posts\">\r\n                    <div class=\"col-lg-12 py-3 mb-3 card\">\r\n                        <div class=\"card-body\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-2\">\r\n                                    <avatar class=\"avatar\" [size]=\"50\" [name]=\"post.author\" [displayType]=\"'circle'\"></avatar>\r\n                                </div>\r\n                                <div class=\"col-10\">\r\n                                        <h3 class=\"author-info display-5\">\r\n                                            {{ post.author }}\r\n                                            <span class=\"date d-block\">{{ post.date | date }}</span>\r\n                                        </h3>\r\n                                </div>\r\n                            </div>\r\n                            <hr>\r\n                            <div class=\"row\">\r\n                                <div class=\"col\">\r\n                                    <h3 class=\"post-title display-5\">{{ post.title }}</h3>\r\n                                    <p class=\"description text-muted\">{{ post.content }}</p>\r\n                                    <a target=\"_blank\" class=\"url d-block mb-3\" [href]=\"post.link\">{{ post.link }}</a>\r\n                                    <span class=\"d-inline-block tags\">{{ post.category }}</span>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "../../../../../src/app/components/find-resource/find-resource.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FindResourceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_resources_service__ = __webpack_require__("../../../../../src/app/services/resources.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FindResourceComponent = (function () {
    function FindResourceComponent(resourceService) {
        this.resourceService = resourceService;
        this.filter = {
            title: "",
            link: "",
            author: "",
            content: "",
            category: "",
            date: 0
        };
        this.posts = [];
    }
    FindResourceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.resourceService.getAll(this.filter).subscribe(function (posts) {
            for (var i = 0; i < posts.length; i++) {
                _this.posts.unshift(posts[i]);
            }
        });
        console.log(this.posts);
    };
    return FindResourceComponent;
}());
FindResourceComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-find-resource',
        template: __webpack_require__("../../../../../src/app/components/find-resource/find-resource.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/find-resource/find-resource.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_resources_service__["a" /* ResourcesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_resources_service__["a" /* ResourcesService */]) === "function" && _a || Object])
], FindResourceComponent);

var _a;
//# sourceMappingURL=find-resource.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".footer-nav li {\r\n    display: inline-block;\r\n    margin-right: 25px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Footer-->\r\n<footer class=\"page-footer center-on-small-only stylish-color-dark\">\r\n\r\n      <!--Footer Links-->\r\n      <div class=\"container\">\r\n          <div class=\"row\">\r\n\r\n              <!--First column-->\r\n              <div class=\"col-md-6\">\r\n                    <div class=\"social-section text-center\">\r\n                            <ul>\r\n\r\n                                <li><a class=\"btn-floating btn-sm btn-fb\"><i class=\"fa fa-facebook\"> </i></a></li>\r\n                                <li><a class=\"btn-floating btn-sm btn-tw\"><i class=\"fa fa-twitter\"> </i></a></li>\r\n                                <li><a class=\"btn-floating btn-sm btn-gplus\"><i class=\"fa fa-google-plus\"> </i></a></li>\r\n\r\n                            </ul>\r\n                    </div>\r\n              </div>\r\n              <div class=\"col-md-6\">\r\n                <ul class=\"footer-nav\">\r\n                    <li><a href=\"/login\">Login</a></li>\r\n                    <li><a href=\"/register\">Try it out</a></li>\r\n                    <li><a href=\"#\">About us</a></li>\r\n                    <li><a href=\"#\">Contact us</a></li>\r\n\r\n                </ul>\r\n              </div>\r\n          </div>\r\n      </div>\r\n      <!--/.Footer Links-->\r\n      <div class=\"footer-copyright\">\r\n          <div class=\"container-fluid\">\r\n              © 2018 Copyright CodeRef\r\n\r\n          </div>\r\n      </div>\r\n      <!--/.Copyright-->\r\n  </footer>\r\n  <!--/.Footer-->"

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/components/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/footer/footer.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* .card.card-cascade.wider.reverse.my-4{\r\n  display: flex;\r\n  align-items: center;\r\n  box-shadow: none !important;\r\n  margin-bottom: 4em !important;\r\n}\r\n.view.overlay.hm-white-slight.waves-light{\r\n  border-radius: .3rem;\r\n  overflow: hidden;\r\n  width: 95%;\r\n  box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.3);\r\n  margin-bottom: 5.5em;\r\n} */\r\n\r\nhr {\r\n  color: #ccc;\r\n}\r\n.card-body{\r\n  padding: 2em 1em;\r\n}\r\n.card-body.text-center{\r\n  position: absolute;\r\n  bottom: 0;\r\n  background-color: #fff;\r\n  width: 90%;\r\n  box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.3);\r\n  border-radius: .3rem;\r\n}\r\n.card-body hr{\r\n  border-top: 1px solid #ccc;\r\n}\r\n.card.card-cascade img{\r\n  width: 100%;\r\n}\r\n.card-text{\r\n  font-size: 1.5em;\r\n  line-height: 1.7;\r\n  color: #555;\r\n}\r\n.col-md-4.home-col{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  margin-bottom: 44px;\r\n  color: #333;\r\n}\r\n.fa{\r\n  font-size: 3em;\r\n  color: #fff;\r\n}\r\n.fa-con{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  height: 100px;\r\n  width: 100px;\r\n  border-radius: 50%;\r\n  background-color: #44A7EB;\r\n}\r\n.card.home-card .fa{\r\n  text-shadow: rgb(48, 117, 165) 0px 0px 0px, \r\n  rgb(50, 123, 173) 1px 1px 0px, \r\n  rgb(53, 129, 182) 2px 2px 0px, \r\n  rgb(55, 136, 191) 3px 3px 0px, \r\n  rgb(58, 142, 200) 4px 4px 0px, \r\n  rgb(60, 148, 209) 5px 5px 0px, \r\n  rgb(63, 154, 217) 6px 6px 0px, \r\n  rgb(65, 161, 226) 7px 7px 0px;\r\n}\r\n.home-col-title{\r\n  margin: 1em 0 .5em 0;\r\n}\r\n.home-col-sub{\r\n  font-size: 1.25em;\r\n  font-weight: 300;\r\n  margin: 0;\r\n}\r\n.home-col-title, .home-col-sub{\r\n  text-align: center;\r\n}\r\n#masthead {\r\n  width: 100%;\r\n  min-height: 100vh;\r\n  position: relative;\r\n  padding-bottom: 23.5em;\r\n  /* padding-bottom: 12em; */\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n}\r\n.masthead-con{\r\n  position: relative;\r\n  width: 150%;\r\n  height: 90vh;\r\n  margin-left: -25%;\r\n  /* border-bottom-left-radius: 50%;\r\n  border-bottom-right-radius: 50%; */\r\n  overflow: hidden;\r\n}\r\n.masthead-video-con{\r\n  background: url(/assets/img/code.gif) no-repeat;\r\n  background-color: rgba(0,0,0, .5);\r\n  background-blend-mode: multiply;\r\n  background-size: cover;\r\n  background-position: center center;\r\n  width: 100vw;\r\n  height: 100%;\r\n  margin-left: 16.65%;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  text-transform: uppercase;\r\n}\r\n.masthead h1 {\r\n  font-size: 5em;\r\n  font-weight: 300;\r\n  letter-spacing: 0.35em;\r\n}\r\n.container.home-info-con{\r\n  /* position: absolute; */\r\n  bottom: 0;\r\n  -ms-flex-item-align: center;\r\n      -ms-grid-row-align: center;\r\n      align-self: center;\r\n}\r\n.container.home-info-con .row{\r\n  -webkit-box-align: start;\r\n      -ms-flex-align: start;\r\n          align-items: flex-start;\r\n}\r\n/* .text-block {\r\n  padding-top: 150px;\r\n} */\r\n.card.home-card{\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  padding: 2em;\r\n  /* width: 100%; */\r\n  box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.3);\r\n}\r\n@media screen and (min-width: 768px){\r\n  .masthead-con{\r\n    border-bottom-left-radius: 50%;\r\n    border-bottom-right-radius: 50%;\r\n  }\r\n  .container.home-info-con{\r\n    position: absolute;\r\n  }\r\n}\r\n@media screen and (min-width: 768px) and (max-width: 991px){\r\n  #masthead{\r\n    padding-bottom: 30em;\r\n  }\r\n  .fa-con{\r\n    width: 85px;\r\n    height: 85px;\r\n  }\r\n  .fa{\r\n    font-size: 2.5em;\r\n  }\r\n  .home-col-title{\r\n    font-size: 1.5em;\r\n    font-weight: bold;\r\n  }\r\n  .home-col-sub{\r\n    font-size: 1.2em;\r\n  }\r\n}\r\n@media screen and (max-width: 767px){\r\n  .masthead-con{\r\n    margin-bottom: 2em;\r\n  }\r\n  .card.home-card{\r\n    width: 100%;\r\n  }\r\n}\r\n@media screen and (min-width: 992px) and (max-width: 1199px){\r\n  #masthead{\r\n    padding-bottom: 26em;\r\n  }\r\n}\r\n\r\n.home-col-title{\r\n  font-size: 1.5em;\r\n  font-weight: 400;\r\n}\r\n\r\nsection {\r\n  padding: 80px 0;\r\n}\r\n\r\nh2 {\r\n  text-align: center;\r\n  margin: 0 auto;\r\n  margin-bottom: 30px;\r\n  font-weight: 300;\r\n  text-transform: uppercase;\r\n  letter-spacing: 0.1em;\r\n}\r\n\r\nh3 {\r\n  margin-top: 20px;\r\n  margin-bottom: 30px;\r\n  font-size: 1.3rem;\r\n  font-weight: 300;\r\n}\r\n\r\n#features .lead {\r\n  margin-bottom: 30px;\r\n}\r\n\r\n#features {\r\n  background-color: #fcfcfc;\r\n}\r\n\r\n#features .fa {\r\n  color: #4285F4;\r\n  font-size: 4rem;\r\n  height: 40px;\r\n}\r\n\r\n/* Resources */\r\n\r\n#resources {\r\n  background-image: linear-gradient(rgba(0,0,0, .7), rgba(0,0,0, .7)), url(/assets/img/resources.jpg);\r\n  background-position: center;\r\n  background-size: cover;\r\n  /* height: 500px; */\r\n}\r\n\r\n#resources h2.resources-title {\r\n  text-align: left !important;\r\n  margin: 0 0 30px 0;\r\n}\r\n\r\n.checks {\r\n  list-style: none;\r\n}\r\n\r\n.checks li {\r\n  margin: 20px 0;\r\n}\r\n\r\n.checks i {\r\n  font-size: 2rem;\r\n  margin-right: 20px;\r\n  display: inline-block;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<header id=\"masthead\" class=\"masthead text-white text-center\">\r\n    <div class=\"masthead-con\">\r\n        <div class=\"masthead-video-con\">\r\n            <div class=\"container\">\r\n                <div class=\"text-block\">\r\n                        <i id=\"icon\" class=\"fa fa-code fa-prefix\" style=\"text-shadow: rgb(48, 117, 165) 0px 0px 0px, rgb(50, 123, 173) 1px 1px 0px, rgb(53, 129, 182) 2px 2px 0px, rgb(55, 136, 191) 3px 3px 0px, rgb(58, 142, 200) 4px 4px 0px, rgb(60, 148, 209) 5px 5px 0px, rgb(63, 154, 217) 6px 6px 0px, rgb(65, 161, 226) 7px 7px 0px; font-size: 50px; color: rgb(255, 255, 255); height: 80px; width: 80px; line-height: 75px; border-radius: 50%; text-align: center; background-color: rgb(68, 167, 235);\"></i>\r\n                    <h1><strong>Code</strong>ref</h1>\r\n                    <p class=\"lead\">code definitions and resources, fast!</p>\r\n                    <a routerLink=\"/register\" href=\"#about\" class=\"d-inline-block btn btn-dark\">Sign Up</a>\r\n                    <a routerLink=\"/login\" href=\"#about\" class=\"d-inline-block btn btn-primary\">Login</a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"container home-info-con\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-4 home-col\">\r\n                <div class=\"card home-card\">\r\n                    <div class=\"fa-con\">\r\n                        <i class=\"fa fa-book\" aria-hidden=\"true\"></i>\r\n                    </div>\r\n                    <h3 class=\"home-col-title\">Find Resources</h3>\r\n                    <p class=\"home-col-sub\">Discover all new resources!</p>\r\n                    <hr>\r\n                    <p>Gain acess to a growing pool of developer resources and trends in the community.</p>\r\n                    <a href=\"#\" class=\"btn btn-primary\">Learn more</a>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-4 home-col\">\r\n                <div class=\"card home-card\">\r\n                    <div class=\"fa-con\">\r\n                        <i class=\"fa fa-code\" aria-hidden=\"true\"></i>\r\n                    </div>\r\n                    <h3 class=\"home-col-title\">Search Tags</h3>\r\n                    <p class=\"home-col-sub\">Various syntax definitions!</p>\r\n                    <hr>\r\n                    <p>A dictionary of programming syntax at your disposal for easy reference.</p>\r\n                    <a href=\"#\" class=\"btn btn-primary\">Learn more</a>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-4 home-col\">\r\n                <div class=\"card home-card\">\r\n                    <div class=\"fa-con\">\r\n                        <i class=\"fa fa-graduation-cap\" aria-hidden=\"true\"></i>\r\n                    </div>\r\n                    <h3 class=\"home-col-title\">Learn to Code</h3>\r\n                    <p class=\"home-col-sub\">Become a better developer!</p>\r\n                    <hr>\r\n                    <p>Use pur hub of information and resources to aid the growth of your developer talents.</p>\r\n                    <a href=\"#\" class=\"btn btn-primary\">Learn more</a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!--Card-->\r\n</header>\r\n\r\n<section id=\"features\">\r\n    <div class=\"container\">\r\n        <div class=\"row text-center\">\r\n            <h2>Join our community</h2>\r\n            <p class=\"lead\">CodeRef is a social interactive site where developers can come together and share their resources to provide beginners and intermediates a way to study and understand coding. </p>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-3\">\r\n                <div><i class=\"fa fa-code\" aria-hidden=\"true\"></i></div>\r\n                <h3 class=\"feature-title\">Language support</h3>\r\n                <a href=\"#\" class=\"btn btn-dark\">Learn more</a>\r\n            </div>\r\n            <div class=\"col-md-3\">\r\n                <div><i class=\"fa fa-commenting-o\" aria-hidden=\"true\"></i></div>\r\n                <h3 class=\"feature-title\">Chat with developers</h3>\r\n                <a href=\"#\" class=\"btn btn-dark\">Learn more</a>\r\n            </div>\r\n            <div class=\"col-md-3\">\r\n                <div><i class=\"fa fa-coffee\" aria-hidden=\"true\"></i></div>\r\n                <h3 class=\"feature-title\">#1 Hub for programmers</h3>\r\n                <a href=\"#\" class=\"btn btn-dark\">Learn more</a>\r\n            </div>\r\n            <div class=\"col-md-3\">\r\n                <div><i class=\"fa fa-laptop\" aria-hidden=\"true\"></i></div>\r\n                <h3 class=\"feature-title\">Collaborate</h3>\r\n                <a href=\"#\" class=\"btn btn-dark\">Learn more</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n<section id=\"resources\" class=\"text-white\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n                <h2 class=\"resources-title\">We got the resources</h2>\r\n                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa pariatur quod delectus quas a, aliquam ex reiciendis sunt nisi iusto repellat commodi distinctio nulla, odit laboriosam, consequuntur aut impedit nostrum?</p>\r\n                <ul class=\"checks\">\r\n                    <li><i class=\"fa fa-check\" aria-hidden=\"true\"></i> Web Development</li>\r\n                    <li><i class=\"fa fa-check\" aria-hidden=\"true\"></i> App Development</li>\r\n                    <li><i class=\"fa fa-check\" aria-hidden=\"true\"></i> Databases</li>\r\n                    <li><i class=\"fa fa-check\" aria-hidden=\"true\"></i> Game Development</li>\r\n                    <li><i class=\"fa fa-check\" aria-hidden=\"true\"></i> Web Design</li>                    \r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n<app-footer></app-footer>"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "span a {\r\n    margin-left: 1em;\r\n}\r\n\r\n.page-header, label, input{\r\n    color: #333;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container pt-5\">\r\n  <h2 class=\"page-header\">Login</h2>\r\n  <form (submit)=\"onLoginSubmit()\">\r\n    <div class=\"form-group\">\r\n      <label>Username</label>\r\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"username\" name=\"username\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label>Password</label>\r\n      <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\">\r\n    </div>\r\n    <input type=\"submit\" class=\"btn btn-primary\" value=\"Login\"><span><a [routerLink]=\"['/register']\">Dont have an account?</a></span>\r\n  </form>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password,
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            // console.log(data);
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.flashMessage.show('You are now logged in', {
                    cssClass: 'alert-success',
                    timeout: 5000
                });
                _this.router.navigate(['./']);
            }
            else {
                _this.flashMessage.show(data.msg, {
                    cssClass: 'alert-danger',
                    timeout: 5000
                });
                _this.router.navigate(['login']);
            }
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#main-nav {\r\n    background-color: #fff !important;\r\n}\r\n\r\n.logout {\r\n    background: #d9534f;\r\n    color: white !important;\r\n    padding: 10px 15px;\r\n    margin: 0;\r\n    margin-top: 10px;\r\n    margin-left: 5px;\r\n    border-radius: .3rem;\r\n}\r\n\r\n.logout:hover {\r\n    background: #d9534f !important;\r\n}\r\n\r\n*/ nav,\r\n.navbar {\r\n    padding: 0 !important;\r\n}\r\n\r\n.navbar {\r\n    margin-bottom: 0 !important;\r\n}\r\n\r\n.navbar .container-fluid .row {\r\n    width: 100%;\r\n    margin: 0;\r\n}\r\n\r\n.navbar .container-fluid .row .col-md-12 {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    padding: 0 !important;\r\n}\r\n\r\n.navbar-nav {\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n}\r\n\r\n.navbar-brand {\r\n    letter-spacing: 2px;\r\n}\r\n\r\n.logo-inverse {\r\n    font-weight: 300;\r\n}\r\n\r\n.nav-link{\r\n    padding: 1em;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Navbar-->\r\n<nav id=\"main-nav\" class=\"navbar navbar-expand-lg navbar-light blue-grey lighten-5\">\r\n\r\n    <!-- Navbar brand -->\r\n    <a class=\"navbar-brand\" [routerLink]=\"[ './']\">\r\n            <i id=\"icon\" class=\"fa fa-code fa-prefix\" style=\"text-shadow: rgb(48, 117, 165) 0px 0px 0px, rgb(50, 123, 173) 1px 1px 0px, rgb(53, 129, 182) 2px 2px 0px, rgb(55, 136, 191) 3px 3px 0px, rgb(58, 142, 200) 4px 4px 0px, rgb(60, 148, 209) 5px 5px 0px, rgb(63, 154, 217) 6px 6px 0px, rgb(65, 161, 226) 7px 7px 0px; font-size: 28px; color: rgb(255, 255, 255); height: 47px; width: 47px; line-height: 47px; border-radius: 50%; text-align: center; background-color: rgb(68, 167, 235);\"></i> \r\n        <h3 class=\"d-inline align-middle\"><strong>Code</strong><b class=\"logo-inverse\">Ref</b></h3>\r\n    </a>\r\n\r\n\r\n    <!-- Collapse button -->\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\"><span class=\"navbar-toggler-icon\"></span></button>\r\n\r\n    <!-- Collapsible content -->\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n\r\n        <!-- Links -->\r\n        <ul class=\"navbar-nav ml-auto\">\r\n            <li class=\"nav-item\" *ngIf=\"authService.loggedIn() \" [routerLinkActive]=\"[ 'active'] \" [routerLinkActiveOptions]=\"{exact: true} \"><a class=\"nav-link\" [routerLink]=\"[ '/dashboard'] \">Dashboard</a></li>\r\n            <li class=\"nav-item\" *ngIf=\"authService.loggedIn() \" [routerLinkActive]=\"[ 'active'] \" [routerLinkActiveOptions]=\"{exact: true} \"><a class=\"nav-link\" [routerLink]=\"[ '/search'] \">Search</a></li>\r\n            <li class=\"nav-item\" *ngIf=\"authService.loggedIn() \" [routerLinkActive]=\"[ 'active'] \" [routerLinkActiveOptions]=\"{exact: true} \"><a class=\"nav-link\" [routerLink]=\"[ '/post-resource'] \">Post</a></li>\r\n            <li class=\"nav-item\" *ngIf=\"authService.loggedIn() \" [routerLinkActive]=\"[ 'active'] \" [routerLinkActiveOptions]=\"{exact: true} \"><a class=\"nav-link\" [routerLink]=\"[ '/find-resource'] \">Find</a></li>\r\n            <li class=\"nav-item\" *ngIf=\"authService.loggedIn() \" [routerLinkActive]=\"[ 'active'] \" [routerLinkActiveOptions]=\"{exact: true} \"><a class=\"nav-link\" [routerLink]=\"[ '/profile'] \">Profile</a></li>\r\n            <li class=\"nav-item\" *ngIf=\"!authService.loggedIn() \" [routerLinkActive]=\"[ 'active'] \" [routerLinkActiveOptions]=\"{exact: true} \"><a class=\"nav-link\" [routerLink]=\"[ '/login'] \">Login</a></li>\r\n            <li class=\"nav-item\" *ngIf=\"!authService.loggedIn() \" [routerLinkActive]=\"[ 'active'] \" [routerLinkActiveOptions]=\"{exact: true} \"><a class=\"nav-link\" [routerLink]=\"[ '/register'] \">Register</a></li>\r\n            <li class=\"nav-item\" *ngIf=\"authService.loggedIn() \"><a (click)=\"onLogoutClick() \" href=\"# \" class=\"btn btn-danger\">Logout</a></li>\r\n        </ul>\r\n        <!-- Links -->\r\n\r\n    </div>\r\n    <!-- Collapsible content -->\r\n\r\n</nav>\r\n<!--/.Navbar-->"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = (function () {
    function NavbarComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessage.show('You are logged out', {
            cssClass: 'alert-success',
            timeout: 3000
        });
        this.router.navigate(['/login']);
        return false;
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
], NavbarComponent);

var _a, _b, _c;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/post-resource/post-resource.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* .post-resource-col{\r\n    padding-top: 2em;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    background-color: #fff;\r\n    min-height: calc(100vh - 64px);\r\n}\r\n\r\n */\r\n#post-resource-title{\r\n    margin-bottom: 1em;\r\n    padding-top: 1em;\r\n    /* font-weight: bold; */\r\n    color: #333;\r\n}\r\n\r\n.bg-light {\r\n    background: #fff !important;\r\n    min-height: 100vh;\r\n}\r\n\r\nsmall {\r\n    display: block;\r\n}\r\n\r\nlabel {\r\n    font-size: 1.3em;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/post-resource/post-resource.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"bg-light\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-12\">\r\n        <h3 class=\"text-center\" id=\"post-resource-title\">Post Resource</h3>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-12\">\r\n        <form (submit)=\"onSubmit($event)\" id=\"form\">\r\n          <div class=\"form-group\">\r\n            <label for=\"title\">Title</label>\r\n            <input type=\"email\" class=\"form-control\" id=\"title\" placeholder=\"Title Of Your Post\" name=\"title\" [(ngModel)]=\"title\">\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"category\">Category</label>\r\n            <select class=\"form-control\" id=\"category\" name=\"category\" [(ngModel)]=\"category\">\r\n              <option>Front end development</option>\r\n              <option>Back end development</option>\r\n              <option>App development</option>\r\n              <option>Game development</option>\r\n              <option>Databases</option>\r\n              <option>Other</option>\r\n            </select>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"link\">Url for your resource</label>\r\n            <input class=\"form-control\" type=\"text\" placeholder=\"Url to your resource...\" name=\"link\" [(ngModel)]=\"link\">\r\n          </div>\r\n          \r\n          <div class=\"form-group\">\r\n            <label for=\"description\">Describe Your Resource</label>\r\n            <textarea class=\"form-control\" rows=\"3\" name=\"description\" [(ngModel)]=\"description\"></textarea>        \r\n          </div>\r\n         \r\n          <button type=\"submit\" class=\"btn btn-primary\" (click)=\"onSubmit($event)\">Submit</button>\r\n          <small class=\"text-muted\">By submitting you are helping thousands of other developers!</small>\r\n          {{today | date}}\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "../../../../../src/app/components/post-resource/post-resource.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostResourceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_resources_service__ = __webpack_require__("../../../../../src/app/services/resources.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PostResourceComponent = (function () {
    function PostResourceComponent(resourcesService, flashMessage, router, authService) {
        this.resourcesService = resourcesService;
        this.flashMessage = flashMessage;
        this.router = router;
        this.authService = authService;
    }
    PostResourceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user.username;
            console.log(_this.user);
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    PostResourceComponent.prototype.onSubmit = function (event) {
        var _this = this;
        event.preventDefault();
        var postResource = {
            title: this.title,
            category: this.category,
            link: this.link,
            content: this.description,
            author: this.user,
            date: Date.now()
        };
        if (this.title === '' || this.category === '' || this.link === '' || this.title === undefined || this.category === undefined || this.link === undefined) {
            this.flashMessage.show('Please fill in all fields', {
                cssClass: 'alert-danger',
                timeout: 5000
            });
        }
        else {
            console.log(postResource);
            this.resourcesService.postResource(postResource).subscribe(function (data) {
                console.log(data);
                _this.flashMessage.show('Your resource was submitted! Thank you.', {
                    cssClass: 'alert-success',
                    timeout: 5000
                });
            });
            this.router.navigate(['/dashboard']);
        }
    };
    return PostResourceComponent;
}());
PostResourceComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-post-resource',
        template: __webpack_require__("../../../../../src/app/components/post-resource/post-resource.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/post-resource/post-resource.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_resources_service__["a" /* ResourcesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_resources_service__["a" /* ResourcesService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */]) === "function" && _d || Object])
], PostResourceComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=post-resource.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#profile-container{\r\n    position: relative;\r\n    background-image: linear-gradient(to bottom right, #03a9f4, #03a9f4);\r\n    background-size: cover;\r\n    background-position: center;\r\n    padding: 0;\r\n}\r\n\r\n#profile-container:before{\r\n    content: \"\";\r\n    display: block;\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    top: 0;\r\n    left: 0;\r\n    /* background-color: rgba(0, 0, 0, 0.5); */\r\n}\r\n\r\n.profile-name-intro,\r\n.profile-name {\r\n    color: #fff !important;\r\n    text-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);\r\n}\r\n\r\n.profile-name {\r\n    margin: 0;\r\n}\r\n\r\n.profile-name-intro {\r\n    margin: 0 0 5px 0;\r\n}\r\n\r\n.profile-pic {\r\n    width: 150px;\r\n    height: 150px;\r\n    border-radius: 50%;\r\n    background-color: #ccc;\r\n    margin-bottom: 2.5em;\r\n    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);\r\n}\r\n\r\n.profile-header .col-md-12.profile-info {\r\n    margin: 3em 0;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n}\r\n\r\n.profile-header-icons {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: justify;\r\n        -ms-flex-pack: justify;\r\n            justify-content: space-between;\r\n    margin-top: 2em;\r\n    width: 27.5%;\r\n}\r\n\r\n.social-icon {\r\n    width: 50px;\r\n    height: 50px;\r\n    border-radius: 50%;\r\n    /*background-color: #ccc;*/\r\n    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.4);\r\n}\r\n\r\n.avatar {\r\n    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);\r\n    border-radius: 50%;\r\n}\r\n\r\n/*.social-icon facebook {\r\n    background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA1MTIuMDAyIDUxMi4wMDIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMi4wMDIgNTEyLjAwMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxjaXJjbGUgc3R5bGU9ImZpbGw6IzRFNTk4RjsiIGN4PSIyNTYuMDAxIiBjeT0iMjU2IiByPSIyNTYiLz48cGF0aCBzdHlsZT0iZmlsbDojMzY0MjcwOyIgZD0iTTUxMS41OTYsMjQxLjdMMzkxLjAxOSwxMjEuMDg1Yy0xLjk5OCwwLjYwNS02Ljk4Mi0xLjcxNC05LjE3My0xLjI3NGMtNTEuNzE3LDguNjItMTAxLjcxLDAtMTUxLjcwNCwxMy43OTFjLTI0LjEzNSw2Ljg5Ni0yNS44NTksMzYuMjAyLTM0LjQ3OCw1NS4xNjVjLTEyLjA2NywzNC40NzgtMTAuMzQzLDcyLjQwNC0yNS44NTksMTA1LjE1OGMtMTAuMzQzLDIyLjQxMS0zNC40NzgsMzYuMjAyLTQzLjA5OCw2Mi4wNjFjLTIuODc1LDEwLjc4NS0yLjcwNSwyNC4zNzktNS45NTYsMzQuNjlsMTIwLjk4LDEyMC45MjJjNC43MjUsMC4yNiw5LjQ4LDAuNDAzLDE0LjI2OSwwLjQwM2MxNDEuMzg0LDAsMjU2LTExNC42MTYsMjU2LTI1NkM1MTIuMDAxLDI1MS4yMDEsNTExLjg1OCwyNDYuNDM0LDUxMS41OTYsMjQxLjd6Ii8+PGc+PHBhdGggc3R5bGU9ImZpbGw6I0ZGRkZGRjsiIGQ9Ik0zNjMuMDQzLDEwOS40NjZIMTQ4Ljk1OGMtMjEuODA5LDAtMzkuNDksMTcuNjgtMzkuNDksMzkuNDl2MjE0LjA4NWMwLDIxLjgxMSwxNy42OCwzOS40OSwzOS40OSwzOS40OWgxMDUuNTg0bDAuMTgzLTEwNC43MjJoLTI3LjIxYy0zLjUzNiwwLTYuNDA2LTIuODYtNi40MTgtNi4zOTZsLTAuMTMzLTMzLjc1OWMtMC4wMTQtMy41NTMsMi44NjctNi40NDQsNi40Mi02LjQ0NGgyNy4xNjJ2LTMyLjYxOGMwLTM3Ljg1MiwyMy4xMTgtNTguNDYzLDU2Ljg4NC01OC40NjNoMjcuNzFjMy41NDMsMCw2LjQyLDIuODc0LDYuNDIsNi40MnYyOC40NjNjMCwzLjU0Ni0yLjg3NCw2LjQyLTYuNDE2LDYuNDJsLTE3LjAwNiwwLjAxYy0xOC4zNjMsMC0yMS45MjEsOC43MjUtMjEuOTIxLDIxLjUzM3YyOC4yMzloNDAuMzUxYzMuODQ4LDAsNi44MywzLjM1OCw2LjM3NSw3LjE3M2wtNC4wMDEsMzMuNzU5Yy0wLjM4MSwzLjIzMi0zLjEyMiw1LjY2NS02LjM3NSw1LjY2NWgtMzYuMTY4bC0wLjE4MywxMDQuNzI2aDYyLjgyNmMyMS44MDksMCwzOS40OS0xNy42ODIsMzkuNDktMzkuNDkxdi0yMTQuMDlDNDAyLjUzMywxMjcuMTQ3LDM4NC44NTIsMTA5LjQ2NiwzNjMuMDQzLDEwOS40NjZMMzYzLjA0MywxMDkuNDY2eiIvPjxwb2x5Z29uIHN0eWxlPSJmaWxsOiNGRkZGRkY7IiBwb2ludHM9IjI1NC41NDIsNDAyLjUzIDI1NC43MjUsMjk3LjgwOCAyNTQuMjc3LDI5Ny44MDggMjU0LjI3Nyw0MDIuNTMgIi8+PC9nPjxwYXRoIHN0eWxlPSJmaWxsOiNEMUQxRDE7IiBkPSJNMzYzLjA0MywxMDkuNDY2SDI1NC4yNzd2MTQxLjc0MWgwLjI2OVYyMTguNTljMC0zNy44NTIsMjMuMTE4LTU4LjQ2Myw1Ni44ODQtNTguNDYzaDI3LjcxYzMuNTQzLDAsNi40MiwyLjg3NCw2LjQyLDYuNDJ2MjguNDYzYzAsMy41NDYtMi44NzQsNi40Mi02LjQxNiw2LjQybC0xNy4wMDYsMC4wMWMtMTguMzYzLDAtMjEuOTIxLDguNzI1LTIxLjkyMSwyMS41MzN2MjguMjM4aDQwLjM1MWMzLjg0OCwwLDYuODMsMy4zNTgsNi4zNzUsNy4xNzNsLTQuMDAxLDMzLjc1OWMtMC4zODEsMy4yMzItMy4xMjIsNS42NjUtNi4zNzUsNS42NjVoLTM2LjE2OGwtMC4xODMsMTA0LjcyNmg2Mi44MjZjMjEuODA5LDAsMzkuNDktMTcuNjgyLDM5LjQ5LTM5LjQ5MVYxNDguOTU2QzQwMi41MzMsMTI3LjE0NywzODQuODUyLDEwOS40NjYsMzYzLjA0MywxMDkuNDY2eiIvPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjwvc3ZnPg==');\r\n}\r\n\r\n.social-icon twitter {\r\n    background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PGNpcmNsZSBzdHlsZT0iZmlsbDojNjVBMkQ5OyIgY3g9IjI1NiIgY3k9IjI1NiIgcj0iMjU2Ii8+PHBhdGggc3R5bGU9ImZpbGw6IzNBN0NBNTsiIGQ9Ik0zOTMuMDE0LDEzOS4zMjZjLTI2LjcwMywyMy4xNjktNTMuMjUzLDQzLjQ3NS03NC45NTQsNzEuODUyYy01My4zODEsNjQuMzcyLTExOC42MTMsMTU1LjctMjA3LjM4NiwxNDIuMDg2bDE1OC42MSwxNTguMzk2YzEzNC40NTYtNi44NzMsMjQxLjQ5Ny0xMTcuNDkzLDI0Mi42ODYtMjUzLjM3NkwzOTMuMDE0LDEzOS4zMjZ6Ii8+PHBhdGggc3R5bGU9ImZpbGw6I0ZGRkZGRjsiIGQ9Ik0zOTcuODcyLDE2Mi40NzFjLTYuNTEzLDIuODg5LTEzLjI3MSw1LjE2Ny0yMC4yMDgsNi44MTVjNy42NDQtNy4yNjEsMTMuMzktMTYuMzQ2LDE2LjYzMS0yNi40ODRjMC45MjYtMi44OTMtMi4yMTktNS4zOTgtNC44MzItMy44NDhjLTkuNjUsNS43MjUtMjAuMDQ0LDEwLjAxNi0zMC44OTQsMTIuNzYyYy0wLjYyOCwwLjE2LTEuMjc2LDAuMjQtMS45MjksMC4yNGMtMS45NzksMC0zLjg5Ni0wLjczMy01LjQxMS0yLjA2NWMtMTEuNTQyLTEwLjE3NC0yNi4zOS0xNS43NzctNDEuODA1LTE1Ljc3N2MtNi42NzIsMC0xMy40MDUsMS4wNC0yMC4wMTYsMy4wOTFjLTIwLjQ4Nyw2LjM1My0zNi4yOTUsMjMuMjU0LTQxLjI1Nyw0NC4xMDNjLTEuODYsNy44MTgtMi4zNjIsMTUuNjQ4LTEuNDk2LDIzLjI2NGMwLjA5NywwLjg3Ni0wLjMxNCwxLjQ4Ni0wLjU2OSwxLjc3MmMtMC40NSwwLjUwMi0xLjA4NCwwLjc5MS0xLjc0NSwwLjc5MWMtMC4wNzIsMC0wLjE1LTAuMDAzLTAuMjI0LTAuMDFjLTQ0Ljg0Ni00LjE2OC04NS4yODctMjUuNzcyLTExMy44NjktNjAuODM3Yy0xLjQ1NS0xLjc4OS00LjI1My0xLjU2OS01LjQxNSwwLjQyMmMtNS41OTYsOS42MDYtOC41NTQsMjAuNTg5LTguNTU0LDMxLjc2NmMwLDE3LjEyNyw2Ljg4NCwzMy4yNywxOC44MzcsNDUuMDM5Yy01LjAyNy0xLjE5My05Ljg5My0zLjA3LTE0LjQxNC01LjU4MmMtMi4xODgtMS4yMTQtNC44NzcsMC4zNS00LjkwOCwyLjg1MWMtMC4zMSwyNS40NDUsMTQuNTg4LDQ4LjA4NywzNi45MDUsNTguMjgyYy0wLjQ1LDAuMDEtMC45LDAuMDE0LTEuMzUsMC4wMTRjLTMuNTM3LDAtNy4xMjEtMC4zMzgtMTAuNjQ1LTEuMDE1Yy0yLjQ2My0wLjQ2Ny00LjUzMiwxLjg2Ny0zLjc2OCw0LjI1M2M3LjI0NiwyMi42MTgsMjYuNzE3LDM5LjI4OCw1MC4wMjEsNDMuMDdjLTE5LjMzOSwxMi45ODMtNDEuODYzLDE5LjgzLTY1LjMwMiwxOS44M2wtNy4zMDYtMC4wMDNjLTIuMjU1LDAtNC4xNiwxLjQ2OS00LjczLDMuNjVjLTAuNTY1LDIuMTQ1LDAuNDc0LDQuNDEzLDIuMzk2LDUuNTNjMjYuNDEyLDE1LjM3Miw1Ni41NDEsMjMuNDk1LDg3LjEzOCwyMy40OTVjMjYuNzg0LDAsNTEuODM4LTUuMzEzLDc0LjQ2Ni0xNS43OThjMjAuNzQ1LTkuNjA5LDM5LjA3Ni0yMy4zNDUsNTQuNDg2LTQwLjgyN2MxNC4zNTctMTYuMjg2LDI1LjU4MS0zNS4wODUsMzMuMzY1LTU1Ljg3OWM3LjQxOC0xOS44MTYsMTEuMzQtNDAuOTY3LDExLjM0LTYxLjE1NHYtMC45NjRjMC0zLjI0MSwxLjQ2NS02LjI5MSw0LjAyNC04LjM3YzkuNzA2LTcuODgyLDE4LjE2LTE3LjE1OCwyNS4xMjItMjcuNTcyQzQwMy43OTYsMTY0LjU3OCw0MDAuODk2LDE2MS4xMywzOTcuODcyLDE2Mi40NzFMMzk3Ljg3MiwxNjIuNDcxeiIvPjxwYXRoIHN0eWxlPSJmaWxsOiNEMUQxRDE7IiBkPSJNMzk3Ljg3MiwxNjIuNDcxYy02LjUxNSwyLjg4OS0xMy4yNzEsNS4xNjctMjAuMjA4LDYuODE1YzcuNjQ0LTcuMjYxLDEzLjM5LTE2LjM0NiwxNi42MzItMjYuNDg0YzAuOTI2LTIuODkzLTIuMjE5LTUuMzk4LTQuODMyLTMuODQ4Yy05LjY1LDUuNzI1LTIwLjA0NCwxMC4wMTYtMzAuODk0LDEyLjc2MmMtMC42MjgsMC4xNi0xLjI3NiwwLjI0LTEuOTI5LDAuMjRjLTEuOTc5LDAtMy44OTYtMC43MzMtNS40MTEtMi4wNjVjLTExLjU0Mi0xMC4xNzQtMjYuMzktMTUuNzc3LTQxLjgwNS0xNS43NzdjLTYuNjcxLDAtMTMuNDA1LDEuMDQtMjAuMDE2LDMuMDkxYy0xNC4zMjIsNC40NDEtMjYuMzQzLDE0LjA0OC0zMy45ODUsMjYuNTQ2djIwNS40NzdjNi4yMjItMi4wMjksMTIuMjkzLTQuNDAzLDE4LjE5OC03LjEzOWMyMC43NDUtOS42MDksMzkuMDc2LTIzLjM0NSw1NC40ODYtNDAuODI3YzE0LjM1Ny0xNi4yODcsMjUuNTgxLTM1LjA4NSwzMy4zNjUtNTUuODc5YzcuNDE4LTE5LjgxNiwxMS4zNC00MC45NjcsMTEuMzQtNjEuMTU0di0wLjk2NGMwLTMuMjQxLDEuNDY1LTYuMjkxLDQuMDI0LTguMzdjOS43MDYtNy44ODIsMTguMTYtMTcuMTU4LDI1LjEyMi0yNy41NzJDNDAzLjc5NiwxNjQuNTc4LDQwMC44OTYsMTYxLjEzLDM5Ny44NzIsMTYyLjQ3MXoiLz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48L3N2Zz4=');\r\n}\r\n\r\n.social-icon gplus {\r\n    background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PGNpcmNsZSBzdHlsZT0iZmlsbDojQ0Y0QzNDOyIgY3g9IjI1NiIgY3k9IjI1NiIgcj0iMjU2Ii8+PHBhdGggc3R5bGU9ImZpbGw6I0FEMzIyODsiIGQ9Ik0zNzIuOTcsMjE1LjUwOWwtMzYuNTIxLDQzLjkzOWwtNjguNzYzLTcxLjUxOGgtOTUuMDA4bC0zOC40NTMsNDEuNjM3djg5LjkxMkwzMTguODUsNTA0LjIxN2M4My41OTQtMjEuMTAyLDE1MC44MTYtODMuMzE4LDE3OC45MTYtMTYzLjg4N0wzNzIuOTcsMjE1LjUwOXoiLz48cGF0aCBzdHlsZT0iZmlsbDojRkZGRkZGOyIgZD0iTTIxMi4yODksMjc1LjM0NGg0NS43ODljLTguMDM3LDIyLjcyMS0yOS44MDYsMzkuMDEyLTU1LjI4NywzOC44MjZjLTMwLjkyLTAuMjI4LTU2LjQ5MS0yNC45NjQtNTcuNjg5LTU1Ljg2M2MtMS4yODYtMzMuMTIsMjUuMjg1LTYwLjQ3OCw1OC4xMjMtNjAuNDc4YzE1LjAxNywwLDI4LjcyLDUuNzIzLDM5LjA1LDE1LjA5OGMyLjQ0OCwyLjIyLDYuMTcsMi4yMzYsOC41NzgtMC4wMzFsMTYuODE4LTE1LjgyNWMyLjYzMS0yLjQ3NiwyLjYzOS02LjY1OCwwLjAxNi05LjE0Yy0xNi4zODItMTUuNTI0LTM4LjM1OS0yNS4xOTgtNjIuNTk1LTI1LjY2OWMtNTEuNjktMS4wMTItOTUuMjYxLDQxLjM3LTk1LjYyLDkzLjA3Yy0wLjM2NSw1Mi4wOSw0MS43NSw5NC40MjksOTMuNzUzLDk0LjQyOWM1MC4wMTQsMCw5MC44NjktMzkuMTU5LDkzLjYwNS04OC40ODVjMC4wNzItMC42MTksMC4xMjEtMjEuNTIsMC4xMjEtMjEuNTJIMjEyLjI5Yy0zLjQ3LDAtNi4yODIsMi44MTMtNi4yODIsNi4yODJ2MjMuMDI0QzIwNi4wMDcsMjcyLjUzMSwyMDguODIsMjc1LjM0NCwyMTIuMjg5LDI3NS4zNDRMMjEyLjI4OSwyNzUuMzQ0eiIvPjxwYXRoIHN0eWxlPSJmaWxsOiNEMUQxRDE7IiBkPSJNMzc0LjUzMSwyNDEuODQ3VjIxOS4zNWMwLTMuMDQxLTIuNDYzLTUuNTA0LTUuNTA0LTUuNTA0aC0xOC45MzRjLTMuMDQxLDAtNS41MDYsMi40NjMtNS41MDYsNS41MDR2MjIuNDk3aC0yMi40OTJjLTMuMDQxLDAtNS41MSwyLjQ2My01LjUxLDUuNTA2djE4LjkzMmMwLDMuMDM5LDIuNDY3LDUuNTA2LDUuNTEsNS41MDZoMjIuNDkydjIyLjQ5NGMwLDMuMDQxLDIuNDYzLDUuNTA2LDUuNTA2LDUuNTA2aDE4LjkzNGMzLjA0MSwwLDUuNTA0LTIuNDY1LDUuNTA0LTUuNTA2di0yMi40OTRoMjIuNDk3YzMuMDM5LDAsNS41MDYtMi40NjcsNS41MDYtNS41MDZ2LTE4LjkzMmMwLTMuMDQxLTIuNDY3LTUuNTA2LTUuNTA2LTUuNTA2SDM3NC41MzF6Ii8+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PC9zdmc+');\r\n}\r\n\r\n.social-icon linkedin {}\r\n\r\n.social-icon instagram {\r\n    background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PGNpcmNsZSBzdHlsZT0iZmlsbDojNkMyN0IzOyIgY3g9IjI1NiIgY3k9IjI1NiIgcj0iMjU2Ii8+PHBhdGggc3R5bGU9ImZpbGw6IzUwMUE5NjsiIGQ9Ik0zNzQuNzEsMTMyLjkyMmMtMzAuNTg3LDMuODcyLTYyLjQ3OSwzLjczNy05NC41NzUsMC42ODFjLTQ0LjgyMi0zLjQ0OC0xMTAuMzMtMjQuMTM1LTEzNC40NjUsMTcuMjM5Yy0zOC43NzIsNjYuMjM2LTE5LjY0OSwxNTEuMDM1LTEwLjYxNCwyMjYuMDc4bDEzNC43MzcsMTM0LjcwOGMxMzAuMzg4LTYuOTIzLDIzNC44ODYtMTExLjQwNywyNDEuODMxLTI0MS43OUwzNzQuNzEsMTMyLjkyMnoiLz48Zz48cGF0aCBzdHlsZT0iZmlsbDojRkZGRkZGOyIgZD0iTTMxNS4yMjcsMTA5LjQ2OEgxOTYuNzcyYy00OC4xNCwwLTg3LjMwNCwzOS4xNjQtODcuMzA0LDg3LjMwNHYxMTguNDU1YzAsNDguMTM4LDM5LjE2NCw4Ny4zMDUsODcuMzA1LDg3LjMwNWgxMTguNDU1YzQ4LjEzOCwwLDg3LjMwNS0zOS4xNjUsODcuMzA1LTg3LjMwNVYxOTYuNzcyQzQwMi41MzIsMTQ4LjYzMiwzNjMuMzY3LDEwOS40NjgsMzE1LjIyNywxMDkuNDY4TDMxNS4yMjcsMTA5LjQ2OHogTTM3My4wNSwzMTUuMjI4YzAsMzEuOTM0LTI1Ljg4OCw1Ny44MjItNTcuODIyLDU3LjgyMkgxOTYuNzczYy0zMS45MzQsMC01Ny44MjItMjUuODg4LTU3LjgyMi01Ny44MjJWMTk2Ljc3M2MwLTMxLjkzNCwyNS44ODgtNTcuODIzLDU3LjgyMi01Ny44MjNoMTE4LjQ1NWMzMS45MzQsMCw1Ny44MjIsMjUuODksNTcuODIyLDU3LjgyM1YzMTUuMjI4eiIvPjxwYXRoIHN0eWxlPSJmaWxsOiNGRkZGRkY7IiBkPSJNMjU2LDE4MC4yMDJjLTQxLjc5NCwwLTc1Ljc5OCwzNC4wMDQtNzUuNzk4LDc1Ljc5OGMwLDQxLjc5MSwzNC4wMDQsNzUuNzk1LDc1Ljc5OCw3NS43OTVzNzUuNzk1LTM0LjAwMSw3NS43OTUtNzUuNzk1UzI5Ny43OTQsMTgwLjIwMiwyNTYsMTgwLjIwMkwyNTYsMTgwLjIwMnogTTI1NiwzMDIuMzEzYy0yNS41NzksMC00Ni4zMTYtMjAuNzMzLTQ2LjMxNi00Ni4zMTNzMjAuNzM3LTQ2LjMxNiw0Ni4zMTYtNDYuMzE2czQ2LjMxMywyMC43MzUsNDYuMzEzLDQ2LjMxNkMzMDIuMzEzLDI4MS41NzksMjgxLjU3OSwzMDIuMzEzLDI1NiwzMDIuMzEzTDI1NiwzMDIuMzEzeiIvPjwvZz48Zz48cGF0aCBzdHlsZT0iZmlsbDojRDFEMUQxOyIgZD0iTTM1MC4xMDMsMTgwLjc3NGMwLDEwLjAzLTguMTMyLDE4LjE2My0xOC4xNjMsMTguMTYzYy0xMC4wMywwLTE4LjE2My04LjEzMy0xOC4xNjMtMTguMTYzYzAtMTAuMDMxLDguMTMzLTE4LjE2MywxOC4xNjMtMTguMTYzQzM0MS45NzMsMTYyLjYxMSwzNTAuMTAzLDE3MC43NDEsMzUwLjEwMywxODAuNzc0TDM1MC4xMDMsMTgwLjc3NHoiLz48cGF0aCBzdHlsZT0iZmlsbDojRDFEMUQxOyIgZD0iTTMxNS4yMjgsMTA5LjQ2OGgtNTkuODAydjI5LjQ4Mmg1OS44MDJjMzEuOTM0LDAsNTcuODIyLDI1Ljg5LDU3LjgyMiw1Ny44MjN2MTE4LjQ1NWMwLDMxLjkzNC0yNS44ODgsNTcuODIyLTU3LjgyMiw1Ny44MjJoLTU5LjgwMnYyOS40ODJoNTkuODAyYzQ4LjEzOCwwLDg3LjMwNC0zOS4xNjUsODcuMzA0LTg3LjMwNVYxOTYuNzcyQzQwMi41MzIsMTQ4LjYzMiwzNjMuMzY3LDEwOS40NjgsMzE1LjIyOCwxMDkuNDY4eiIvPjxwYXRoIHN0eWxlPSJmaWxsOiNEMUQxRDE7IiBkPSJNMjU2LDE4MC4yMDJjLTAuMTkzLDAtMC4zODEsMC4wMTQtMC41NzQsMC4wMTR2MjkuNDgyYzAuMTkxLTAuMDAyLDAuMzgxLTAuMDE0LDAuNTc0LTAuMDE0YzI1LjU3OSwwLDQ2LjMxMywyMC43MzUsNDYuMzEzLDQ2LjMxNmMwLDI1LjU3OS0yMC43MzMsNDYuMzEzLTQ2LjMxMyw0Ni4zMTNjLTAuMTkzLDAtMC4zODMtMC4wMTItMC41NzQtMC4wMTR2MjkuNDgyYzAuMTkzLDAuMDAyLDAuMzgxLDAuMDE0LDAuNTc0LDAuMDE0YzQxLjc5NCwwLDc1Ljc5NS0zNC4wMDIsNzUuNzk1LTc1Ljc5NUMzMzEuNzk1LDIxNC4yMDYsMjk3Ljc5NCwxODAuMjAyLDI1NiwxODAuMjAyeiIvPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48L3N2Zz4=');\r\n}*/\r\n\r\n/* Media-Queries */\r\n\r\n@media screen and (max-width: 1199px) {\r\n    .social-icon {\r\n        height: 40px;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 991px) {\r\n    .social-icon {\r\n        width: 6vw;\r\n        height: 6vw;\r\n    }\r\n    .profile-header-icons {\r\n        width: 50%;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 767px) {\r\n    .social-icon {\r\n        width: 8vw;\r\n        height: 8vw;\r\n    }\r\n    .profile-header-icons {\r\n        width: 60%;\r\n    }\r\n    .profile-name {\r\n        font-size: 8vw;\r\n    }\r\n    .profile-name-intro {\r\n        font-size: 4vw;\r\n    }\r\n}\r\n\r\n.avatar {\r\n    margin-bottom: 2em;\r\n}\r\n\r\n#search-history-container {\r\n    padding-top: 3em;\r\n    background-color: #fff;\r\n    min-height: calc(100vh - 520px);\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"profile-wrapper\" *ngIf=\"user\">\r\n    <!-- <h2 class=\"page-header\">Hello {{user.name}}</h2>\r\n    <ul class=\"list-group\">\r\n        <li class=\"list-group-item\">Username: {{user.username}}</li>\r\n        <li class=\"list-group-item\">Email: {{user.email}}</li>\r\n    </ul> -->\r\n    <div id=\"profile-container\" class=\"container-fluid\">\r\n        <div class=\"container\">\r\n            <div class=\"row profile-header\">\r\n                <div class=\"col-md-12 profile-info\">\r\n                    <avatar class=\"avatar\" [size]=\"200\" [email]=\"user.name\" [displayType]=\"'circle'\"></avatar>\r\n                    <h5 class=\"profile-name-intro\">Hi, my name is</h5>\r\n                    <h2 class=\"profile-name\">{{user.name.toUpperCase()}}</h2>\r\n                    <div class=\"profile-header-icons\">\r\n                        <div class=\"social-icon facebook\"><img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA1MTIuMDAyIDUxMi4wMDIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMi4wMDIgNTEyLjAwMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxjaXJjbGUgc3R5bGU9ImZpbGw6IzRFNTk4RjsiIGN4PSIyNTYuMDAxIiBjeT0iMjU2IiByPSIyNTYiLz48cGF0aCBzdHlsZT0iZmlsbDojMzY0MjcwOyIgZD0iTTUxMS41OTYsMjQxLjdMMzkxLjAxOSwxMjEuMDg1Yy0xLjk5OCwwLjYwNS02Ljk4Mi0xLjcxNC05LjE3My0xLjI3NGMtNTEuNzE3LDguNjItMTAxLjcxLDAtMTUxLjcwNCwxMy43OTFjLTI0LjEzNSw2Ljg5Ni0yNS44NTksMzYuMjAyLTM0LjQ3OCw1NS4xNjVjLTEyLjA2NywzNC40NzgtMTAuMzQzLDcyLjQwNC0yNS44NTksMTA1LjE1OGMtMTAuMzQzLDIyLjQxMS0zNC40NzgsMzYuMjAyLTQzLjA5OCw2Mi4wNjFjLTIuODc1LDEwLjc4NS0yLjcwNSwyNC4zNzktNS45NTYsMzQuNjlsMTIwLjk4LDEyMC45MjJjNC43MjUsMC4yNiw5LjQ4LDAuNDAzLDE0LjI2OSwwLjQwM2MxNDEuMzg0LDAsMjU2LTExNC42MTYsMjU2LTI1NkM1MTIuMDAxLDI1MS4yMDEsNTExLjg1OCwyNDYuNDM0LDUxMS41OTYsMjQxLjd6Ii8+PGc+PHBhdGggc3R5bGU9ImZpbGw6I0ZGRkZGRjsiIGQ9Ik0zNjMuMDQzLDEwOS40NjZIMTQ4Ljk1OGMtMjEuODA5LDAtMzkuNDksMTcuNjgtMzkuNDksMzkuNDl2MjE0LjA4NWMwLDIxLjgxMSwxNy42OCwzOS40OSwzOS40OSwzOS40OWgxMDUuNTg0bDAuMTgzLTEwNC43MjJoLTI3LjIxYy0zLjUzNiwwLTYuNDA2LTIuODYtNi40MTgtNi4zOTZsLTAuMTMzLTMzLjc1OWMtMC4wMTQtMy41NTMsMi44NjctNi40NDQsNi40Mi02LjQ0NGgyNy4xNjJ2LTMyLjYxOGMwLTM3Ljg1MiwyMy4xMTgtNTguNDYzLDU2Ljg4NC01OC40NjNoMjcuNzFjMy41NDMsMCw2LjQyLDIuODc0LDYuNDIsNi40MnYyOC40NjNjMCwzLjU0Ni0yLjg3NCw2LjQyLTYuNDE2LDYuNDJsLTE3LjAwNiwwLjAxYy0xOC4zNjMsMC0yMS45MjEsOC43MjUtMjEuOTIxLDIxLjUzM3YyOC4yMzloNDAuMzUxYzMuODQ4LDAsNi44MywzLjM1OCw2LjM3NSw3LjE3M2wtNC4wMDEsMzMuNzU5Yy0wLjM4MSwzLjIzMi0zLjEyMiw1LjY2NS02LjM3NSw1LjY2NWgtMzYuMTY4bC0wLjE4MywxMDQuNzI2aDYyLjgyNmMyMS44MDksMCwzOS40OS0xNy42ODIsMzkuNDktMzkuNDkxdi0yMTQuMDlDNDAyLjUzMywxMjcuMTQ3LDM4NC44NTIsMTA5LjQ2NiwzNjMuMDQzLDEwOS40NjZMMzYzLjA0MywxMDkuNDY2eiIvPjxwb2x5Z29uIHN0eWxlPSJmaWxsOiNGRkZGRkY7IiBwb2ludHM9IjI1NC41NDIsNDAyLjUzIDI1NC43MjUsMjk3LjgwOCAyNTQuMjc3LDI5Ny44MDggMjU0LjI3Nyw0MDIuNTMgIi8+PC9nPjxwYXRoIHN0eWxlPSJmaWxsOiNEMUQxRDE7IiBkPSJNMzYzLjA0MywxMDkuNDY2SDI1NC4yNzd2MTQxLjc0MWgwLjI2OVYyMTguNTljMC0zNy44NTIsMjMuMTE4LTU4LjQ2Myw1Ni44ODQtNTguNDYzaDI3LjcxYzMuNTQzLDAsNi40MiwyLjg3NCw2LjQyLDYuNDJ2MjguNDYzYzAsMy41NDYtMi44NzQsNi40Mi02LjQxNiw2LjQybC0xNy4wMDYsMC4wMWMtMTguMzYzLDAtMjEuOTIxLDguNzI1LTIxLjkyMSwyMS41MzN2MjguMjM4aDQwLjM1MWMzLjg0OCwwLDYuODMsMy4zNTgsNi4zNzUsNy4xNzNsLTQuMDAxLDMzLjc1OWMtMC4zODEsMy4yMzItMy4xMjIsNS42NjUtNi4zNzUsNS42NjVoLTM2LjE2OGwtMC4xODMsMTA0LjcyNmg2Mi44MjZjMjEuODA5LDAsMzkuNDktMTcuNjgyLDM5LjQ5LTM5LjQ5MVYxNDguOTU2QzQwMi41MzMsMTI3LjE0NywzODQuODUyLDEwOS40NjYsMzYzLjA0MywxMDkuNDY2eiIvPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjwvc3ZnPg==\"></div>\r\n                        <div class=\"social-icon twitter\"><img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PGNpcmNsZSBzdHlsZT0iZmlsbDojNjVBMkQ5OyIgY3g9IjI1NiIgY3k9IjI1NiIgcj0iMjU2Ii8+PHBhdGggc3R5bGU9ImZpbGw6IzNBN0NBNTsiIGQ9Ik0zOTMuMDE0LDEzOS4zMjZjLTI2LjcwMywyMy4xNjktNTMuMjUzLDQzLjQ3NS03NC45NTQsNzEuODUyYy01My4zODEsNjQuMzcyLTExOC42MTMsMTU1LjctMjA3LjM4NiwxNDIuMDg2bDE1OC42MSwxNTguMzk2YzEzNC40NTYtNi44NzMsMjQxLjQ5Ny0xMTcuNDkzLDI0Mi42ODYtMjUzLjM3NkwzOTMuMDE0LDEzOS4zMjZ6Ii8+PHBhdGggc3R5bGU9ImZpbGw6I0ZGRkZGRjsiIGQ9Ik0zOTcuODcyLDE2Mi40NzFjLTYuNTEzLDIuODg5LTEzLjI3MSw1LjE2Ny0yMC4yMDgsNi44MTVjNy42NDQtNy4yNjEsMTMuMzktMTYuMzQ2LDE2LjYzMS0yNi40ODRjMC45MjYtMi44OTMtMi4yMTktNS4zOTgtNC44MzItMy44NDhjLTkuNjUsNS43MjUtMjAuMDQ0LDEwLjAxNi0zMC44OTQsMTIuNzYyYy0wLjYyOCwwLjE2LTEuMjc2LDAuMjQtMS45MjksMC4yNGMtMS45NzksMC0zLjg5Ni0wLjczMy01LjQxMS0yLjA2NWMtMTEuNTQyLTEwLjE3NC0yNi4zOS0xNS43NzctNDEuODA1LTE1Ljc3N2MtNi42NzIsMC0xMy40MDUsMS4wNC0yMC4wMTYsMy4wOTFjLTIwLjQ4Nyw2LjM1My0zNi4yOTUsMjMuMjU0LTQxLjI1Nyw0NC4xMDNjLTEuODYsNy44MTgtMi4zNjIsMTUuNjQ4LTEuNDk2LDIzLjI2NGMwLjA5NywwLjg3Ni0wLjMxNCwxLjQ4Ni0wLjU2OSwxLjc3MmMtMC40NSwwLjUwMi0xLjA4NCwwLjc5MS0xLjc0NSwwLjc5MWMtMC4wNzIsMC0wLjE1LTAuMDAzLTAuMjI0LTAuMDFjLTQ0Ljg0Ni00LjE2OC04NS4yODctMjUuNzcyLTExMy44NjktNjAuODM3Yy0xLjQ1NS0xLjc4OS00LjI1My0xLjU2OS01LjQxNSwwLjQyMmMtNS41OTYsOS42MDYtOC41NTQsMjAuNTg5LTguNTU0LDMxLjc2NmMwLDE3LjEyNyw2Ljg4NCwzMy4yNywxOC44MzcsNDUuMDM5Yy01LjAyNy0xLjE5My05Ljg5My0zLjA3LTE0LjQxNC01LjU4MmMtMi4xODgtMS4yMTQtNC44NzcsMC4zNS00LjkwOCwyLjg1MWMtMC4zMSwyNS40NDUsMTQuNTg4LDQ4LjA4NywzNi45MDUsNTguMjgyYy0wLjQ1LDAuMDEtMC45LDAuMDE0LTEuMzUsMC4wMTRjLTMuNTM3LDAtNy4xMjEtMC4zMzgtMTAuNjQ1LTEuMDE1Yy0yLjQ2My0wLjQ2Ny00LjUzMiwxLjg2Ny0zLjc2OCw0LjI1M2M3LjI0NiwyMi42MTgsMjYuNzE3LDM5LjI4OCw1MC4wMjEsNDMuMDdjLTE5LjMzOSwxMi45ODMtNDEuODYzLDE5LjgzLTY1LjMwMiwxOS44M2wtNy4zMDYtMC4wMDNjLTIuMjU1LDAtNC4xNiwxLjQ2OS00LjczLDMuNjVjLTAuNTY1LDIuMTQ1LDAuNDc0LDQuNDEzLDIuMzk2LDUuNTNjMjYuNDEyLDE1LjM3Miw1Ni41NDEsMjMuNDk1LDg3LjEzOCwyMy40OTVjMjYuNzg0LDAsNTEuODM4LTUuMzEzLDc0LjQ2Ni0xNS43OThjMjAuNzQ1LTkuNjA5LDM5LjA3Ni0yMy4zNDUsNTQuNDg2LTQwLjgyN2MxNC4zNTctMTYuMjg2LDI1LjU4MS0zNS4wODUsMzMuMzY1LTU1Ljg3OWM3LjQxOC0xOS44MTYsMTEuMzQtNDAuOTY3LDExLjM0LTYxLjE1NHYtMC45NjRjMC0zLjI0MSwxLjQ2NS02LjI5MSw0LjAyNC04LjM3YzkuNzA2LTcuODgyLDE4LjE2LTE3LjE1OCwyNS4xMjItMjcuNTcyQzQwMy43OTYsMTY0LjU3OCw0MDAuODk2LDE2MS4xMywzOTcuODcyLDE2Mi40NzFMMzk3Ljg3MiwxNjIuNDcxeiIvPjxwYXRoIHN0eWxlPSJmaWxsOiNEMUQxRDE7IiBkPSJNMzk3Ljg3MiwxNjIuNDcxYy02LjUxNSwyLjg4OS0xMy4yNzEsNS4xNjctMjAuMjA4LDYuODE1YzcuNjQ0LTcuMjYxLDEzLjM5LTE2LjM0NiwxNi42MzItMjYuNDg0YzAuOTI2LTIuODkzLTIuMjE5LTUuMzk4LTQuODMyLTMuODQ4Yy05LjY1LDUuNzI1LTIwLjA0NCwxMC4wMTYtMzAuODk0LDEyLjc2MmMtMC42MjgsMC4xNi0xLjI3NiwwLjI0LTEuOTI5LDAuMjRjLTEuOTc5LDAtMy44OTYtMC43MzMtNS40MTEtMi4wNjVjLTExLjU0Mi0xMC4xNzQtMjYuMzktMTUuNzc3LTQxLjgwNS0xNS43NzdjLTYuNjcxLDAtMTMuNDA1LDEuMDQtMjAuMDE2LDMuMDkxYy0xNC4zMjIsNC40NDEtMjYuMzQzLDE0LjA0OC0zMy45ODUsMjYuNTQ2djIwNS40NzdjNi4yMjItMi4wMjksMTIuMjkzLTQuNDAzLDE4LjE5OC03LjEzOWMyMC43NDUtOS42MDksMzkuMDc2LTIzLjM0NSw1NC40ODYtNDAuODI3YzE0LjM1Ny0xNi4yODcsMjUuNTgxLTM1LjA4NSwzMy4zNjUtNTUuODc5YzcuNDE4LTE5LjgxNiwxMS4zNC00MC45NjcsMTEuMzQtNjEuMTU0di0wLjk2NGMwLTMuMjQxLDEuNDY1LTYuMjkxLDQuMDI0LTguMzdjOS43MDYtNy44ODIsMTguMTYtMTcuMTU4LDI1LjEyMi0yNy41NzJDNDAzLjc5NiwxNjQuNTc4LDQwMC44OTYsMTYxLjEzLDM5Ny44NzIsMTYyLjQ3MXoiLz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48L3N2Zz4=\"></div>\r\n                        <div class=\"social-icon g-plus\"><img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PGNpcmNsZSBzdHlsZT0iZmlsbDojQ0Y0QzNDOyIgY3g9IjI1NiIgY3k9IjI1NiIgcj0iMjU2Ii8+PHBhdGggc3R5bGU9ImZpbGw6I0FEMzIyODsiIGQ9Ik0zNzIuOTcsMjE1LjUwOWwtMzYuNTIxLDQzLjkzOWwtNjguNzYzLTcxLjUxOGgtOTUuMDA4bC0zOC40NTMsNDEuNjM3djg5LjkxMkwzMTguODUsNTA0LjIxN2M4My41OTQtMjEuMTAyLDE1MC44MTYtODMuMzE4LDE3OC45MTYtMTYzLjg4N0wzNzIuOTcsMjE1LjUwOXoiLz48cGF0aCBzdHlsZT0iZmlsbDojRkZGRkZGOyIgZD0iTTIxMi4yODksMjc1LjM0NGg0NS43ODljLTguMDM3LDIyLjcyMS0yOS44MDYsMzkuMDEyLTU1LjI4NywzOC44MjZjLTMwLjkyLTAuMjI4LTU2LjQ5MS0yNC45NjQtNTcuNjg5LTU1Ljg2M2MtMS4yODYtMzMuMTIsMjUuMjg1LTYwLjQ3OCw1OC4xMjMtNjAuNDc4YzE1LjAxNywwLDI4LjcyLDUuNzIzLDM5LjA1LDE1LjA5OGMyLjQ0OCwyLjIyLDYuMTcsMi4yMzYsOC41NzgtMC4wMzFsMTYuODE4LTE1LjgyNWMyLjYzMS0yLjQ3NiwyLjYzOS02LjY1OCwwLjAxNi05LjE0Yy0xNi4zODItMTUuNTI0LTM4LjM1OS0yNS4xOTgtNjIuNTk1LTI1LjY2OWMtNTEuNjktMS4wMTItOTUuMjYxLDQxLjM3LTk1LjYyLDkzLjA3Yy0wLjM2NSw1Mi4wOSw0MS43NSw5NC40MjksOTMuNzUzLDk0LjQyOWM1MC4wMTQsMCw5MC44NjktMzkuMTU5LDkzLjYwNS04OC40ODVjMC4wNzItMC42MTksMC4xMjEtMjEuNTIsMC4xMjEtMjEuNTJIMjEyLjI5Yy0zLjQ3LDAtNi4yODIsMi44MTMtNi4yODIsNi4yODJ2MjMuMDI0QzIwNi4wMDcsMjcyLjUzMSwyMDguODIsMjc1LjM0NCwyMTIuMjg5LDI3NS4zNDRMMjEyLjI4OSwyNzUuMzQ0eiIvPjxwYXRoIHN0eWxlPSJmaWxsOiNEMUQxRDE7IiBkPSJNMzc0LjUzMSwyNDEuODQ3VjIxOS4zNWMwLTMuMDQxLTIuNDYzLTUuNTA0LTUuNTA0LTUuNTA0aC0xOC45MzRjLTMuMDQxLDAtNS41MDYsMi40NjMtNS41MDYsNS41MDR2MjIuNDk3aC0yMi40OTJjLTMuMDQxLDAtNS41MSwyLjQ2My01LjUxLDUuNTA2djE4LjkzMmMwLDMuMDM5LDIuNDY3LDUuNTA2LDUuNTEsNS41MDZoMjIuNDkydjIyLjQ5NGMwLDMuMDQxLDIuNDYzLDUuNTA2LDUuNTA2LDUuNTA2aDE4LjkzNGMzLjA0MSwwLDUuNTA0LTIuNDY1LDUuNTA0LTUuNTA2di0yMi40OTRoMjIuNDk3YzMuMDM5LDAsNS41MDYtMi40NjcsNS41MDYtNS41MDZ2LTE4LjkzMmMwLTMuMDQxLTIuNDY3LTUuNTA2LTUuNTA2LTUuNTA2SDM3NC41MzF6Ii8+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PC9zdmc+\"></div>\r\n                        <!--<div class=\"social-icon linkedin\"></div> -->\r\n                        <div class=\"social-icon instagram\"><img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PGNpcmNsZSBzdHlsZT0iZmlsbDojNkMyN0IzOyIgY3g9IjI1NiIgY3k9IjI1NiIgcj0iMjU2Ii8+PHBhdGggc3R5bGU9ImZpbGw6IzUwMUE5NjsiIGQ9Ik0zNzQuNzEsMTMyLjkyMmMtMzAuNTg3LDMuODcyLTYyLjQ3OSwzLjczNy05NC41NzUsMC42ODFjLTQ0LjgyMi0zLjQ0OC0xMTAuMzMtMjQuMTM1LTEzNC40NjUsMTcuMjM5Yy0zOC43NzIsNjYuMjM2LTE5LjY0OSwxNTEuMDM1LTEwLjYxNCwyMjYuMDc4bDEzNC43MzcsMTM0LjcwOGMxMzAuMzg4LTYuOTIzLDIzNC44ODYtMTExLjQwNywyNDEuODMxLTI0MS43OUwzNzQuNzEsMTMyLjkyMnoiLz48Zz48cGF0aCBzdHlsZT0iZmlsbDojRkZGRkZGOyIgZD0iTTMxNS4yMjcsMTA5LjQ2OEgxOTYuNzcyYy00OC4xNCwwLTg3LjMwNCwzOS4xNjQtODcuMzA0LDg3LjMwNHYxMTguNDU1YzAsNDguMTM4LDM5LjE2NCw4Ny4zMDUsODcuMzA1LDg3LjMwNWgxMTguNDU1YzQ4LjEzOCwwLDg3LjMwNS0zOS4xNjUsODcuMzA1LTg3LjMwNVYxOTYuNzcyQzQwMi41MzIsMTQ4LjYzMiwzNjMuMzY3LDEwOS40NjgsMzE1LjIyNywxMDkuNDY4TDMxNS4yMjcsMTA5LjQ2OHogTTM3My4wNSwzMTUuMjI4YzAsMzEuOTM0LTI1Ljg4OCw1Ny44MjItNTcuODIyLDU3LjgyMkgxOTYuNzczYy0zMS45MzQsMC01Ny44MjItMjUuODg4LTU3LjgyMi01Ny44MjJWMTk2Ljc3M2MwLTMxLjkzNCwyNS44ODgtNTcuODIzLDU3LjgyMi01Ny44MjNoMTE4LjQ1NWMzMS45MzQsMCw1Ny44MjIsMjUuODksNTcuODIyLDU3LjgyM1YzMTUuMjI4eiIvPjxwYXRoIHN0eWxlPSJmaWxsOiNGRkZGRkY7IiBkPSJNMjU2LDE4MC4yMDJjLTQxLjc5NCwwLTc1Ljc5OCwzNC4wMDQtNzUuNzk4LDc1Ljc5OGMwLDQxLjc5MSwzNC4wMDQsNzUuNzk1LDc1Ljc5OCw3NS43OTVzNzUuNzk1LTM0LjAwMSw3NS43OTUtNzUuNzk1UzI5Ny43OTQsMTgwLjIwMiwyNTYsMTgwLjIwMkwyNTYsMTgwLjIwMnogTTI1NiwzMDIuMzEzYy0yNS41NzksMC00Ni4zMTYtMjAuNzMzLTQ2LjMxNi00Ni4zMTNzMjAuNzM3LTQ2LjMxNiw0Ni4zMTYtNDYuMzE2czQ2LjMxMywyMC43MzUsNDYuMzEzLDQ2LjMxNkMzMDIuMzEzLDI4MS41NzksMjgxLjU3OSwzMDIuMzEzLDI1NiwzMDIuMzEzTDI1NiwzMDIuMzEzeiIvPjwvZz48Zz48cGF0aCBzdHlsZT0iZmlsbDojRDFEMUQxOyIgZD0iTTM1MC4xMDMsMTgwLjc3NGMwLDEwLjAzLTguMTMyLDE4LjE2My0xOC4xNjMsMTguMTYzYy0xMC4wMywwLTE4LjE2My04LjEzMy0xOC4xNjMtMTguMTYzYzAtMTAuMDMxLDguMTMzLTE4LjE2MywxOC4xNjMtMTguMTYzQzM0MS45NzMsMTYyLjYxMSwzNTAuMTAzLDE3MC43NDEsMzUwLjEwMywxODAuNzc0TDM1MC4xMDMsMTgwLjc3NHoiLz48cGF0aCBzdHlsZT0iZmlsbDojRDFEMUQxOyIgZD0iTTMxNS4yMjgsMTA5LjQ2OGgtNTkuODAydjI5LjQ4Mmg1OS44MDJjMzEuOTM0LDAsNTcuODIyLDI1Ljg5LDU3LjgyMiw1Ny44MjN2MTE4LjQ1NWMwLDMxLjkzNC0yNS44ODgsNTcuODIyLTU3LjgyMiw1Ny44MjJoLTU5LjgwMnYyOS40ODJoNTkuODAyYzQ4LjEzOCwwLDg3LjMwNC0zOS4xNjUsODcuMzA0LTg3LjMwNVYxOTYuNzcyQzQwMi41MzIsMTQ4LjYzMiwzNjMuMzY3LDEwOS40NjgsMzE1LjIyOCwxMDkuNDY4eiIvPjxwYXRoIHN0eWxlPSJmaWxsOiNEMUQxRDE7IiBkPSJNMjU2LDE4MC4yMDJjLTAuMTkzLDAtMC4zODEsMC4wMTQtMC41NzQsMC4wMTR2MjkuNDgyYzAuMTkxLTAuMDAyLDAuMzgxLTAuMDE0LDAuNTc0LTAuMDE0YzI1LjU3OSwwLDQ2LjMxMywyMC43MzUsNDYuMzEzLDQ2LjMxNmMwLDI1LjU3OS0yMC43MzMsNDYuMzEzLTQ2LjMxMyw0Ni4zMTNjLTAuMTkzLDAtMC4zODMtMC4wMTItMC41NzQtMC4wMTR2MjkuNDgyYzAuMTkzLDAuMDAyLDAuMzgxLDAuMDE0LDAuNTc0LDAuMDE0YzQxLjc5NCwwLDc1Ljc5NS0zNC4wMDIsNzUuNzk1LTc1Ljc5NUMzMzEuNzk1LDIxNC4yMDYsMjk3Ljc5NCwxODAuMjAyLDI1NiwxODAuMjAyeiIvPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48L3N2Zz4=\"></div>\r\n                    </div>\r\n                    <!-- /.profile-header-icons -->\r\n                </div>\r\n                <!-- /.col-12.text-center -->\r\n            </div>\r\n            <!-- /.row -->\r\n        </div>\r\n        <!-- /.container -->\r\n    </div>\r\n    <!-- /.container-fluid -->\r\n\r\n    <div id=\"search-history-container\" class=\"container-fluid\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-8\">\r\n                    <app-edit-profile></app-edit-profile>\r\n                </div>\r\n                <div class=\"col-sm-4\">\r\n                    <app-search-history-list></app-search-history-list>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- /.container -->\r\n    </div>\r\n    <!-- /#search-history-container -->\r\n</div>\r\n<!-- /*ngIf -->\r\n<app-footer></app-footer>"

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = (function () {
    function ProfileComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/components/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], ProfileComponent);

var _a, _b;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "span {\r\n    margin-left: 1em;\r\n}\r\n\r\n.page-header, label, input{ \r\n    color: #333; \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container pt-5\">\r\n  <h2 class=\"page-header\">Register</h2>\r\n  <form (submit)=\"onRegisterSubmit()\">\r\n    <div class=\"form-group\">\r\n      <label>Name</label>\r\n      <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label>Username</label>\r\n      <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label>Email</label>\r\n      <input type=\"text\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label>Password</label>\r\n      <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\" required>\r\n    </div>\r\n    <input type=\"submit\" class=\"btn btn-primary\" value=\"submit\"><span><a href=\"#\" [routerLink]=\"['/login']\">Already have an account?</a></span>\r\n  </form>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(validateService, flashMessage, authService, router) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            name: this.name,
            email: this.email,
            username: this.username,
            password: this.password
        };
        // Require Fields
        if (!this.validateService.validateRegister(user)) {
            this.flashMessage.show('Please fill in all fields', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // Validate Email
        if (!this.validateService.validateEmail(user.email)) {
            this.flashMessage.show('Please use a valid email', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // Register User
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('You are now registered and can log in', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/login']);
            }
            else {
                _this.flashMessage.show('The email or username is taken', { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/register']);
            }
        });
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/components/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === "function" && _d || Object])
], RegisterComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/search-history-list/search-history-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#search-history-list-con{\r\n    background-color: #fff;\r\n}\r\n#search-history-list{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-wrap: wrap;\r\n        flex-wrap: wrap;\r\n}\r\n#search-history-list > a, a:visited, a:focus, a:active, a:hover{\r\n    color: #666666 !important;\r\n    text-decoration: none !important;\r\n}\r\n.search-history-title{\r\n    text-align: center;\r\n    margin: 0 0 1em 0;\r\n    margin-top: 0;\r\n}\r\n.list-group{\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n}\r\n\r\n.list-group-item.history{\r\n    /* width:100%; */\r\n    margin: 0 3.5% 3.5% 0;\r\n    border-radius: 23px;\r\n    padding: 0;\r\n    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);\r\n}\r\n\r\n.list-group-item.history > a > .search-history-item{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    width: 100%;\r\n    margin: 0;\r\n    padding: 0 1em;\r\n}\r\n.list-group-item.history .card-title{\r\n    font-size: 1.25em;\r\n    margin: 0;\r\n}\r\n.search-history-item > button.close{\r\n    padding: 0 1rem;\r\n    width: 15%;\r\n    position: relative;\r\n    font-size: 25px;\r\n    text-align: center;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n}\r\n.search-history-item > button.close:hover{\r\n  cursor: pointer;\r\n}\r\n.search-history-item > button.close > span{\r\n    height: 100%;\r\n}\r\n.row.search-history-item{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    position: relative;\r\n    margin-left: 0;\r\n    margin-right: 0;\r\n    padding: 0 0 0 1em;\r\n    -ms-flex-wrap: nowrap;\r\n        flex-wrap: nowrap;\r\n}\r\n.row.search-history-item > a{\r\n    width: 85%;\r\n    border-right: 1px solid #ccc;\r\n}\r\n.panel-title{\r\n  margin-bottom: .5em !important;\r\n}\r\n\r\n/* .search-history {\r\n    border-left: 1px lightgray solid;\r\n} */", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/search-history-list/search-history-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\r\n  <div class=\"panel-heading\">\r\n    <h3 class=\"panel-title\">Search History</h3>\r\n  </div>\r\n  <div class=\"panel-body\">\r\n    <ul id=\"search-history-list\" class=\"list-group\">\r\n      <li class=\"list-group-item history\" *ngFor=\"let historyResult of historyResults; let i = index\">\r\n        <div class=\"row search-history-item\">\r\n          <a [routerLink]=\"['/search']\">\r\n            <p class=\"card-title\">{{ this.searchService.historyResults[i] }}</p>\r\n          </a>\r\n          <button (click)=\"removeEntry(i)\" type=\"button\" class=\"close\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div> <!-- /.row -->\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/search-history-list/search-history-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchHistoryListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_search_service__ = __webpack_require__("../../../../../src/app/services/search.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchHistoryListComponent = (function () {
    function SearchHistoryListComponent(searchService) {
        this.searchService = searchService;
        this.historyResults = [];
    }
    SearchHistoryListComponent.prototype.ngOnInit = function () {
        this.searchService.getHistoryResults();
        this.historyResults = this.searchService.historyResults;
    };
    SearchHistoryListComponent.prototype.removeEntry = function (search) {
        this.historyResults.splice(search, 1);
        localStorage.setItem('historyResults', JSON.stringify(this.historyResults));
    };
    return SearchHistoryListComponent;
}());
SearchHistoryListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-search-history-list',
        template: __webpack_require__("../../../../../src/app/components/search-history-list/search-history-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/search-history-list/search-history-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_search_service__["a" /* SearchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_search_service__["a" /* SearchService */]) === "function" && _a || Object])
], SearchHistoryListComponent);

var _a;
//# sourceMappingURL=search-history-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/search/search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#search-container {\r\n    min-height: calc(100vh - 64px);\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#03a9f4+0,0288d1+100 */\r\n    /* background: #03a9f4; */\r\n    /* Old browsers */\r\n    /* background: -moz-linear-gradient(top,  #03a9f4 0%, #0288d1 100%); */\r\n    /* FF3.6-15 */\r\n    /* background: -webkit-linear-gradient(top,  #03a9f4 0%,#0288d1 100%); */\r\n    /* Chrome10-25,Safari5.1-6 */\r\n    /* background: linear-gradient(to bottom,  #03a9f4 0%,#0288d1 100%); */\r\n    /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\r\n    /* filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#03a9f4', endColorstr='#0288d1',GradientType=0 ); */\r\n    /* IE6-9 */\r\n}\r\n\r\n\r\n/* Heading Styles */\r\n\r\n#dashboard-search-title {\r\n    color: #333;\r\n    margin: 0;\r\n    padding-top: 1em;\r\n}\r\n\r\n\r\n/* Form Styles */\r\n.form-control{\r\n  border-radius: 0;\r\n}\r\n\r\n.form-control:focus {\r\n    box-shadow: none !important;\r\n}\r\n\r\n.form-control.search-input[type=text]{\r\n  color: #333;\r\n}\r\n.form-control.search-input::-webkit-input-placeholder {\r\n    color: #bdbdbd;\r\n}\r\n.form-control.search-input:-ms-input-placeholder {\r\n    color: #bdbdbd;\r\n}\r\n.form-control.search-input::placeholder {\r\n    color: #bdbdbd;\r\n}\r\n\r\n\r\n/* Button Styles */\r\n\r\n.btn.blue-gradient {\r\n    background: linear-gradient(40deg, #45cafc, #303f9f)!important;\r\n    transition: .5s ease;\r\n}\r\n\r\nbutton.close:hover{\r\n  cursor: pointer;\r\n}\r\n\r\n.btn .fa{\r\n  font-size: 1.2em;\r\n  margin-top: -5px;\r\n}\r\n\r\n/* List-Group Row Styles */\r\n\r\n#search-list-group .row.search-item-top {\r\n    padding: 0 15px;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n}\r\n\r\n\r\n/* List-Item Styles */\r\n.card{\r\n   background-color: transparent;\r\n   box-shadow: none;\r\n}\r\n\r\n.card-title {\r\n    text-transform: lowercase;\r\n}\r\n\r\n.card-text {\r\n    font-size: 1.25em;\r\n    margin: 0 0 .5em 0;\r\n}\r\n\r\n#search-list-group .list-group-item {\r\n    margin-bottom: 1em;\r\n    border-radius: .3rem !important;\r\n    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);\r\n}\r\n\r\n#search-list-group .list-group-item:first-child {\r\n    border-top-right-radius: 0;\r\n    border-top-left-radius: 0;\r\n}\r\n\r\n#search-list-group .list-group-item:last-child {\r\n    margin-bottom: 0;\r\n    border-bottom-right-radius: 0;\r\n    border-bottom-left-radius: 0;\r\n}\r\n\r\n#search-list-group .list-group-item h3 {\r\n    margin-top: 7.5px;\r\n    margin-bottom: 0;\r\n    margin-right: auto;\r\n}\r\n\r\n#search-list-group .list-group-item h5 {\r\n    color: #757575;\r\n}\r\n\r\n#search-list-group .list-group-item hr {\r\n    border-top: 1px solid #BDBDBD !important;\r\n}\r\n\r\n\r\n/* Search-Box Styles */\r\n\r\n.search-box,\r\n.search-list {\r\n    float: none;\r\n    margin: 0 auto;\r\n    display: block;\r\n    margin-top: 3em;\r\n}\r\n\r\n\r\n/* Media Queries */\r\n\r\n@media (max-width: 768px) {\r\n    h1.search-title {\r\n        font-size: 7vw;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"search-container\" class=\"container\">\r\n    <form (submit)=\"onSubmit($event)\">\r\n        <h2 id=\"dashboard-search-title\" class=\"search-title text-center\">Search Syntax Definitions</h2>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-6 search-box offset-md-4\">\r\n                <div class=\"input-group input-group-lg\">\r\n                    <input type=\"text\" class=\"form-control search-input\" autocomplete=\"off\" placeholder=\"Search for...\" [(ngModel)]=\"search\" name=\"search\">\r\n                    <span class=\"input-group-btn\">\r\n                <button class=\"btn btn-primary\" (click)=\"onSubmit($event)\" type=\"button\"><i class=\"fa fa-search\" aria-hidden=\"true\"></i></button>\r\n              </span>\r\n                </div>\r\n                <!-- /.input-group.input-group-lg -->\r\n            </div>\r\n            <!-- /.col-md-6.search-box.offset-md-4 -->\r\n        </div>\r\n        <!-- /.row -->\r\n    </form>\r\n    <div class=\"row search-results\">\r\n        <div class=\"search-list col-md-6 offset-md-4\">\r\n            <div class=\"card\">\r\n                <ul id=\"search-list-group\" class=\"list-group\">\r\n                    <li [@entriesAnim]=\"state\" class=\"list-group-item\" *ngFor=\"let search of searches; let i = index\">\r\n                        <div class=\"row search-item-top\">\r\n                            <h3 class=\"card-title\">{{search.key}}</h3>\r\n                            <button (click)=\"removeEntry(i)\" type=\"button\" class=\"close\" aria-label=\"Close\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n              </button>\r\n                        </div>\r\n                        <!-- /.row -->\r\n                        <hr>\r\n                        <p class=\"card-text\">{{search.definition}}</p>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n            <!-- /.card -->\r\n        </div>\r\n        <!-- /.search-list.col-md-6-->\r\n    </div>\r\n    <!-- /.row.search-results -->\r\n</div>\r\n<!-- #search-container -->\r\n<app-footer></app-footer>"

/***/ }),

/***/ "../../../../../src/app/components/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_search_service__ = __webpack_require__("../../../../../src/app/services/search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchComponent = (function () {
    function SearchComponent(flashMessage, searchService) {
        this.flashMessage = flashMessage;
        this.searchService = searchService;
        this.searches = [];
        this.state = 'active';
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent.prototype.onSubmit = function (e) {
        var _this = this;
        e.preventDefault();
        var search = '{"search": "' + this.search.toUpperCase() + '"}';
        if (this.search == '' || this.search == undefined || this.search == null) {
            this.flashMessage.show('Please submit a tag', { cssClass: 'alert-danger', timeout: 3000 });
        }
        else {
            this.searchService.getSearch(search).subscribe(function (data) {
                if (data.success === false) {
                    _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
                }
                for (var i = 0; i < data.length; i++) {
                    _this.searches.unshift(data[i]);
                    // this.searchService.historyResults.unshift(this.searches[i].key.toLowerCase());
                    // Init local variable
                    var historyResults = void 0;
                    if (localStorage.getItem('historyResults') === null) {
                        historyResults = [];
                        // Push new history result
                        _this.searchService.historyResults.unshift(_this.searches[i].key.toLowerCase());
                        // Set new array to local storage
                        localStorage.setItem('historyResults', JSON.stringify(_this.searchService.historyResults));
                    }
                    else {
                        historyResults = JSON.parse(localStorage.getItem('historyResults'));
                        // Add new history result
                        _this.searchService.historyResults.unshift(_this.searches[i].key.toLowerCase());
                        // Reset local storage
                        localStorage.setItem('historyResults', JSON.stringify(_this.searchService.historyResults));
                    }
                }
            });
        }
        this.search = '';
    };
    SearchComponent.prototype.removeEntry = function (search) {
        this.searches.splice(search, 1);
    };
    return SearchComponent;
}());
SearchComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-search',
        template: __webpack_require__("../../../../../src/app/components/search/search.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/search/search.component.css")],
        animations: [
            Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["l" /* trigger */])('entriesAnim', [
                Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["i" /* state */])('active', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["j" /* style */])({
                    opacity: '1'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["k" /* transition */])('void => *', [
                    Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["j" /* style */])({ transform: 'translateX(-100%)', opacity: '0' }),
                    Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["e" /* animate */])('300ms ease-in-out')
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["k" /* transition */])('* => void', [
                    Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["e" /* animate */])('300ms ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["j" /* style */])({ transform: 'translateX(100%)', opacity: '0' }))
                ])
            ])
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_search_service__["a" /* SearchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_search_service__["a" /* SearchService */]) === "function" && _b || Object])
], SearchComponent);

var _a, _b;
//# sourceMappingURL=search.component.js.map

/***/ }),

/***/ "../../../../../src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/register', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-type', 'application/json');
        return this.http.post('users/authenticate', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-type', 'application/json');
        return this.http.get('users/profile', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        // localstorage cannot store an object so you have to stringify it.
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    // Fetch token from localStorage
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.loggedIn = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/resources.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResourcesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ResourcesService = (function () {
    function ResourcesService(http) {
        this.http = http;
    }
    ResourcesService.prototype.postResource = function (postResource) {
        console.log('Successfully send to service');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/resources/postresource', postResource, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ResourcesService.prototype.getAll = function (filter) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/resources/search', filter, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    return ResourcesService;
}());
ResourcesService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], ResourcesService);

var _a;
//# sourceMappingURL=resources.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/search.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchService = (function () {
    function SearchService(http) {
        this.http = http;
        this.historyResults = [];
        this.searchResult =
            {
                key: "html",
                definition: "HTML tag"
            };
    }
    SearchService.prototype.getSearch = function (search) {
        // return this.searchResult;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/searches/search', search, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    SearchService.prototype.getHistoryResults = function () {
        if (localStorage.getItem('historyResults') === null) {
            this.historyResults = [];
        }
        else {
            this.historyResults = JSON.parse(localStorage.getItem('historyResults'));
        }
        return this.historyResults;
    };
    return SearchService;
}());
SearchService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], SearchService);

var _a;
//# sourceMappingURL=search.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/update-user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateUserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UpdateUserService = (function () {
    function UpdateUserService(http) {
        this.http = http;
    }
    UpdateUserService.prototype.updateUserProfile = function (updateProfile) {
        // console.log(updateProfile);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/users/update', updateProfile, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    return UpdateUserService;
}());
UpdateUserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], UpdateUserService);

var _a;
//# sourceMappingURL=update-user.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/validate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name == undefined || user.email == undefined || user.username == undefined || user.password == undefined || user.password.length == 0) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    return ValidateService;
}());
ValidateService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], ValidateService);

//# sourceMappingURL=validate.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
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

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map