/**
 * Created by dregatos on 25/06/15.
 */
angular
    .module("jeviteca")
    .service("AlbumsProvider", ["$http", function ($http) {
        this.getAlbums = function (filePath) {
            return $http.get(filePath);
        }
    }]);