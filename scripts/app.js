/**
 * Created by dregatos on 15/06/15.
 */
<!-- Define our main module 'jeviteca', i.e. our web app -->
<!-- Inject necessary dependencies -->
<!-- Every injected dependency is already instantiated -->
angular.module("jeviteca", ["ngRoute", "route-segment", "view-segment"]);

angular
    .module("jeviteca")
    .config(["$routeSegmentProvider","$routeProvider","Settings", function($routeSegmentProvider, $routeProvider, Settings) {

    $routeSegmentProvider.when(Settings.albumsRoute, "albums");
    $routeSegmentProvider.when(Settings.bandsRoute, "bands");
    $routeSegmentProvider.when(Settings.genresRoute, "genres");

    $routeSegmentProvider.segment("albums", {
        controller: "AlbumsCtrl.js",
        templateUrl: "views/Albums.html"
    });

    $routeSegmentProvider.segment("bands", {
        controller: "BandsCtrl.js",
        templateUrl: "views/Bands.html"
    });

    $routeSegmentProvider.segment("genres", {
        controller: "GenresCtrl.js",
        templateUrl: "views/Genres.html"
    });

    $routeProvider.otherwise({
        redirectTo: Settings.albumsRoute
    });
}]);