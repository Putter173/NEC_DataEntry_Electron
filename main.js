const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const fs = require("fs");

function createWindow() {
  const win = new BrowserWindow({
    height: 970,
    width: 1300,
    minHeight: 970,
    minWidth: 1300,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  win.loadFile("app/index.html");
}

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

// IPC Operations

ipcMain.on("storredArray", (event, arg) => {
  fs.readFile("app/data/temporaryData.json", (error, data) => {
    if (arg === true) {
      let responseObj = JSON.parse(data).length;
      event.returnValue = responseObj;
    } else if (arg === false) {
      let responseObj = JSON.parse(data);
      event.returnValue = responseObj;
    } else {
      throw "storredArray Function - Incorrect Use of Inputs!";
    }
  });
});

ipcMain.on("modArray", (event, Obj, Id) => {
  fs.readFile("app/data/temporaryData.json", (error, data) => {
    let presentFile = JSON.parse(data);
    if (Id === undefined) {
      Id = presentFile.length;
    }
    presentFile[Id] = Obj;
    fs.writeFileSync(
      path.resolve(__dirname, "app/data/temporaryData.json"),
      JSON.stringify(presentFile)
    );
    event.returnValue = "modArray Function Completed";
  });
});

ipcMain.on("removeArray", (event, Id) => {
  fs.readFile("app/data/temporaryData.json", (error, data) => {
    let presentFile = JSON.parse(data);
    presentFile.splice(Id, 1);
    fs.writeFileSync(
      path.resolve(__dirname, "app/data/temporaryData.json"),
      JSON.stringify(presentFile)
    );
    event.returnValue = "removed Array ID:" + Id;
  });
});
