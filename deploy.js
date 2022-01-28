require('dotenv').config();

const FtpDeploy = require('ftp-deploy');
const ftpDeploy = new FtpDeploy();

if (process.env.LIVE_DEPLOY !== 'true') {
  console.warn('Deploy env is false, not deploying.');
  return;
}

const config = {
  user: process.env.FTP_USER,
  password: process.env.FTP_PASSWORD,
  host: process.env.FTP_HOST,
  port: 21,
  localRoot: __dirname + '/public',
  remoteRoot: '/public_html/',
  include: ['*', '**/*', '.*'],
  exclude: ['dist/**/*.map', 'node_modules/**', 'node_modules/**/.*'],
  deleteRemote: true,
  forcePasv: true
}

ftpDeploy.deploy(config)
         .then(res => console.log('FINISHED UPLOADING'))
         .catch(err => console.log(err));

ftpDeploy.on('uploading', data => {
  console.log('Uploading ', data.transferredFileCount + 1, '/', data.totalFilesCount, ': ', data.filename);
});