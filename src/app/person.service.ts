import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
 export class PersonService {
  // url="http://localhost:3000/persons/";
  url="https://localhost:7143/api/People/";

  constructor(private http:HttpClient) { }
  getList(){
   return this.http.get(this.url+"list");
  }
  savePerson(data:any){
    console.info(data);
    return this.http.post(this.url,data);
  }
  deletePerson(id:any){
    return this.http.delete(`${this.url}${id}`)
   }
   getCurrentPerson(id:any){
    return this.http.get(`${this.url}${id}`)
  }
  updatePerson(id:any, data:any){
    data.id = id;
    return this.http.put(`${this.url}${id}`,data)
  }
}
