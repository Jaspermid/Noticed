/**
 * Created by Jasper on 29/08/14.
 */
Handlebars.registerHelper('key_value', function(context, options) {
    var result = [];
    _.each(context, function(value, key, list){
        result.push({key:key, value:value});
    })
    return result;
});