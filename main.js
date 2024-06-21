// Modules to control application life and create native browser window
const { app, BrowserWindow, shell } = require("electron");
const path = require("node:path");

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    icon: path.join(__dirname, "/assets/icon/Google_Messages_logo_2022.icns"),
    webPreferences: {
      // Enable the webContents event listeners
      nodeIntegration: false,
      contextIsolation: true,
    },
  });

  // and load the index.html of the app.
  mainWindow.loadURL("https://messages.google.com/web");

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  // Intercept new window events and handle external links
  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    // Check if the URL is an external link
    if (url.startsWith("http")) {
      // Open the URL in the default browser
      shell.openExternal(url);
      // Prevent the default action of opening a new window in the app
      return { action: "deny" };
    }
    // Allow other URL types to be opened in new windows within the app
    return { action: "allow" };
  });
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
