/* eslint-disable strict */
/* eslint-disable no-unused-vars */
const { app, BrowserWindow, ipcMain } = require('electron');
const isDev = require('electron-is-dev');
const path = require('path');


app.on('before-quit',() =>
{
    console.log("Saliendo");
});

let win;

function createWindow(){
	win = new BrowserWindow({
			width: '100%',
      height: '100%',
      minWidth: 1200,
      minHeight: 800,
			webPreferences: {
          nodeIntegration: true
      },
      frame: false,
      icon: __dirname + '/icons/logo.ico'
  });

  win.loadURL(
    isDev
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname, '../build/index.html')}`
  );

  win.on('move', () => {
      const position = win.getPosition();
  });

  win.on('closed', () => {
      app.quit();
  });
  
}

app.on('ready', createWindow);




