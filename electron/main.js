const { app } = require('electron')
const createWindow = require('./win')

app.on('ready', async () => {
  logVersions()
  await createWindow()
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
});

function logVersions() {
  const log = console.log

  log('-------------------------------------')
  log('Node version: ', process.versions.node)
  log('Electron version: ', process.versions.electron)
  log('Chrome version: ', process.versions.chrome)
  log('-------------------------------------')
}
