import { Component, OnInit } from '@angular/core';
import Map from 'ol/Map';
import View from 'ol/View';
import { OSM } from 'ol/source';

import TileLayer from 'ol/layer/Tile';@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit {

  public map!: Map

  ngOnInit(): void {
    this.map = new Map({
    layers: [
      new TileLayer({
        source: new OSM(),
      }),
    ],
    target: 'map',
    view: new View({
      center: [1373541.5859136516, 5126556.34249262],
      zoom: 12,
      maxZoom: 18,
    }),
  });
 }
}
