var cling = require('static-cling').cling;

var config = {
    root: '.',
    port: 6456,
    filename: 'index.html'
}
//overriding defaults
cling(config);
