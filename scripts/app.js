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
    $routeSegmentProvider.when(Configuration.bandDetailRoute,"bands_detail");
    $routeSegmentProvider.when(Configuration.albumDetailRoute,"albums_detail");

    $routeSegmentProvider.segment("albums", {
        controller: "AlbumsCtrl",
        templateUrl: "views/Albums.html",
        resolve: {
            Albums: ["AlbumsProvider", "Settings", function(AlbumsProvider, Settings) {
                return AlbumsProvider.getAlbums(Settings.albumsDataPath);
            }]
        },
        resolveFailed: {
            // Do something
        }
    });

    $routeSegmentProvider.segment("bands", {
        controller: "BandsCtrl",
        templateUrl: "views/Bands.html",
        resolve: {
            Bands: ["BandsProvider", "Settings", function(BandsProvider, Settings) {
                return BandsProvider.getBands(Settings.bandsDataPath);
            }]
        },
        resolveFailed: {
            // Do something
        }
    });

    $routeSegmentProvider.segment("genres", {
        controller: "GenresCtrl",
        templateUrl: "views/Genres.html",
        resolve: {
            Genres: ["GenresProvider", "Settings", function(GenresProvider, Settings) {
                return GenresProvider.getGenres(Settings.genresDataPath);
            }]
        },
        resolveFailed: {
            // Do something
        }
    });

    $routeSegmentProvider.segment("bands_detail", {
        controller: "BandDetailCtrl",
        templateUrl: "views/BandDetail.html",
        resolve: {
            Band: ["BandsProvider", "Settings", "$routeParams", function(BandsProvider, Settings, $routeParams) {
                return BandsProvider.getBand(Settings.bandsDataPath, $routeParams.id);
            }]
        },
        resolveFailed: {
            // Do something
        }
    });

    $routeSegmentProvider.segment("albums_detail", {
        controller: "AlbumDetailCtrl",
        templateUrl: "views/AlbumDetail.html",
        resolve: {
            Album: ["AlbumsProvider", "Settings", "$routeParams", function(AlbumsProvider, Settings, $routeParams) {
                return AlbumsProvider.getAlbum(Settings.albumsDataPath, $routeParams.id);
            }]
        },
        resolveFailed: {
            // Do something
        }
    });

    $routeProvider.otherwise({
        redirectTo: Configuration.genresRoute
    });
}]);