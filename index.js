'use strict';

const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow

var mainWindow = null;
// var applicationMenu = require('./browser/application-menu');

app.on('ready', function(){
    
    global.shopROOT = __dirname  + '/src/';

    // applicationMenu.setup();

    mainWindow = new BrowserWindow({
        width: 900,
        height: 700,
        center: true,
        resizable: true,
        "min-width": 400,
        "min-height": 300
    });

    mainWindow.loadURL("file://" + __dirname + "/index.html");

    // mainWindow.webContents.executeJavaScript(`
    //     var path = require('path');
    //     module.paths.push(path.resolve('node_modules'));
    //     module.paths.push(path.resolve('../node_modules'));
    //     module.paths.push(path.resolve(__dirname, '..', '..', 'electron', 'node_modules'));
    //     module.paths.push(path.resolve(__dirname, '..', '..', 'electron.asar', 'node_modules'));
    //     module.paths.push(path.resolve(__dirname, '..', '..', 'app', 'node_modules'));
    //     module.paths.push(path.resolve(__dirname, '..', '..', 'app.asar', 'node_modules'));
    //     path = undefined;
    //   `);

});