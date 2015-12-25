/**
 * Created by daxlab on 21/12/15.
 */

'use strict';
var exec = require('child_process').exec;
if (process.platform === 'darwin') {
    //module.exports = require('./lib/osx');
} else if (process.platform === 'win32') {
    //module.exports = require('./lib/win');
    var util = {};
    util.getMAC = function(cb) {
      exec('getmac', function (err, stdout, stderr) {
          if (!err) {
              var temp = stdout.split(' ');
              temp = temp[51];
              var MAC = temp.substring(temp.length - 17, temp.length);
              return cb(null, MAC);
          }
          else {
              console.log('Some error occurred in getting MAC.');
              return cb(err, null);
          }
      });
    };
    module.exports = util;
} else {
    //module.exports = require('./lib/linux');
    var util = {};
    util.getMAC = function(cb) {
            exec('ifconfig | grep HWaddr', function (err, stdout, stderr) {
                if (!err) {
                    var temp = stdout.split(' ');
                    var MAC = temp[temp.length - 3];
                    return cb(null, MAC);
                }
                else {
                    console.log('Some error occurred in getting MAC.');
                    return cb(err, null);
                }
            });
    };
    module.exports = util;
}
