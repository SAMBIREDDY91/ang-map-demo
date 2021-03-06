import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { OrgMapInfo } from './models/organization/OrgMapInfo';

@Injectable({
  providedIn: 'root'
})
export class InfoService {
  org = [
    {
      'id' : '0001',
      'name': 'org1',
      'latitude': -0.131049,
      'longitude': 51.498568,
      'info': 'organization1'
    },
    {
      'id' : '0001',
      'name': 'org1',
      'latitude': -0.107049,
      'longitude': 51.498568,
      'info': 'organization1'
    }
  ];

  listIncidents = [
    {
      'id' : '0001',
      'name': 'Incident1',
      'latitude': -0.12066,
      'longitude': 51.498568,
      'info': 'InfoIncident1',
      'type': 'fire'
    },
    {
      'id' : '0002',
      'name': 'Incident2',
      'latitude': -0.14161,
      'longitude': 51.49509,
      'info': 'InfoIncident2',
      'type': 'accident'
    },
    {
      'id' : '0003',
      'name': 'Incident3',
      'latitude': -0.14161,
      'longitude': 51.20509,
      'info': 'InfoIncident3',
      'type': 'accident'
    },
    {
      'id' : '0004',
      'name': 'Incident4',
      'latitude': -0.14161,
      'longitude': 41.49509,
      'info': 'InfoIncident4',
      'type': 'fire'
    },
    {
      'id' : '0005',
      'name': 'Incident5',
      'latitude': -0.14161,
      'longitude': 51.10509,
      'info': 'InfoIncident5',
      'type': 'accident'
    },
    {
      'id' : '0006',
      'name': 'Incident6',
      'latitude': -0.13461,
      'longitude': 51.49509,
      'info': 'InfoIncident6',
      'type': 'fire'
    },
    {
      'id' : '0007',
      'name': 'Incident7',
      'latitude': -1.14161,
      'longitude': 41.49509,
      'info': 'InfoIncident7',
      'type': 'fire'
    },
    {
      'id' : '0008',
      'name': 'Incident8',
      'latitude': -1.24161,
      'longitude': 51.10509,
      'info': 'InfoIncident8',
      'type': 'accident'
    },
    {
      'id' : '0009',
      'name': 'Incident9',
      'latitude': -1.25461,
      'longitude': 51.49509,
      'info': 'InfoIncident9',
      'type': 'fire'
    }
  ];
  private maps = new BehaviorSubject<any>(this.org);
  mapLocation = this.maps.asObservable();


  private incidents = new BehaviorSubject<any>(this.listIncidents);
  incident = this.incidents.asObservable();

  constructor() { }


  saveMapLocation(orgMapInfo) {
    this.maps.next(orgMapInfo);
  }

  saveIncident(incidentInfo) {
    this.incidents.next(incidentInfo);
  }

}
