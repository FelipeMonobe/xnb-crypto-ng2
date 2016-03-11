System.register(['fs', 'angular2/core', 'angular2/router', './cryptography.service', '../settings/settings.service', 'ng2-bootstrap/ng2-bootstrap', 'angular2/common'], function(exports_1, context_1) {
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
    var fs_1, core_1, router_1, cryptography_service_1, settings_service_1, ng2_bootstrap_1, common_1;
    var CryptographyComponent;
    return {
        setters:[
            function (fs_1_1) {
                fs_1 = fs_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (cryptography_service_1_1) {
                cryptography_service_1 = cryptography_service_1_1;
            },
            function (settings_service_1_1) {
                settings_service_1 = settings_service_1_1;
            },
            function (ng2_bootstrap_1_1) {
                ng2_bootstrap_1 = ng2_bootstrap_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            CryptographyComponent = (function () {
                function CryptographyComponent(_cryptographyService, _settingsService) {
                    this._cryptographyService = _cryptographyService;
                    this._settingsService = _settingsService;
                    this.paths = [''];
                }
                CryptographyComponent.prototype.choose = function () {
                    this.paths = ['/home/xinube/Documents/Testes/xnb-crypto/'];
                };
                CryptographyComponent.prototype.execute = function () {
                    var _this = this;
                    var files, inputPath;
                    this.paths.forEach(function (path) {
                        files = fs_1.readdirSync(path);
                        files.forEach(function (file) {
                            inputPath = path + "/" + file;
                            if (_this.action === 'Encrypt') {
                                _this._cryptographyService.encrypt(file, _this._settingsService.defaultAlgorithm, _this._settingsService.defaultPassword);
                            }
                            else {
                                _this._cryptographyService.decrypt(file, _this._settingsService.defaultAlgorithm, _this._settingsService.defaultPassword);
                            }
                        });
                    });
                };
                CryptographyComponent = __decorate([
                    core_1.Component({
                        selector: 'cryptography',
                        templateUrl: './app/cryptography.component.html',
                        directives: [ng2_bootstrap_1.BUTTON_DIRECTIVES, router_1.ROUTER_DIRECTIVES,
                            common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [cryptography_service_1.CryptographyService, settings_service_1.SettingsService])
                ], CryptographyComponent);
                return CryptographyComponent;
            }());
            exports_1("CryptographyComponent", CryptographyComponent);
        }
    }
});
//# sourceMappingURL=cryptography.component.js.map