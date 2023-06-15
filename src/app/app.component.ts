import { Component, OnInit } from '@angular/core';
import { ServiceService } from './services/service.service';
import { NgModule } from '@angular/core';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faDroplet } from '@fortawesome/free-solid-svg-icons';
import { faTemperatureQuarter } from '@fortawesome/free-solid-svg-icons';
import { faTemperatureFull } from '@fortawesome/free-solid-svg-icons';
import { faWind} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {

  constructor(private ServiceService: ServiceService){
  
  }

weatherData?: any;
  ngOnInit(): void {
   this.getWeatherData(this.cityName);
   this.cityName = "";
  
  }

  cityName: string = "Wellington";
  private getWeatherData(cityName: string){
   this.ServiceService.getWeatherData(cityName).subscribe({next:(res)=>{ 
      this.weatherData = res;
      console.log(res);
      
      
    }
    })
  
  }
  onSubmit(){
  this.getWeatherData(this.cityName);
  this.cityName = "";
  }


  title = 'weather_app_Angular';
  icon = faCoffee;
  faDroplet = faDroplet;
  faTemperatureQuarter = faTemperatureQuarter;
  faTemperatureFull= faTemperatureFull;
  faWind = faWind;
}
