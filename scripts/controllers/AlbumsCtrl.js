/**
 * Created by dregatos on 17/06/15.
 */
angular
    .module("jeviteca")
    .controller("AlbumsCtrl", ["$scope","Albums", function($scope, Albums) {
        $scope.albums = Albums.data;

        $scope.showAlbumDetail = function(id) {
            console.log("Will Show Album Detail with id: " + id);
        }
}]);