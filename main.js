'use strict';

const electron = require('electron'),
  app = electron.app,
  dialog = electron.dialog,
  ipcMain = electron.ipcMain,
  nativeImage = electron.nativeImage,
  BrowserWindow = electron.BrowserWindow;

let mainWindow,
  appIcon = nativeImage.createFromPath('icon.png');

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    resizable: false,
    icon: appIcon
  });

  mainWindow.setMenu(null);
  mainWindow.loadURL('file://' + __dirname + '/app/index.html');
  mainWindow.webContents.openDevTools();
  mainWindow.on('closed', function() {
    mainWindow = null;
  });

  ipcMain.on('requestDialog', function(event) {
    dialog.showOpenDialog(null, {
      properties: ['openFile', 'openDirectory']
    }, (response) => {
      event.sender.send('responseDialog', response);
    });
  });
}

app.on('ready', createWindow);
app.on('window-all-closed', function() {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
app.on('activate', function() {
  if (mainWindow === null) {
    createWindow();
  }
});
