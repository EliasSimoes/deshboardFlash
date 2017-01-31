webpackJsonp([0,3],{

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Message; });
var Message = (function () {
    function Message(gostei, userName, comentario) {
        this.gostei = gostei;
        this.userName = userName;
        this.comentario = comentario;
    }
    return Message;
}());
//# sourceMappingURL=/github/DEBUGDESHBOARD/deshboardFlash/src/message.model.js.map

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: true,
    api: 'http://localhost:3000',
    messageService: '/messages',
    indice: '/indice',
    indice1: '/indice1',
    indice2: '/indice2'
};
//# sourceMappingURL=/github/DEBUGDESHBOARD/deshboardFlash/src/environment.js.map

/***/ }),

/***/ 403:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 403;


/***/ }),

/***/ 404:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(489);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(510);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/github/DEBUGDESHBOARD/deshboardFlash/src/main.js.map

/***/ }),

/***/ 509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__message_message_service__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__message_message_model__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(309);
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
    function AppComponent(messageService, _fb) {
        this.messageService = messageService;
        this._fb = _fb;
        this.messages = [];
        this.formG = this._fb.group({});
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.messageService.getIndice()
            .subscribe(function (data) { return _this.indice = data; }, function (error) { return console.log(error); });
        this.messageService.getGostei()
            .subscribe(function (data) { return _this.indiceGostei = data; }, function (error) { return console.log(error); });
        this.messageService.getNGostei()
            .subscribe(function (data) { return _this.indiceNGostei = data; }, function (error) { return console.log(error); });
        this.messageService.getMessages()
            .subscribe(function (messages) { return _this.messages = messages; }, function (error) { return console.error(error); });
    };
    AppComponent.prototype.addComentario = function (form) {
        var _this = this;
        if (form.value.inputGostei == "true") {
            this.gostei = "Gostei";
        }
        else {
            this.gostei = "Não gostei";
        }
        this.userName = form.value.nome;
        this.comentario = form.value.comentario;
        var message = new __WEBPACK_IMPORTED_MODULE_2__message_message_model__["a" /* Message */](this.gostei, this.userName, this.comentario);
        this.messages.push(message);
        this.messageService.saveMessage(message)
            .subscribe(function () { return alert('Obrigado ' + _this.userName + ', seu comentário foi registrado.'); }, function (error) { return console.log(error); });
        form.reset();
    };
    AppComponent.prototype.onSubmit = function (form) {
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(665),
            providers: [__WEBPACK_IMPORTED_MODULE_1__message_message_service__["a" /* MessageService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__message_message_service__["a" /* MessageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__message_message_service__["a" /* MessageService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormBuilder */]) === 'function' && _b) || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b;
}());
//# sourceMappingURL=/github/DEBUGDESHBOARD/deshboardFlash/src/app.component.js.map

/***/ }),

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(509);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/github/DEBUGDESHBOARD/deshboardFlash/src/app.module.js.map

/***/ }),

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__message_model__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(667);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__(335);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MessageService = (function () {
    function MessageService(http) {
        this.http = http;
        this.messages = [];
        this.messageIsEdit = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* EventEmitter */]();
    }
    MessageService.prototype.addMessage = function (message) {
        var _this = this;
        var body = JSON.stringify(message);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        return this.http.post(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].api + __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].messageService, body, { headers: headers })
            .map(function (response) {
            var result = response.json();
            var message = new __WEBPACK_IMPORTED_MODULE_2__message_model__["a" /* Message */](result.obj.gostei, result.obj.userName, result.obj.comentario);
            _this.messages.push(message);
            return message;
        });
    };
    //relação das sugestoes
    MessageService.prototype.getIndice = function () {
        //return this.http.get('https://flash-deshboard.herokuapp.com/messages/indice')
        return this.http.get('http://localhost:3000/messages/indice')
            .map(function (response) {
            var indice = response.json().data;
            return indice;
        });
    };
    MessageService.prototype.getGostei = function () {
        //return this.http.get('https://flash-deshboard.herokuapp.com/messages')
        return this.http.get('http://localhost:3000/messages/indice1')
            .map(function (response) {
            var indiceGostei = response.json().data;
            return indiceGostei;
        });
    };
    MessageService.prototype.getNGostei = function () {
        //return this.http.get('https://flash-deshboard.herokuapp.com/messages')
        return this.http.get('http://localhost:3000/messages/indice2')
            .map(function (response) {
            var indiceNGostei = response.json().data;
            return indiceNGostei;
        });
    };
    //métodos do form principal
    MessageService.prototype.getMessages = function () {
        var _this = this;
        //return this.http.get('https://flash-deshboard.herokuapp.com/messages')
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].api + __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].messageService)
            .map(function (response) {
            var messages = response.json().data;
            var transformedMessages = [];
            for (var _i = 0, messages_1 = messages; _i < messages_1.length; _i++) {
                var message = messages_1[_i];
                transformedMessages.push(new __WEBPACK_IMPORTED_MODULE_2__message_model__["a" /* Message */](message.gostei, message.userName, message.comentario));
            }
            _this.messages = transformedMessages;
            return transformedMessages;
        });
    };
    MessageService.prototype.saveMessage = function (message) {
        var body = JSON.stringify(message);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json'
        });
        //return this.http.post('https://flash-deshboard.herokuapp.com/messages', body, {headers: headers});
        return this.http.post(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].api + __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].messageService, body, { headers: headers });
    };
    MessageService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], MessageService);
    return MessageService;
    var _a;
}());
//# sourceMappingURL=/github/DEBUGDESHBOARD/deshboardFlash/src/message.service.js.map

/***/ }),

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(939);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=/github/DEBUGDESHBOARD/deshboardFlash/src/polyfills.js.map

/***/ }),

/***/ 665:
/***/ (function(module, exports) {

module.exports = "<section class=\"intro\" id=\"1\">\n  <div class=\"content\">\n    <h1>A flash é você quem faz!</h1>\n    <p>\n      Você já definiu a nossa nova imagem quando nos ajudou a escolher a nova logo.\n      Agora é hora de você desenhar os dashboards principais do nosso BI - as informações que você verá diariamente da nossa operação</p>\n  </div>\n</section>\n\n<section id=\"2\" >\n  <div class=\"content\">\n    <h1>Dashboard exemplo 1</h1>\n    <img class=\"responsive-img wow fadeIn\" src=\"img/dash/1.png\">\n  </div>\n\n\n</section>\n\n<section id=\"3\">\n  <div class=\"content\">\n    <h1>Dashboard exemplo 2</h1>\n    <img class=\"responsive-img wow fadeIn\" src=\"img/dash/2.png\">\n  </div>\n</section>\n\n<section id=\"4\" class=\"z-depth-2\">\n  <div class=\"content\">\n    <h1>Dashboard exemplo 3</h1>\n    <img class=\"responsive-img wow fadeIn\" src=\"img/dash/3.png\">\n  </div>\n</section>\n\n\n<section id=\"5\">\n\n  <!--<a class=\"waves-effect waves-light btn centraliza-relativo hoverable\" href=\"#modal1\">Alguma sugestão?</a>-->\n\n  <!--<div id=\"modal1\" class=\"modal  modal-fixed-footer\">-->\n  <!--<div class=\"modal-content\">-->\n\n  <!--<div class=\"row s6 wow fadeIn\" id=\"centraliza-relativo\">-->\n  <!--<form class=\"\" id=\"form-dash\" (ngSubmit)=\"onAddMessage()\">-->\n  <!--<p>O que achou dos nossos novos dashboards?</p>-->\n  <!--<p>-->\n  <!--<input name=\"group1\" type=\"radio\" id=\"gostei\"/>-->\n  <!--<label for=\"gostei\">Gostei.</label>-->\n\n  <!--<input name=\"group1\" type=\"radio\" id=\"nao-gostei\"/>-->\n  <!--<label for=\"nao-gostei\">Não gostei.</label>-->\n  <!--</p>-->\n\n  <!--<div class=\"row\">-->\n  <!--<div class=\"input-field\">-->\n  <!--<input name=\"nome\" id=\"nome\" type=\"text\" class=\"validate\" name=\"nome\" required>-->\n  <!--<label for=\"nome\">Nome</label>-->\n  <!--</div>-->\n\n  <!--&lt;!&ndash;<div class=\"input-field col s6\">&ndash;&gt;-->\n  <!--&lt;!&ndash;<input id=\"email\" type=\"email\" class=\"validate\">&ndash;&gt;-->\n  <!--&lt;!&ndash;<label for=\"email\" data-error=\"Email inválido\" data-success=\"Certo\">Email</label>&ndash;&gt;-->\n  <!--&lt;!&ndash;</div>&ndash;&gt;-->\n  <!--</div>-->\n  <!--<div class=\"row\">-->\n  <!--<div class=\"input-field\">-->\n  <!--<input name=\"comentario\" id=\"comentario\" class=\"materialize-textarea\" name=\"comentario\" required>-->\n\n  <!--<label for=\"comentario\" >Comentário</label>-->\n  <!--</div>-->\n  <!--</div>-->\n\n\n  <!--</form>-->\n  <!--&lt;!&ndash;<div class=\"col s6\">&ndash;&gt;-->\n  <!--&lt;!&ndash;<h1>Obrigado por fazer parte de nossa evolução</h1>&ndash;&gt;-->\n  <!--&lt;!&ndash;<a href=\"#\" class=\"brand-logo\"><img class=\"responsive-img z-depth-4\" src=\"img/logo-quadrado.png\" alt=\"\"></a>&ndash;&gt;-->\n  <!--&lt;!&ndash;</div>&ndash;&gt;-->\n  <!--</div>-->\n\n  <!--</div>-->\n  <!--<div class=\"modal-footer\">-->\n\n  <!--<button type=\"submit\" class=\"btn btn-primary modal-action modal-close\"> Enviar mensagem </button>-->\n\n  <!--</div>-->\n  <!--</div>-->\n\n  <div class=\"row s6 wow fadeIn centraliza-relativo\">\n\n\n\n\n\n    <form class=\"\"  id=\"form-dash\" #myForm=\"ngForm\" (ngSubmit)=\"addComentario(myForm)\">\n      <p>O que achou dos nossos novos dashboards?</p>\n      <div class=\"row\">\n        <input name=\"inputGostei\" checked type=\"radio\" id=\"gostei\"\n               ngModel\n               value=\"true\"\n        />\n        <label for=\"gostei\">Gostei.</label>\n\n        <input name=\"inputGostei\" type=\"radio\" id=\"nao-gostei\"\n               ngModel\n               value=\"false\"\n        />\n        <label for=\"nao-gostei\">Não gostei.</label>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"input-field\">\n          <input name=\"nome\"\n                 id=\"nome\"\n                 type=\"text\"\n                 class=\"\"\n                 required minlength=\"3\" maxlength=\"20\"\n                 ngModel\n          />\n\n\n\n          <label for=\"nome\">Nome</label>\n        </div>\n\n\n        <div class=\"input-field\">\n\n          <input name=\"comentario\"\n                 id=\"comentario\"\n                 type=\"text\"\n                 class=\"\"\n                 required\n                 ngModel\n          />\n          <label for=\"comentario\">Sugestão</label>\n\n        </div>\n\n\n        <div class=\"input-field\">\n          <input name=\"cc1\" type=\"hidden\" id=\"cc1\" class=\"\">\n          <!--<label for=\"cc1\" >Comentário</label>-->\n        </div>\n      </div>\n      <button type=\"submit\" class=\"btn btn-primary\"> Enviar sugestão </button>\n\n    </form>\n\n  </div>\n\n  <div class=\"col s6\">\n    <p> Total de sugestões: {{ indice }}</p>\n    <p> Gostaram: {{ indiceGostei }}</p>\n    <p> Não gostaram: {{ indiceNGostei }}</p>\n  </div>\n</section>\n\n\n<section id=\"6\">\n  <div class=\"row\">\n    <h1 class=\"center-align\">Obrigado por fazer parte da nossa evolução.</h1>\n\n    <div class=\"col s12 m8 offset-m2 l6 offset-l3 wow fadeIn \">\n      <div class=\"card-panel grey lighten-5 z-depth-1 hoverable wow fadeIn hoverable wow flipInX\" *ngFor=\"let message of messages\">\n        <div class=\"row valign-wrapper cent-coment \">\n          <div class=\"col s2 \">\n            <img src=\"img/man-talking.png\" alt=\"\" class=\"responsive-img\">\n            <p class=\"flow-text\">{{message.gostei}}</p>\n          </div>\n          <div class=\"col s10\">\n                      <span class=\"black-text\">\n                          <h6 class=\"blue-text text-darken-2\">{{message.userName}}</h6>\n\n                          <p class=\"blue-text text-darken-2\">{{ message.comentario }}</p>\n                        <!--<a (click)=\"onDelete()\">Delete</a>-->\n                      </span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<footer id=\"rodape\">\n  Desenvolvido por <a href=\"http://www.flashcourier.com.br\">Flash Courier 2017</a>\n</footer>\n\n\n\n"

/***/ }),

/***/ 940:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(404);


/***/ })

},[940]);
//# sourceMappingURL=main.bundle.map