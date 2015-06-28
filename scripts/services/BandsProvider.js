/**
 * Created by dregatos on 26/06/15.
 */
angular
    .module("jeviteca")
    .service("BandsProvider", ["$http", function ($http) {
        this.getBands = function (filePath) {
            return $http.get(filePath);
        }
    }]);