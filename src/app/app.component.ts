import { Component, OnInit } from '@angular/core';
import { WeatherService} from './services/weather.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  weather: any = <any>{};

  constructor( private weatherService:WeatherService){

  }
  ngOnInit() {
    
  }


  getWeather(cityName:string){
    this.weatherService.getWeather(cityName)
    .subscribe(
      res => {
        console.log(res);
        this.weather = res;
      },
      err => {
        console.log(err);
      }
    );
  }
  submitLocation(cityName:HTMLSelectElement){
    this.getWeather(cityName.value);
    cityName.focus();
    return false;
  }
}
