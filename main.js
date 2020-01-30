const { app, BrowserWindow } = require('electron')
const chokidar = require('chokidar')

let browserWindow = null

function createWindow () {
  browserWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  browserWindow.loadFile('index.html')
}

app.on('ready', createWindow)

chokidar.watch('dist').on('all', () => {
  if (browserWindow !== null) {
    browserWindow.reload()
  }
})