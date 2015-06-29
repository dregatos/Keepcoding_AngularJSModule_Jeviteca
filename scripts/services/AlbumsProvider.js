/**
 * Created by dregatos on 25/06/15.
 */
angular
    .module("jeviteca")
    .service("AlbumsProvider", ["$http", "$filter", "$q", function ($http, $filter, $q) {
        this.getAlbums = function (filePath) {
            return $http.get(filePath);
        };

        this.getAlbum = function(filePath, albumId){
            var deferred = $q.defer();

            // Promise
            $http.get(filePath).then(
                function(data){
                    var album = $filter("filter")(data.data, {"id": albumId})[0];
                    deferred.resolve(album);
                },
                function(){
                    deferred.reject("Error! Couldn't get this album")
                }
            );

            return deferred.promise;
        };
    }]);