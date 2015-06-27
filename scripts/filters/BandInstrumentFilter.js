/**
 * Created by dregatos on 27/06/15.
 */
angular
    .module("jeviteca")
    .filter("bandInstrumentFilter",function(){
        return function(instruments){
            return instruments.join(", ");
        }
    });