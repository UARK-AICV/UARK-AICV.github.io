---
title: "AICV Lab - Contact"
layout: textlay
excerpt: "Contact."
sitemap: false
permalink: /contact/
---

# Contact

## Lab Location

AICV Lab is in JBHT of the University of Arkansas Fayetteville Campus ([Google Map](https://www.google.com/maps/place/University+of+Arkansas/@36.0686895,-94.1748471,15z/data=!4m5!3m4!1s0x0:0x10a2f93b787e2367!8m2!3d36.0686895!4d-94.1748471)):

Room 447, Floor 4, J.B. Hunt Transport Services Inc. Center for Academic Excellence (JBHT)
227 N. Harmon Ave.
Fayetteville, AR 


<div id="map">

  <!-- Create the interactive map content with JavaScript (.js) -->
<script>

  /* Set up the initial map center and zoom level */
  var map = L.map('map', {
    center: [36.065970,  -94.173780], // EDIT coordinates to re-center map
    zoom: 12,  // EDIT from 1 (zoomed out) to 18 (zoomed in)
    scrollWheelZoom: false
  });

  /* display basemap tiles -- see others at https://leaflet-extras.github.io/leaflet-providers/preview/ */
  L.tileLayer(
    'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://osm.org/copyright">\
        OpenStreetMap</a> contributors, &copy;\
        <a href="https://carto.com/attribution">CARTO</a>'
  }).addTo(map);

  /* Display a point marker with pop-up text */
  L.marker([36.065970,  -94.173780]).addTo(map) // EDIT marker coordinates
  .bindPopup("Insert pop-up text here"); // EDIT pop-up text message

</script>
</div>

### Parking

<!-- There are two car parks in close proximity to Rock Hall shown on the map above:

Parking off [4th Street](https://www.google.com/maps/place/Third+Street+Garage/@37.768572,-122.38973,18z/data=!3m1!4b1!4m2!3m1!1s0x808f7fc58c60662d:0x6886a31478ecb0) (charged by the hour)
Parking off [South Street](https://www.google.com/maps/search/401+South+Street/@37.76892,-122.388106,19z/data=!3m1!4b1) (charged by the day, or 2hrs) -->
 
### Public transport
<!-- There are two MUNI lines with stops in close proximity to UCSF Mission Bay: the T-Third St and 55-16th St.

1. T-Third St. [link](https://www.sfmta.com/routes/t-third-street)
1. 55-16th St. [link](https://www.sfmta.com/routes/55-16th-street)
  -->
<!-- ### UCSF Shuttle
Several UCSF shuttle lines stop on 4th Street outside Rock Hall. Shuttles arrive across the street from Rock Hall (east) and leave on the same side of the street as Rock Hall (west), see map above.

- The UCSF Shuttle map can be found [here](https://campuslifeservices.ucsf.edu/upload/transportation/files/UCSF_Shuttle_Map_8.5x11.pdf)

- The Next Shuttle can be found [here](https://ucsf.tripshot.com/) -->

