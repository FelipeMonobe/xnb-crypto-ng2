import { Injectable } from 'angular2/core';

@Injectable()
export class LocalStorageService {
  public getItem(key: string): string {
    return window.localStorage[key];
  }
  public getObject(key: string): any {
    try {
      var json = JSON.parse(window.localStorage[key]);
      return json;
    } catch (e) {
      console.log('Unable to retrieve object.\n' + e);
    }
  }
  public setItem(key: string, value: string): void {
    window.localStorage[key] = value;
  }
  public setObject(key: string, value: any): void {
    try {
      window.localStorage[key] = JSON.stringify(value);
    } catch (e) {
      console.log('Unable to store object.\n' + e);
    }
  }
  public updateObject(keyPath: string, value: string): void {
    var path = keyPath.split('.'),
      baseObject = this.getObject(path[0]),
      auxObject = baseObject,
      key = path[path.length - 1];

    try {
      for (var step = 1; step < path.length - 1; step++) {
        auxObject = auxObject[path[step]];
      }
      auxObject[key] = value;
      localStorage[path[0]] = JSON.stringify(baseObject);
    } catch (e) {
      console.log('Unable to update object.\n' + e);
    }
  }
}
