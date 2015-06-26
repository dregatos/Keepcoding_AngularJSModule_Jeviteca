/**
 * Created by dregatos on 26/06/15.
 */
angular
    .module("jeviteca")
    .service("BandsProvider", ["$http", "Settings", function ($http, Settings) {
        this.getBands = function () {
            return $http.get(Settings.bandsDataPath);
        }
    }]);