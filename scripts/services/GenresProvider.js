/**
 * Created by dregatos on 26/06/15.
 */
angular
    .module("jeviteca")
    .service("GenresProvider", ["$http", function ($http) {
        this.getGenres = function (filePath) {
            return $http.get(filePath);
        }
    }]);