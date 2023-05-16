import { Injectable } from '@angular/core';

// this is greyed in color bcz now it is not used
import {HttpClient} from '@angular/common/http'
//Dependency Injection(DI)
@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  //implement the service
  constructor(private _httpClient:HttpClient) { //variable of type HttpClient

    
  }

  public getCountries():any{
    //making a Restful call by using .get, .put, .post, .delete
    //get() method returns an Observable type
    //to get the data out of the Observable 
    return this._httpClient.get("https://restcountries.com/v3.1/all")
  }

}
