/**
 * Created by dregatos on 15/06/15.
 */
<!-- Define our main module 'jeviteca', i.e. our web app -->
<!-- Inject necessary dependencies -->
<!-- Every injected dependency is already instantiated -->
angular.module("jeviteca", ["ngRoute", "route-segment", "view-segment"]);

angular
    .module("jeviteca")
    .config(["$routeSegmentProvider","$routeProvider","Configuration", function($routeSegmentProvider, $routeProvider, Configuration) {

    $routeSegmentProvider.when(Configuration.albumsRoute, "albums");
    $routeSegmentProvider.when(Configuration.bandsRoute, "bands");
    $routeSegmentProvider.when(Configuration.genresRoute, "genres");

    $routeSegmentProvider.segment("albums", {
        controller: "AlbumsCtrl",
        templateUrl: "views/Albums.html",
        resolve: {
            Albums: ["AlbumsProvider", function(AlbumsProvider) {
                return AlbumsProvider.getAlbums();
            }]
        },
        resolveFailed: {
            // Do something
        }
    });

    $routeSegmentProvider.segment("bands", {
        controller: "BandsCtrl",
        templateUrl: "views/Bands.html"
    });

    $routeSegmentProvider.segment("genres", {
        controller: "GenresCtrl",
        templateUrl: "views/Genres.html"
    });

    $routeProvider.otherwise({
        redirectTo: Configuration.albumsRoute
    });
}]);