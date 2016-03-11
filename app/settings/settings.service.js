System.register(['angular2/core', '../shared/services/localStorage.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, localStorage_service_1;
    var constants, settingsObject, SettingsService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (localStorage_service_1_1) {
                localStorage_service_1 = localStorage_service_1_1;
            }],
        execute: function() {
            constants = require('./app.constants.json'), settingsObject = {
                "defaults": {
                    "action": constants.ACTION,
                    "algorithm": constants.ALGORITHM,
                    "folder": constants.FOLDER,
                    "password": constants.PASSWORD
                }
            };
            SettingsService = (function () {
                function SettingsService(_localStorageService) {
                    this._localStorageService = _localStorageService;
                }
                SettingsService.prototype.ngOnInit = function () {
                    this.appSettings = localStorage['app_settings'] !== undefined ?
                        this._localStorageService.getObject('app_settings') :
                        settingsObject;
                    this._localStorageService
                        .setObject('app_settings', this.appSettings);
                    this.defaultAction = this.appSettings.defaults.action;
                    this.defaultAlgorithm = this.appSettings.defaults.algorithm;
                    this.defaultFolder = this.appSettings.defaults.folder;
                    this.defaultPassword = this.appSettings.defaults.password;
                };
                SettingsService.prototype.setDefault = function (type, value) {
                    this._localStorageService
                        .updateObject('app_settings.defaults.' + type, value);
                };
                SettingsService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [localStorage_service_1.LocalStorageService])
                ], SettingsService);
                return SettingsService;
            }());
            exports_1("SettingsService", SettingsService);
        }
    }
});
//# sourceMappingURL=settings.service.js.map