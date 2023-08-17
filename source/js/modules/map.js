import '../vendor/leaflet';

const createMap = () => {
  const map = L.map('map', {
    scrollWheelZoom: false,
  }).setView({
    lat: 55.824196,
    lng: 37.621038,
  }, 13);

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(map);

  const mainPinIcon = L.icon({
    iconUrl: '/accelerator-lifetour/img/icons/icon-marker.svg',
    iconSize: [48, 48],
    iconAnchor: [19, 50],
  });

  const marker = L.marker(
    {
      lat: 55.816683,
      lng: 37.636978,
    },
    {
      icon: mainPinIcon,
    },
  );

  marker.addTo(map);
}

export {createMap};
