import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoomComponent } from './rooms/room/room.component';
import { RoomlistComponent } from './rooms/roomlist/roomlist.component';
const routes: Routes = [
  {path:'room', component:RoomComponent},
  {path:'roomlist', component:RoomlistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
