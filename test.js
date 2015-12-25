/**
 * Created by daxlab on 21/12/15.
 */
var chai = require('chai');
var assert = chai.assert;
var mc = require('./index');
mc.getMAC(function(err, MAC) {
    console.log(MAC);
    assert.typeOf(MAC, 'string' , 'MAC is a string');
    assert.lengthOf(MAC, 17, 'MAC has length 17');
    assert.lengthOf(MAC.split(':'), 6, 'MAC should have 12 integers');
});

