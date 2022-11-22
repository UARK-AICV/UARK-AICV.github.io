var jekyllMapping = (function () {
    return {
        mappingInitialize: function() {
            var maps = document.getElementsByClassName("jekyll-mapping");
            for ( var i = 0; i < maps.length; i++ ) {
                var zoom      = maps[i].getAttribute("data-zoom"),
                    lat       = maps[i].getAttribute("data-latitude"),
                    lon       = maps[i].getAttribute("data-longitude"),
                    layers    = maps[i].getAttribute("data-layers"),
                    title     = maps[i].getAttribute("data-title"),
                    map, markers, center;

                // Set an arbitrary id on the element
                maps[i].setAttribute('id', 'jekyll-mapping' + i);

                markers = new OpenLayers.Layer.Markers("Markers")
                map = new OpenLayers.Map('jekyll-mapping' + i);
                map.addLayer(new OpenLayers.Layer.OSM());
                map.addLayer(markers);
                if (lat && lon) {
                    center = new OpenLayers.LonLat(lon, lat).transform(
                        new OpenLayers.Projection("EPSG:4326"),
                        new OpenLayers.Projection("EPSG:900913"));
                    map.setCenter(center, zoom);
                    markers.addMarker(new OpenLayers.Marker(center));
                }

                if (layers) {
                    layers = layers.split(' ');
                    while (layers.length > 0){
                        var m = new OpenLayers.Layer.Vector("KML", {
                                strategies: [new OpenLayers.Strategy.Fixed()],
                                protocol: new OpenLayers.Protocol.HTTP({
                                    url: layers.pop(),
                                    format: new OpenLayers.Format.KML({
                                        extractStyles: true,
                                        extractAttributes: true,
                                        maxDepth: 2
                                    })
                                })
                            });
                        if (m) {
                            m.events.register("loadend", m, function () {
                                var bounds = m.getDataExtent();
                                if (bounds) {
                                    map.zoomToExtent(bounds);
                                }
                            });
                            map.addLayer(m)
                        }
                    }
                }
            }
        }
    };
}());

window.onload = function() { jekyllMapping.mappingInitialize(); }