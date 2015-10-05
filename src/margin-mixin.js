module.exports = function(chart, params){
    if(params.margins != null){
        var margins = chart.margins();
        for (var name in params.margins) {
            margins[name] = params.margins[name];
        }
    }
};
