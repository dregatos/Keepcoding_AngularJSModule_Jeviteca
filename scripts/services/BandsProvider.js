/**
 * Created by dregatos on 26/06/15.
 */
angular
    .module("jeviteca")
    .service("BandsProvider", ["$http","$q","$filter", function ($http, $q, $filter) {
        this.getBands = function (filePath) {
            return $http.get(filePath);
        };

        this.getBand = function(filePath, bandId){
            var deferred = $q.defer();

            // Promise
            $http.get(filePath).then(
                function(data){
                    var band = $filter("filter")(data.data, {"id": bandId})[0];
                    deferred.resolve(band);
                },
                function(){
                    deferred.reject("Error! Couldn't get this band")
                }
            );

            return deferred.promise;
        };
    }]);