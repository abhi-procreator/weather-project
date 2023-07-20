import { Component, OnInit } from '@angular/core';
import { WeatherService } from './service/weather.service';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'weather';

  weatherData:any;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {

    this.weatherService.getWeatherData().subscribe(res=>{
      console.log(res);
       this.weatherData=res;
    })
  }


}
