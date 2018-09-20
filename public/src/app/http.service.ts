import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) {}

  getFarm(id){
    return this._http.post(`/noob/${id}`, id);
  }

  getCave(id){
    return this._http.post(`/cave/${id}`, id);
  }

  getHouse(id){
    return this._http.post(`/house/${id}`, id);
  }

  getCasino(id){
    return this._http.post(`/casino/${id}`, id);
  }

  getAll(){
    return this._http.get('/index');
  }

}
