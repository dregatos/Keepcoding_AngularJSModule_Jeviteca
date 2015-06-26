/**
 * Created by dregatos on 26/06/15.
 */
angular.module("jeviteca").directive("bandRow",function() {
    return {
        restrict: "AE",
        replace: true,
        templateUrl: "views/BandRow.html",
        scope: {
            band: "=",
            onSelect: "&"
        },
        link: function(scope) {
            scope.didSelect = function(id) {
                scope.onSelect({ bandId: id});
            };
        }
    }
});