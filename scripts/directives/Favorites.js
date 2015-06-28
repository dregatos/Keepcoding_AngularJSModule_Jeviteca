/**
 * Created by dregatos on 28/06/15.
 */
angular.module("jeviteca").directive("favorites", function() {

    return {
        restrict: "AE",
        replace: true,
        scope: {
            id: "=",
            type: "@"
        },
        templateUrl: "views/Favorites.html",
        link: function(scope) {

            scope.hasLocalStorage = function(){
                if(typeof (Storage)!== "undefined"){
                    return "true";
                }
                else{
                    return "false";
                }
            };

            scope.isFavorite = function() {
                var favorite = localStorage.getItem(scope.type + "_" + scope.id);
                return favorite === "true";
            };

            scope.toogleFavoriteStatus = function() {
                var favorite = localStorage.getItem(scope.type + "_" + scope.id);
                if (favorite) {
                    localStorage.removeItem(scope.type + "_" + scope.id);
                } else {
                    localStorage.setItem(scope.type + "_" + scope.id, "true");
                }
            };
        }
    }
});