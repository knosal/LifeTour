import { map as createMap, tileLayer as createTitleLayers, icon as createIcon, marker as createMarker } from '../vendor/leaflet';

const initMap = () => {
  // Указатель где вывести карту.
  const map = document.querySelector('#map');

  if (map) {
    map.querySelector('picture').remove();

    const coordinateMap = [55.822323, 37.624414];
    const coordinateMarker = [55.816758, 37.637243];
    const url = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

    // createMap: Функция для создания объекта карты.
    const addMap = createMap('map', {
      center: coordinateMap,
      zoom: 13,
      scrollWheelZoom: false,
    });

    // createIcon: Функция для создания иконки, которая будет использоваться для маркера на карте.
    const icon = createIcon({
      iconUrl: './img/svg/map-marker.svg',
      iconSize: [48, 48],
    });

    // createTitleLayers: Функция для создания слоя с тайлами (фрагментами карты).
    createTitleLayers(url).addTo(addMap);
    // createMarker: Функция для создания маркера на карте.
    createMarker(coordinateMarker, { icon }).addTo(addMap);
  }
};

export { initMap };
