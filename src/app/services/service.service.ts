import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) {}
   options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd899f6047fmsh28ed50c799c6e0cp10a675jsn6affd659127a',
		'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
	}
};
  // You have to configure your own api host and api keys for this service
   getWeatherData(cityName: string){
      return this.http.get<any>("https://open-weather13.p.rapidapi.com/city/"+cityName,{
      headers: new HttpHeaders().set('API-Host','Host value' ).set('API-Key','API KEY VALUE'), 
      // params: new HttpParams().set("landon",cityName)
    } )
    
  
  }
}
