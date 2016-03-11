import { Component, enableProdMode } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';
import { SettingsComponent } from './settings/settings.component';
import { CryptographyComponent } from './cryptography/cryptography.component';

enableProdMode();

@Component({
  selector: 'xnb-crypto-ng2',
  template: '<router-outlet></router-outlet>',
  directives: [ROUTER_DIRECTIVES],
})

@RouteConfig([
  {
    path: '/cryptography',
    name: 'Cryptography',
    component: CryptographyComponent,
    useAsDefault: true
  },
  {
    path: '/settings',
    name: 'Settings',
    component: SettingsComponent
  }
])

export class AppComponent {
  public title: string = 'xnb-crypto-ng2';
}
