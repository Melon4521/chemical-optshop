'use strict';

//<Yandex Map>==============================================================================

let mapCenter = [47.22326281922194, 39.71892192062377];

function init() {
  let map = new ymaps.Map('map', {
    center: mapCenter,
    zoom: 17,
  }, {
    autoFitToViewport: 'always'
  });

  let placemark = new ymaps.Placemark(mapCenter, {}, {});

  map.controls.remove('geolocationControl'); // удаляем геолокацию
  map.controls.remove('searchControl'); // удаляем поиск
  map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
  map.controls.remove('rulerControl'); // удаляем контрол правил

  map.geoObjects.add(placemark);
}

ymaps.ready(init);

//</Yandex Map>==============================================================================