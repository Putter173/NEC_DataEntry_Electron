const { app, BrowserWindow, ipcMain } = require("electron");
const { GoogleSpreadsheet } = require("google-spreadsheet");
const path = require("path");
const fs = require("fs");

function createWindow() {
  const win = new BrowserWindow({
    height: 900,
    width: 1470,
    minHeight: 920,
    minWidth: 1470,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
    icon: __dirname + "/app/assets/Icon.ico",
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
  fs.readFile(__dirname + "/app/data/temporaryData.json", (error, data) => {
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
  fs.readFile(__dirname + "/app/data/temporaryData.json", (error, data) => {
    let presentFile = JSON.parse(data);
    if (Id === undefined) {
      Id = presentFile.length;
    }
    presentFile[Id] = Obj;
    fs.writeFileSync(
      path.resolve(__dirname, "./app/data/temporaryData.json"),
      JSON.stringify(presentFile)
    );
    event.returnValue = "modArray Function Completed";
  });
});

ipcMain.on("removeArray", (event, Id) => {
  fs.readFile(__dirname + "/app/data/temporaryData.json", (error, data) => {
    let presentFile = JSON.parse(data);
    presentFile.splice(Id, 1);
    fs.writeFileSync(
      path.resolve(__dirname, "./app/data/temporaryData.json"),
      JSON.stringify(presentFile)
    );
    event.returnValue = "removed Array ID:" + Id;
  });
});

const doc = new GoogleSpreadsheet(
  "1aDmAtZ5HRVz3LEqLyKWQHfIf9oVbjalmMcn4fLeqht0"
);
const credentials = require("./app/data/googleLoginCreds.json");

ipcMain.on("getCurrentRowVal", (event, data) => {
  async function getCurrentRowVal() {
    await doc.useServiceAccountAuth(credentials);
    await doc.loadInfo();
    const sheet = doc.sheetsByTitle["Active Sheet"];
    const row = sheet.rowCount;
    rowVal = Number(row) + 1;
    event.returnValue = rowVal;
  }
  getCurrentRowVal();
});

ipcMain.on("uploadArray", (event, data) => {
  async function writeToSpreadsheet() {
    await doc.useServiceAccountAuth(credentials);
    await doc.loadInfo();
    const sheet = doc.sheetsByTitle["Active Sheet"];
    const rows = await sheet.getRows();
    const newRow = await sheet.addRow(data);
    event.returnValue = "Array Uploaded Successfully";
  }
  writeToSpreadsheet();
});
