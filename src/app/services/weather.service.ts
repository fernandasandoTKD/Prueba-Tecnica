import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class WeatherService {
 URL: string ="";
 apiKey: string ="f95b410acef325805a3c4d74d0c8833d";
  constructor( private httpClient:HttpClient) { 
    this.URL= `https://api.openweathermap.org/data/2.5/weather?appid=${this.apiKey}&units=metric&q=`;
  }
  getWeather(cityName: string){
   return this.httpClient.get(`${this.URL}${cityName}`)
  }
}
