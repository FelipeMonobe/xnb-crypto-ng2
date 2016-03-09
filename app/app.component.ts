import { SettingsComponent } from './settings.component';
import { Component, enableProdMode } from 'angular2/core';
import { CryptographyComponent } from './cryptography.component';
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';

enableProdMode();

@Component({
  selector: 'xnb-crypto-ng2',
  template: '<router-outlet></router-outlet>',
  directives: [ROUTER_DIRECTIVES, CryptographyComponent, SettingsComponent],
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
