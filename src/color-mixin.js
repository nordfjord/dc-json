var color_mixin = {
    absolutes: ['colors', 'ordinalColors', 'linearColors', 'colorDomain'],
    templates: ['colorAccessor']
};

var accessorify = require('./accessorify');

module.exports = function (chart, p) {
    var name, i;
    for (i = 0; i < color_mixin.absolutes.length; ++i) {
        name = color_mixin.absolutes[i];
        if (p[name] != null) chart[name](p[name]);
    }
    for (i = 0; i < color_mixin.templates.length; ++i) {
        name = color_mixin.absolutes[i];
        if (p[name] != null) chart[name](accessorify(p[name]));
    }
};
