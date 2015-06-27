/**
 * Created by dregatos on 27/06/15.
 */
angular
    .module("jeviteca")
    .filter("formedInFilter",function(){
        return function(stringSeparatedByComma){
            var array = stringSeparatedByComma.split(',');
            if (array.length === 1) {
                return array[0];
            } else if (array.length <= 3) {
                return array[0] + " (" + array[array.length-1] + " )";
            } else {
                return null;
            }
        }
    });