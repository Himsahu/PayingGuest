import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor() { 

  }

  ngOnInit(): void {
    this.buildMap();
  }

  title = 'user_location_map'
  map:mapboxgl.Map | undefined;
  style = 'mapbox://stylee/mapbox/streets-v11'
  lat = 12.0911;
  lng = 85.1223;
  zoom = 10;

  buildMap(){
    const navControl  = new mapboxgl.NavigationControl({
      visualizePitch: true
    })
  }
}
