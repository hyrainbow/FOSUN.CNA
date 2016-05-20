
require.ensure(['./a'], function(require) {
    require('../../node_modules/bootstrap/less/bootstrap.less');
    var content = require('./a');
    var a = $('#aa');
    a.html("Hello World!");
});
