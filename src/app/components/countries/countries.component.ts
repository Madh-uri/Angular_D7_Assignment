import { Component, OnInit } from '@angular/core';

//importing countries service here
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit{

  //global variable
  public data:any;

  //angular will di DI here
  constructor(private _service:CountriesService){}

  //logic
  ngOnInit():void{

    this._service.getCountries().subscribe(
      (response:any)=>{
        this.data=response;
      },
      (error:any)=>{
        console.error(error)
      }
    ) //end of subscribe
  }
}
