import './style.css';
import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM'

function olBaseMap() {
  const map = new Map({
    target: 'map',
    layers: [
      new TileLayer({
        source: new OSM({
          layer: 'watercolor',
        }),
      }),
    ],
    view: new View({
      center: [0, 0],
      zoom: 2
    })
  });
}

olBaseMap();
