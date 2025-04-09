// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

const { contextBridge, clipboard } = require('electron')

contextBridge.exposeInMainWorld('electron', {
  clipboard: {
    writeText: (text) => clipboard.writeText(text)
  }
})
