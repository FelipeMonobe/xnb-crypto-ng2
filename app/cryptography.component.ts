import { readdirSync } from 'fs';
import { Component } from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';
import { SettingsService } from './settings.service';
import { CryptographyService } from './cryptography.service';
import { BUTTON_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from 'angular2/common';

@Component({
  selector: 'cryptography',
  templateUrl: './app/cryptography.component.html',
  directives: [BUTTON_DIRECTIVES, ROUTER_DIRECTIVES,
    CORE_DIRECTIVES, FORM_DIRECTIVES]
})

export class CryptographyComponent {
  private action: string;
  private granularity: string;
  private paths: Array<string> = [''];

  public constructor(private _cryptographyService: CryptographyService,
    private _settingsService: SettingsService) { }

  private choose(): void {
    this.paths = ['/home/xinube/Documents/Testes/xnb-crypto/'];
  }
  private execute(): void {
    let files, inputPath;

    this.paths.forEach((path) => {
      files = readdirSync(path);
      files.forEach((file) => {
        inputPath = `${path}/${file}`;

        if (this.action === 'Encrypt') {
          this._cryptographyService.encrypt(file,
            this._settingsService.defaultAlgorithm,
            this._settingsService.defaultPassword);
        } else {
          this._cryptographyService.decrypt(file,
            this._settingsService.defaultAlgorithm,
            this._settingsService.defaultPassword);
        }
      });
    });
  }
}
