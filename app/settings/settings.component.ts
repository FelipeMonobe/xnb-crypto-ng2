import { Router } from  'angular2/router'
import { Component, OnInit } from 'angular2/core';
import { SettingsService } from './settings.service';

@Component({
  selector: 'settings',
  templateUrl: 'app/settings.component.html'
})

export class SettingsComponent implements OnInit {
  private action: string;
  private algorithm: string;
  private folder: string;
  private password: string;
  private isAllSet: boolean = false;

  public constructor(
    private _router: Router,
    private _settingsService: SettingsService) { }

  public ngOnInit(): void {
    this.action = this._settingsService.defaultAction;
    this.algorithm = this._settingsService.defaultAlgorithm;
    this.folder = this._settingsService.defaultFolder;
    this.password = this._settingsService.defaultPassword;
  }

  private saveSettings(): void {
    try {
      this._settingsService.setDefault('action', this.action);
      this._settingsService.setDefault('algorithm', this.algorithm);
      this._settingsService.setDefault('folder', this.folder);
      this._settingsService.setDefault('password', this.password);
      this._router.navigate(['Cryptography']);
    } catch (e) {
      console.log(`Unable to save settings.\n${e}`);
    }
  }
}
