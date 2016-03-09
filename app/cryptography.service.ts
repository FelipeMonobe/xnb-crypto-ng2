import { ipcRenderer } from 'electron';
import { Injectable } from 'angular2/core';
import { createCipher, createDecipher } from 'crypto';
import { createReadStream, createWriteStream, mkdir } from 'fs';

@Injectable()
export class CryptographyService {
  public decrypt(file: string, algorithm: string, password: string): void {
    let decipher = createDecipher(algorithm, password),
      decipherName = createDecipher(algorithm, password),
      decryptedFileName,
      encrypted,
      decrypted,
      pathArray,
      fileName,
      path;

    pathArray = file.split('/');
    fileName = pathArray.pop();
    path = pathArray.join('/');

    decryptedFileName = decipherName.update(fileName, 'hex', 'utf8');
    decryptedFileName += decipherName.final('utf8');
    path += '/' + decryptedFileName;

    encrypted = createReadStream(file);
    decrypted = createWriteStream(path);

    encrypted
      .pipe(decipher)
      .pipe(decrypted);
  }
  public encrypt(file: string, algorithm: string, password: string): void {
    let cipher = createCipher(algorithm, password),
      cipherName = createCipher(algorithm, password),
      encryptedFileName,
      decrypted,
      encrypted,
      pathArray,
      fileName,
      path;

    pathArray = file.split('/');
    fileName = pathArray.pop();
    path = pathArray.join('/') + '/encrypted';

    mkdir(path);

    encryptedFileName = cipherName.update(fileName, 'utf8', 'hex');
    encryptedFileName += cipherName.final('hex');
    path += '/' + encryptedFileName;

    decrypted = createReadStream(file);
    encrypted = createWriteStream(path);

    decrypted
      .pipe(cipher)
      .pipe(encrypted);
  }
}
