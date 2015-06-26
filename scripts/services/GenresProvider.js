/**
 * Created by dregatos on 26/06/15.
 */
angular
    .module("jeviteca")
    .service("GenresProvider", ["$http", "Settings", function ($http, Settings) {
        this.getGenres = function () {
            return $http.get(Settings.genresDataPath);
        }
    }]);