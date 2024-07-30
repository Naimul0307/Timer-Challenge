// preload.js
const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('myAPI', {
    // Example method: a simple API function to show an alert
    showAlert: (message) => {
        alert(message); // This method will be available in the renderer process
    },
    // Add more methods or properties as needed
    getAppVersion: () => {
        return require('electron').app.getVersion(); // Example to get app version
    }
});
