var base_mixin = {
    absolutes: [
        'height', 'width', 'minWidth', 'minHeight',
        'turnOnControls', 'turnOffControls', 'transitionDuration',
        'renderLabel', 'renderTitle', 'legend', 'group', 'dimension'
    ],
    templates: [
        'ordering', 'keyAccessor', 'valueAccessor', 'label', 'title'
    ]
};

var accessorify = require('./accessorify');

var charts = {
    rowchart: require('./rowchart'),
    linechart: require('./linechart')
};

function dc_json(chart, params) {
    var name, i;
    if (!params) return;
    // base mixin
    for (i = 0; i < base_mixin.absolutes.length; ++i) {
        name = base_mixin.absolutes[i];
        if (params[name] != null) chart[name](params[name]);
    }

    for (i = 0; i < base_mixin.templates; ++i) {
        name = base_mixin.templates[i];
        if (params[name] != null) chart[name](accessorify(params[name]));
    }
}

module.exports = dc_json;
