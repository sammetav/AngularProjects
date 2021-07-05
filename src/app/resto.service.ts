import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RestoService {
url="http://localhost:3000/InventoryItems"
rootUrl="http://localhost:3000/"
  constructor(private http:HttpClient) { }
  //Methods CRUD
  Getlist()
  {
    return this.http.get(this.url)
  }
  saveItem(data:any)
  {

    return this.http.post(this.url,data)
  }
  deleteResto(id:any)
  {
    return this.http.delete(`${this.url}/${id}`)
  }
  getcurrentResto(id:any)
  {
    return this.http.get(`${this.url}/${id}`)
  }
  updateResto(id:any, data:any)
  {
    return this.http.put(`${this.url}/${id}`,data)
  }
}
