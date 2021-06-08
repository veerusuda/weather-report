import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Weather} from "./weather";

@Injectable({
  providedIn: 'root'
})
export class WeatherReportService {

  constructor(private httpClient:HttpClient) { }
  public getWeatherReport(city: string)
  {
    return this.httpClient.get<Weather>('http://localhost:8080/weather/weather-report/'+city);
  }
}
