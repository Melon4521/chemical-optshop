"use strict";let mapCenter=[47.22326281922194,39.71892192062377];function init(){let e=new ymaps.Map("map",{center:mapCenter,zoom:17},{autoFitToViewport:"always"}),o=new ymaps.Placemark(mapCenter,{},{});e.controls.remove("geolocationControl"),e.controls.remove("searchControl"),e.controls.remove("fullscreenControl"),e.controls.remove("rulerControl"),e.geoObjects.add(o)}ymaps.ready(init);