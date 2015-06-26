/**
 * Created by dregatos on 17/06/15.
 */
angular
    .module("jeviteca")
    .controller("AlbumsCtrl", ["$scope","Albums", function($scope, Albums) {
        $scope.albums = Albums.data;

        $scope.localImagePath = function(imageName) {
            debugger;
            var path = "resources/img" + imageName;
            return imageName ? path : null;
        };

        $scope.showAlbumDetail = function(id) {
            debugger;
        }
}]);