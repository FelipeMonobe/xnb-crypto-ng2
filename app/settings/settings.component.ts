import { Router } from  'angular2/router'
import { Component, OnInit } from 'angular2/core';
import { SettingsService } from './settings.service';
import { Options } from '../shared/interfaces/options.interface';

@Component({
  selector: 'settings',
  templateUrl: 'app/settings.component.html'
})

export class SettingsComponent implements OnInit {
  private options: Options;
  // private action: string;
  // private algorithm: string;
  // private folder: string;
  // private password: string;
  private isAllSet: boolean = false;

  public constructor(
    private _router: Router,
    private _settingsService: SettingsService) { }

  public ngOnInit(): void {
    this.options.action = this._settingsService.defaultAction;
    this.options.algorithm = this._settingsService.defaultAlgorithm;
    this.options.path = this._settingsService.defaultFolder;
    this.options.password = this._settingsService.defaultPassword;
  }

  private saveSettings(): void {
    try {
      this._settingsService.setDefault('action', this.options.action);
      this._settingsService.setDefault('algorithm', this.options.algorithm);
      this._settingsService.setDefault('folder', this.options.path);
      this._settingsService.setDefault('password', this.options.password);
      this._router.navigate(['Cryptography']);
    } catch (e) {
      console.log('Unable to save settings.\n' + e);
    }
  }
}
