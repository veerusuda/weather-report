import { Component, OnInit } from '@angular/core';
import {WeatherReportService} from "./weather-report.service";
import {Weather} from "./weather";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'weather-report';
  isCitySelected: boolean = false;

  City: any = ['Beijing', 'Nairobi', 'New York', 'Mumbai', 'Paris', 'Sydney'];

  constructor(
    private weatherReportService: WeatherReportService,
    public weatherReport: Weather
  ) { }

  ngOnInit() {
  }

  onOptionsSelected(city: any) {
    if(city.target.value != '') {
      this.isCitySelected = true;
      this.weatherReportService.getWeatherReport(city.target.value).subscribe(
        response =>{this.weatherReport = response;}
      );
    } else {
      this.isCitySelected = false;
    }
  }

}
