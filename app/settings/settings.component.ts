import { Component } from 'angular2/core';
import { SettingsService } from './settings.service';
import { Router, ROUTER_DIRECTIVES } from  'angular2/router'
import { BUTTON_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';
import { LocalStorageService } from '../shared/services/localStorage.service';

@Component({
  selector: 'settings',
  templateUrl: 'settings/settings.component.html',
  directives: [ROUTER_DIRECTIVES, BUTTON_DIRECTIVES],
  providers: [SettingsService, LocalStorageService]
})

export class SettingsComponent {
  private action: string = this._settingsService.defaultAction;
  private algorithm: string = this._settingsService.defaultAlgorithm;
  private folder: string = this._settingsService.defaultFolder;
  private password: string = this._settingsService.defaultPassword;
  private isAllSet: boolean = false;

  public constructor(
    private _router: Router,
    private _settingsService: SettingsService) { }

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
