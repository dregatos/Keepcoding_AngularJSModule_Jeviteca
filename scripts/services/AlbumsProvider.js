/**
 * Created by dregatos on 25/06/15.
 */
angular
    .module("jeviteca")
    .service("AlbumsProvider", ["$http", "Settings", function ($http, Settings) {
        this.getAlbums = function () {
            return $http.get(Settings.albumsDataPath);
        }
    }]);