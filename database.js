const db = require('electron-db');
const { ipcMain, app, BrowserWindow } = require("electron");
const path = require('path');
const location = path.join(__dirname, 'db');

ipcMain.on('item-save',(event, arg) => {
    if (arg.trim() != "")
        this.item_save(arg.trim());
})
 
module.exports.create_db = function() {
    db.createTable('Items', (succ, msg) => {
    // succ - boolean, tells if the call is successful
    console.log("Success: " + succ);
    console.log("Message: " + msg);
    })
}

module.exports.create_dbLoc = function(){
    db.createTable('Items', location, (succ, msg) => {
        // succ - boolean, tells if the call is successful
        if (succ) {
          console.log(msg)
        } else {
          console.log('An error has occured. ' + msg)
        }
      })
}

module.exports.item_save = function(name){
    let obj = new Object();
    //obj.id = new Date().getTime();
    obj.name = name;

    db.insertTableContent('Items', location, obj, (succ, msg) => {
        // succ - boolean, tells if the call is successful
        console.log("Success: " + succ);
        console.log("Message: " + msg);
    })
}


module.exports.items_all = function(){
    db.getAll('Items', location, (succ, data) => {
        console.log(data);
    })
}

module.exports.item_get = function(id){
    db.getRows('Items', location, {'id': id}, (succ, data) => {
        console.log(data[0].name);
    })
}


module.exports.item_update = function(id, name){
    let where = {
        "id": id
    };
    
    let set = {
        "name": name
    }
    
    db.updateRow('Items', location, where, set, (succ, msg) => {
        // succ - boolean, tells if the call is successful
        console.log("Success: " + succ);
        console.log("Message: " + msg);
    });
}

module.exports.item_delete = function(id){
    db.deleteRow('Items', location, {'id': id}, (succ, msg) => {
        console.log(msg);
    });
}