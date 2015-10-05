var _ = require('lodash');

var type = {}.toString;

function accessorify(n){
    if (type.call(n) !== '[object String]') {
        return n;
    }
    if (~n.indexOf('.')) {
        var split = n.split('.');
        return function(d){
            return split.reduce(function (p,v) {
                return p[v];
            }, d);
        };
    } else if (~n.indexOf('<%')) {
        var tpl = _.template(n);
        return function (d) {
            return tpl({d:d});
        };
    } else {
        return function (d) {
            return d[n];
        };
    }
}

module.exports = accessorify;
