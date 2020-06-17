/* eslint-disable no-unused-vars */
const { remote } = require('electron');

var Minimize = () => {
  remote.getCurrentWindow().minimize();
}

var MiniMaximize = () => {
  const window = remote.getCurrentWindow();
  if (window.isMaximized()) {
      window.minimize();
  }
  else {
      window.maximize();
  }
}

var Maximize = () => {
  const window = remote.getCurrentWindow();
            if (!window.isMaximized()) {
                window.maximize();
            } else {
                window.unmaximize();
            }
}

var Quit = () => {
  remote.app.quit();
}
