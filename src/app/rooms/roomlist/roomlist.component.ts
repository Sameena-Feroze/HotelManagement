import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoomService } from 'src/app/shared/room.service';
@Component({
  selector: 'app-roomlist',
  templateUrl: './roomlist.component.html',
  styleUrls: ['./roomlist.component.scss']
})
export class RoomlistComponent implements OnInit {

  //declare variable
  page:number=1;
  filter:string;
  constructor(public roomService:RoomService,private router:Router) { }

  ngOnInit(): void {
    console.log("welcome to life cycle hook");
    this.GetRooms();
    this.roomService.bindListRooms();


  }


GetRooms(){
    this.roomService.getAllRooms().subscribe(
      response=>{
        console.log(response);
      },
   
      error =>{
      console.log("Something is wrong");
      console.log(error);
      }
    );  
    }

//delete post
deleteRoom(RoomNoId :number){
  if(confirm('Are you sure, you want to DELETE this record')){
     this.roomService.deleteRoom(RoomNoId).subscribe(
      response =>{
      this.roomService.bindListRooms();
      },
      error=>{
      console.log(error);
       }
     );
 } }}
