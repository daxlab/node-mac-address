# node-mac-address [![Build Status](https://travis-ci.org/daxlab/node-mac-address.svg?branch=master)](https://travis-ci.org/daxlab/node-mac-address)
Node package to get current machine's MAC address (For Linux and Windows).

## Install

```
$ npm install --save node-mac-address
```
## Usage

```js
var mc = require('node-mac-address');
mc.getMAC(function(err, MAC) {
    console.log(MAC);
});
```
## License

MIT © [Mandeep Singh](http://github.com/daxlab)

## TODO

Mac OS X part.
