import map from './mapboxClass.js';
import polygonExtrusion from './polygonExtrusionLayer.js';
import threeboxObjectLayer from './threeboxObjectLayer.js';

map.on('load', function() {
    map.addLayer(polygonExtrusion);
    map.addLayer(threeboxObjectLayer);
});