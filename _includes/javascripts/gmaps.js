var jekyllMapping = (function () {
    return {
        mappingInitialize: function () {
            var maps = document.getElementsByClassName("jekyll-mapping");
            for ( var i = 0; i < maps.length; i++ ) {
                var zoom      = maps[i].getAttribute("data-zoom"),
                    lat       = maps[i].getAttribute("data-latitude"),
                    lon       = maps[i].getAttribute("data-longitude"),
                    layers    = maps[i].getAttribute("data-layers"),
                    title     = maps[i].getAttribute("data-title"),
                    options   = {
                    zoom: parseFloat(zoom),
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                    }, mainMarker;

                if (lat  && lon) {
                    options.center = new google.maps.LatLng(lat, lon);
                    map = new google.maps.Map(maps[i], options);
                    mainMarker = new google.maps.Marker({
                        position: options.center,
                        map: map,
                        title: title
                    });
                } else {
                    options.center = new google.maps.LatLng(0, 0);
                    map = new google.maps.Map(maps[i], options);
                }

                //TODO: make locations work as well
                //if (settings.locations instanceof Array) {
                    //var bounds = new google.maps.LatLngBounds(), markers = [], s, l, m;
                    //while (settings.locations.length > 0) {
                        //s = settings.locations.pop();
                        //l = new google.maps.LatLng(s.latitude, s.longitude);
                        //m = new google.maps.Marker({
                            //position: l,
                            //map: map,
                            //title: s.title
                        //});
                        //markers.push(m);
                        //bounds.extend(l);
                    //}
                    //map.fitBounds(bounds);
                //}


                if (layers) {
                    layers = layers.split(' ');
                    var mapLayers = [];
                    while (layers.length > 0){
                        var m = new google.maps.KmlLayer(layers.pop());
                        mapLayers.push(m);
                        m.setMap(map);
                    }
                }
            }
        },
        loadScript: function () {
            var script = document.createElement("script");
            script.type = "text/javascript";
            script.src = "http://maps.googleapis.com/maps/api/js?key=" +
                jekyllMappingAPIKey +
                "&sensor=false&callback=jekyllMapping.mappingInitialize";
            document.body.appendChild(script);
        }
    };
}());

window.onload = function() { jekyllMapping.loadScript(); };