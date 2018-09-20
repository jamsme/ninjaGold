import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private _httpService: HttpService){}

  gold = {};

  ngOnInit(){
    this.makeNoob();
  }
  makeNoob() {
    let observable = this._httpService.getAll();
    observable.subscribe((data: any) => {
      console.log("all", data);
      this.gold = data;
    });
  }
  onButtonClickFarm(id) { 
    let observable = this._httpService.getFarm(id);
    observable.subscribe((data:any) => {
      console.log("Farm number", data)
      this.gold = data;
    });
  }
  onButtonClickCave(id) { 
    let observable = this._httpService.getCave(id);
    observable.subscribe((data:any) => {
      console.log("Cave number", data)
      this.gold = data;
    });
  }
  onButtonClickHouse(id) { 
    let observable = this._httpService.getHouse(id);
    observable.subscribe((data:any) => {
      console.log("House number", data)
      this.gold = data;
    });
  }
  onButtonClickCasino(id) { 
    let observable = this._httpService.getCasino(id);
    observable.subscribe((data:any) => {
      console.log("Casino number", data)
      this.gold = data;
    });
  }
}
