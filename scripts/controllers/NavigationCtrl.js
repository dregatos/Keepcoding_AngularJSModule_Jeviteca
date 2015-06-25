/**
 * Created by dregatos on 17/06/15.
 */
angular
    .module("jeviteca")
    .controller("NavigationCtrl", ["$scope", "$routeSegment", function($scope, $routeSegment) {

    $scope.routeAlbums = function () {
        return $routeSegment.startsWith("albums");
    };

    $scope.routeBands = function () {
        return $routeSegment.startsWith("bands");
    };

    $scope.routeGenres = function () {
        return $routeSegment.startsWith("genres");
    };
}]);