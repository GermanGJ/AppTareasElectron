const { app, BrowserWindow } = require('electron')
const mydb = require("./database");


function createWindow () {
  // Crea la ventana del navegador.
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })
  // y carga el  index.html de la aplicación.
  win.loadFile('index.html')
}

app.whenReady().then(createWindow)

//mydb.create_db();
//mydb.create_dbLoc();
//mydb.item_save("German");
//mydb.item_save("Mario");
//mydb.item_save("Javier");
//mydb.items_all();
//mydb.item_get(1586650690971);