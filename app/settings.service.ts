import { Injectable, OnInit } from 'angular2/core';
import { LocalStorageService } from './localStorage.service';

const constants = require('./app.constants.json'),
  settingsObject = {
    "defaults": {
      "action": constants.ACTION,
      "algorithm": constants.ALGORITHM,
      "folder": constants.FOLDER,
      "password": constants.PASSWORD
    }
  };

@Injectable()
export class SettingsService implements OnInit {
  appSettings: any;
  defaultAction: string;
  defaultAlgorithm: string;
  defaultFolder: string;
  defaultPassword: string;

  constructor(private _localStorageService: LocalStorageService) { }

  ngOnInit(): void {
    this.appSettings = localStorage['app_settings'] !== undefined ?
      this._localStorageService.getObject('app_settings') :
      settingsObject;

    this._localStorageService
      .setObject('app_settings', this.appSettings);

    this.defaultAction = this.appSettings.defaults.action;
    this.defaultAlgorithm = this.appSettings.defaults.algorithm;
    this.defaultFolder = this.appSettings.defaults.folder;
    this.defaultPassword = this.appSettings.defaults.password;
  }

  setDefault(type: string, value: string): void {
    this._localStorageService
      .updateObject('app_settings.defaults.' + type, value);
  }
}
