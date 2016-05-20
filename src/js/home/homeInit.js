define( function( require, exports, module){
    /*initial*/
    require(['../parameter/theme'], function(require) {
        var cTheme = require('../parameter/theme');
        var _popularFeelingChart = echarts.init($('#popularFeelingId')[0]);
    });
} );