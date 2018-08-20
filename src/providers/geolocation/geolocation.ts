import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';
import { GOOGLE_API_GEOCODE } from '../../app/app.apis';

@Injectable()
export class GeolocationProvider {

  constructor(public http: HttpClient, private geolocation: Geolocation) {
    console.log('Hello GeolocationProvider Provider');
  }

  trackUserLocation(): Promise<any> {
    return this.geolocation.getCurrentPosition()
    .then((res) => {
        res.coords.latitude, res.coords.longitude
    })
    .catch((err) => {
      console.log('Error getting location', err);
    })
  }

  addressFrom(latitude: string, longitude: string, format: string): any {
    let request = GOOGLE_API_GEOCODE + `${format}?latlng=${latitude},${longitude}&sensor=true`;
    return new Promise(resolve => {
      this.http.get(request)
      .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

}
