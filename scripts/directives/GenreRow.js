/**
 * Created by dregatos on 26/06/15.
 */
angular.module("jeviteca").directive("genreRow",function() {
    return {
        restrict: "AE",
        replace: true,
        templateUrl: "views/GenreRow.html",
        scope: {
            genre: "=",
            onSelect: "&"
        },
        link: function(scope) {
            scope.didSelectAlbum = function(id) {
                scope.onSelect({ albumId: id});
            };
        }
    }
});