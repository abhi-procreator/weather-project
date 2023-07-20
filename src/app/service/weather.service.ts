import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) {

  }

  url = 'https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=3341f8428bd1d5c086b960c5bc63d5aa'

  getWeatherData() {
    return this.http.get(this.url);
  }


}
