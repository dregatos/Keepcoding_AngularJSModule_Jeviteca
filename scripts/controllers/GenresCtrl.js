/**
 * Created by dregatos on 17/06/15.
 */
angular
    .module("jeviteca")
    .controller("GenresCtrl", ["$scope", "Genres", function($scope, Genres) {
        $scope.genres = Genres.data;
}]);