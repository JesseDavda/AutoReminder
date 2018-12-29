const {app, BrowserWindow} = require('electron');

const path = require('path');
const url = require('url');

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({width: 1000, height: 800});
    mainWindow.loadURL('http://localhost:3000');
    mainWindow.webContents.openDevTools();
    
    mainWindow.on('close', () => {
        mainWindow = null;
    })
}

app.on('ready', createWindow);

app.on('window-all-closed', function () {
    if(process.platform !== 'darwin')
        app.quit();
});

app.on('activate', function () {
    if(mainWindow === null)
        createWindow();
});