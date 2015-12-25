# node-mac [![Build Status](https://travis-ci.org/daxlab/node-mac.svg?branch=master)](https://travis-ci.org/daxlab/node-mac)
Node package to get current machine's MAC address (For Linux and Windows).

## Install

```
$ npm install --save node-mac
```
## Usage

```js
var mc = require('node-mac');
mc.getMAC(function(err, MAC) {
    console.log(MAC);
});
```
## License

MIT © [Mandeep Singh](http://github.com/daxlab)

## TODO

Mac OS X part.
