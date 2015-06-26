/**
 * Created by dregatos on 26/06/15.
 */
angular.module("jeviteca").directive("albumRow",function() {
    return {
        templateUrl: "views/AlbumRow.html",
        scope: {
            album: "=",
            onSelect: "&"
        },
        link: function(scope) {
            scope.didSelect = function(id) {
                scope.onSelect({ albumId: id});
            }
        }
    }
});