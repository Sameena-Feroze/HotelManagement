import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RoomService } from 'src/app/shared/room.service';
 import { ToastrService } from 'ngx-toastr';
 import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {
  roomNoId:number=0;
  constructor(public roomService:RoomService,private route: ActivatedRoute,private toastrService:ToastrService) { }
  // 
  ngOnInit(): void {
    this.roomService.bindListCategories();

    //update or insert
    //get postId from Activate route
    this.roomNoId = this.route.snapshot.params['roomNoId'];
    if (this.roomNoId!= 0 || this.roomNoId!= null) {
      this.roomService.getRoom(this.roomNoId).subscribe(
        result => {
          console.log("Retrieving Get By Id");
          console.log(result);

         
          //inserting to the form from list
          this.roomService.formData = Object.assign({}, result);
        },
        error => {
          console.log(error);
        }
      );}}
    
  //end ngOnInit
  //----submit
  onSubmit(form:NgForm){
    console.log(form.value);
    let addId=this.roomService.formData.roomNoId;
  

  //insert or update----
  if (addId == 0||addId==null) {
    //insert
    this.insertRoomRecord(form);
  }
  else{
    //update
    this.updateRoomRecord(form);
  }
  }

//insert method
insertRoomRecord(form?:NgForm){
  console.log("Inserting a record...");
  this.roomService.insertRoom(form.value).subscribe(
    (result)=>{
      console.log(result);
      this.toastrService.success('Room Record has been inserted','BLOG APP');
      this.resetForm(form);
    },
    (error)=>{
      console.log(error)
    }
    );
  }
  //update method
  updateRoomRecord(form?: NgForm) {
    console.log("Updating a record");
    this.roomService.updateRoom(form.value).subscribe(
      (result) => {
        console.log(result);
        console.log("Updated the record");
        this.toastrService.success('Room Record has been Updated','Hotel management App');
        this.resetForm(form);
      },
      (error) => {
        console.log(error);
      }
    );
  }//end Update post

  
   //clear all contents after submit------initialization 
        resetForm(form?:NgForm){
        if(form!=null){
          form.resetForm();
        }

  }

}
