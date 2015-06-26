/**
 * Created by dregatos on 17/06/15.
 */
angular
    .module("jeviteca")
    .controller("BandsCtrl", ["$scope","Bands", function($scope, Bands) {
        $scope.bands = Bands.data;

        $scope.showBandDetail = function(id) {
            console.log("Coming soon");
            debugger;
        }
}]);