/**
 * Created by daxlab on 21/12/15.
 */

'use strict';
var exec = require('child_process').exec;
if (process.platform === 'darwin') {

} else if (process.platform === 'win32') {
    var util = {};
    util.getMAC = function(cb) {
      exec('getmac', function (err, stdout, stderr) {
          if (!err) {
              var temp = stdout.split(' ');
              temp = temp[51];
              var MAC = temp.substring(temp.length - 17, temp.length);
              MAC = MAC.split('-').join(':');
              return cb(null, MAC);
          }
          else {
              console.log('Some error occurred in getting MAC ',err, stderr );
              return cb(err, null);
          }
      });
    };
    module.exports = util;
} else {
    var util = {};
    util.getMAC = function(cb) {
            exec('ifconfig | grep HWaddr', function (err, stdout, stderr) {
                if (!err) {
                    var temp = stdout.split(' ');
                    var MAC = temp[10].toUpperCase();
                    return cb(null, MAC);
                }
                else {
                    console.log('Some error occurred in getting MAC ',err, stderr );
                    return cb(err, null);
                }
            });
    };
    module.exports = util;
}
