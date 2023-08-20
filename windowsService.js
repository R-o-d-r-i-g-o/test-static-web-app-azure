const Service = require('node-windows').Service;
const path = require('path');

const svc = new Service({
  name: 'MyNodeAPIService',
  description: 'My Node.js API Service Description',
  script: path.join(__dirname, 'index.js')
});

svc.on('install', () => {
  svc.start();
});

svc.on('uninstall', () => {
  console.log('Uninstall complete.');
});

if (process.argv[2] === 'install') {
  svc.install();
} else if (process.argv[2] === 'uninstall') {
  svc.uninstall();
}
