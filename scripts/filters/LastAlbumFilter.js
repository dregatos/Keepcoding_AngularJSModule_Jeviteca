/**
 * Created by dregatos on 27/06/15.
 */
angular
    .module("jeviteca")
    .filter("lastAlbumFilter",function(){
        return function(album){
            return album.title + " [" + album.year + "]";
        }
    });