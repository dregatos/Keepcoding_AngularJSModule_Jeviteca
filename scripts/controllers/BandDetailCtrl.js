/**
 * Created by dregatos on 29/06/15.
 */
angular
    .module("jeviteca")
    .controller("BandDetailCtrl",["$scope","Band",function($scope, Band) {
        $scope.band = Band;
    }]);