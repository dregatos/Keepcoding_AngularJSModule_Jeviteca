/**
 * Created by dregatos on 26/06/15.
 */
angular
    .module("jeviteca")
    .service("LocalResources", function () {
        this.pathToImage = function (name) {
            debugger;
            var path = "resources/img" + name;
            return name ? path : null;
        }
    });