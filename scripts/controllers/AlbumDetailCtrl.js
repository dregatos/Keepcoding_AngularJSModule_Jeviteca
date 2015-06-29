/**
 * Created by dregatos on 29/06/15.
 */
angular
    .module("jeviteca")
    .controller("AlbumDetailCtrl",["$scope","Album",function($scope, Album) {
        $scope.album = Album;
    }]);