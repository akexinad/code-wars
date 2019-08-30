import accessToken from './accessToken.js';

mapboxgl.accessToken = accessToken;

export default new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-87.61694, 41.86625],
    zoom: 16,
    pitch: 60,
    bearing: 20
});

