const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    fullscreen: true, // Start in full-screen mode
    autoHideMenuBar: true, // Hide the menu bar
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    }
  });

  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'user.html'),
    protocol: 'file:',
    slashes: true
  }));

  // Remove DevTools opening for production
  // mainWindow.webContents.openDevTools();

  mainWindow.on('closed', function () {
    mainWindow = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow();
  }
});
