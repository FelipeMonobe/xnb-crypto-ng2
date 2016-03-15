import { Injectable } from 'angular2/core';
import { LocalStorageService } from '../shared/services/localStorage.service';

const constants = require('../app.constants.json'),
  settingsObject = {
    "defaults": {
      "action": constants.ACTION,
      "algorithm": constants.ALGORITHM,
      "folder": constants.FOLDER,
      "password": constants.PASSWORD
    }
  };

@Injectable()
export class SettingsService {
  public appSettings: any;
  public defaultAction: string;
  public defaultAlgorithm: string;
  public defaultFolder: string;
  public defaultPassword: string;

  public constructor(private _localStorageService: LocalStorageService) { this.init(); }

  private init(): void {
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

  public setDefault(type: string, value: string): void {
    try {
      this._localStorageService
        .updateObject(`app_settings.defaults.${type}`, value);
    } catch (e) {
      console.log(`Unable to set ${value} as new ${type} default.\n${e}`);
    }
  }
}
