import { Component } from 'angular2/core';

@Component({
  selector: 'settings',
  templateUrl: 'app/settings.component.html'
})

export class SettingsComponent {
  private action: string;
  private algorithm: string;
  private folder: string;
  private password: string;
  private isAllSet: boolean;

  saveSettings(): void { }
}
