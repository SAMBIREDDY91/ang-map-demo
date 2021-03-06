import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Office } from '../models/office/Office';
import { InfoService } from '../info.service';

import { OrgMapInfo } from '../models/organization/OrgMapInfo';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit, AfterViewInit {
  office: Office;
  step = 0;
  organizations: OrgMapInfo[];
  newOrg = {
    id: 'Enter Id',
    name: 'Enter Name',
    latitude: 0,
    longitude: 0,
  };

  maps = [];
  constructor(private service: InfoService) { }

  ngOnInit() {
    this.newOrg.latitude = -0.131049;
    this.newOrg.longitude = 51.498568;
    this.newOrg.id = '0';
    this.newOrg.name = 'enter org name';
    this.service.mapLocation.subscribe(res => this.maps = res);
    this.service.saveMapLocation(this.maps);
  }

  ngAfterViewInit() {
    this.loadMap();
  }


  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  saveOffice() {
    console.log(this.office);
  }

  loadMap() {
    var map = new maptalks.Map('map', {
      center: [this.newOrg.latitude, this.newOrg.longitude],
      zoom: 14,
      centerCross: true,
      baseLayer: new maptalks.TileLayer('base', {
        urlTemplate: 'http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
        subdomains: ['a','b','c','d'],
        attribution: '&copy; <a href="http://osm.org">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/">CARTO</a>'
      })
    });
    let ref = this;
    map.on('zoomend moving moveend', getStatus);

    getStatus();

    function getStatus() {
      var extent = map.getExtent(),
        ex = [
          '{',
          'xmin:' + extent.xmin.toFixed(5),
          ', ymin:' + extent.ymin.toFixed(5),
          ', xmax:' + extent.xmax.toFixed(5),
          ', ymax:' + extent.xmax.toFixed(5),
          '}'
        ].join('');
      var center = map.getCenter();
      var mapStatus = [
        'Center : [' + [center.x.toFixed(5), center.y.toFixed(5)].join() + ']',
        'Extent : ' + ex,
        'Size : ' + map.getSize().toArray().join(),
        'Zoom : '   + map.getZoom(),
        'MinZoom : ' + map.getMinZoom(),
        'MaxZoom : ' + map.getMaxZoom(),
        'Projection : ' + map.getProjection().code
      ];
       ref.newOrg.latitude =  parseFloat(center.x.toFixed(3));
       ref.newOrg.longitude = parseFloat(center.y.toFixed(3));
    console.log(mapStatus);
    }

  }

  saveOrg() {
    console.log(this.maps);
    console.log(this.newOrg);
    this.maps.push(this.newOrg);
    this.service.saveMapLocation(this.maps);
  }

}
