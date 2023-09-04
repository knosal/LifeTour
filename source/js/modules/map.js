import { map as createMap, tileLayer as createTitleLayers, icon as createIcon, marker as createMarker } from '../vendor/leaflet';
// createMap: Функция для создания объекта карты.
// createTitleLayers: Функция для создания слоя с тайлами (фрагментами карты).
// createIcon: Функция для создания иконки, которая будет использоваться для маркера на карте.
// createMarker: Функция для создания маркера на карте.

const initMap = () => {
  // Указатель где вывести карту.
  const map = document.querySelector('#map');

  if (map) {
    map.querySelector('picture').remove();

    const coordinateMap = [55.822323, 37.624414];
    const coordinateMarker = [55.816758, 37.637243];
    const url = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

    const addMap = createMap('map', {
      center: coordinateMap,
      zoom: 13,
      scrollWheelZoom: false,
    });
    // Установка маркера.
    const icon = createIcon({
      iconUrl: './img/svg/map-marker.svg',
      iconSize: [48, 48],
    });

    createTitleLayers(url).addTo(addMap);
    createMarker(coordinateMarker, { icon }).addTo(addMap);
  }
};

export { initMap };