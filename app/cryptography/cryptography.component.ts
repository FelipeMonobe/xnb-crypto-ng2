import { readdirSync } from 'fs';
import { ipcRenderer } from 'electron';
import { ROUTER_DIRECTIVES } from 'angular2/router';
import { Component, OnInit, NgZone } from 'angular2/core';
import { CryptographyService } from './cryptography.service';
import { SettingsService } from '../settings/settings.service';
import { BUTTON_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from 'angular2/common';
import { LocalStorageService } from '../shared/services/localStorage.service';

@Component({
  selector: 'cryptography',
  templateUrl: './app/cryptography/cryptography.component.html',
  directives: [BUTTON_DIRECTIVES, ROUTER_DIRECTIVES,
    CORE_DIRECTIVES, FORM_DIRECTIVES],
  providers: [CryptographyService, SettingsService, LocalStorageService]
})

export class CryptographyComponent implements OnInit {
  private action: string = this._settingsService.defaultAction;
  private granularity: string;
  private paths: Array<string> = [this._settingsService.defaultFolder];

  public constructor(private _cryptographyService: CryptographyService,
    private _settingsService: SettingsService,
    private _zone: NgZone) { }

  public ngOnInit(): void {
    ipcRenderer.on('responseDialog', (event, response) => {
      this._zone.run(() => { this.paths = response; });
    });
  }

  private choose(): void {
    ipcRenderer.send('requestDialog');
  }

  private execute(): void {
    let files, inputPath;

    this.paths.forEach((path) => {
      files = readdirSync(path);
      files.forEach((file) => {
        inputPath = `${path}/${file}`;

        if (this.action === 'Encrypt') {
          this._cryptographyService.encrypt(inputPath,
            this._settingsService.defaultAlgorithm,
            this._settingsService.defaultPassword);
        } else {
          this._cryptographyService.decrypt(inputPath,
            this._settingsService.defaultAlgorithm,
            this._settingsService.defaultPassword);
        }
      });
    });
  }
}
