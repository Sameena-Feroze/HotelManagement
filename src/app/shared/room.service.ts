import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Room } from './room';
import { Category } from './category';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
rooms:Room[]
category:Category[];
formData:Room=new Room();
  constructor(private httpClient:HttpClient) { }

  //get all posts --1
  getAllRooms():Observable<any> {
    
    return this.httpClient.get(environment.apiUrl+'/api/roomno');
  
}

  //2nd method
bindListRooms(){
  this.httpClient.get(environment.apiUrl+'/api/roomno')
  .toPromise().then(
    response=>this.rooms=response as Room[] );
    
  }

  //get all categories
  bindListCategories(){
    this.httpClient.get(environment.apiUrl+'/api/category/getallcategories')
    .toPromise().then(
      response=>this.category=response as Category[] );
      
    }

  //get post by id
getRoom(id:number):Observable<any>{
  return this.httpClient.get(environment.apiUrl+'/api/roomno/'+id);
}

  //insert
  insertRoom(room:Room):Observable<any>{
    return this.httpClient.post(environment.apiUrl+'/api/roomno/',room);
  }

  //update
  updateRoom(room:Room):Observable<any>{
    return this.httpClient.put(environment.apiUrl+'/api/roomno/',room);
  }

  //delete
  deleteRoom(id : number){
    return this.httpClient.delete(environment.apiUrl+'/api/roomno/'+id);
  }
}
