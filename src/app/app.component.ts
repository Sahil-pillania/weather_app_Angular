import { Component } from '@angular/core';

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

export class AppComponent {
  title = 'weather_app_Angular';
  icon = faCoffee;
  faDroplet = faDroplet;
  faTemperatureQuarter = faTemperatureQuarter;
  faTemperatureFull= faTemperatureFull;
  faWind = faWind;
}
