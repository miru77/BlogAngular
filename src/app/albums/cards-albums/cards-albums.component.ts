import { Component, Input, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { UserComponent } from '../../users/user/user.component';

@Component({
  selector: 'app-cards-albums',
  templateUrl: './cards-albums.component.html',
  styleUrls: ['./cards-albums.component.css']
})
export class CardsAlbumsComponent implements OnInit {

  @Input() album:any;

  title : string | undefined;
  userId: number | undefined;
  idAlbum: number | undefined;

  constructor( public dialog: MatDialog) { }

  ngOnInit(): void {
    this.title = this.album.title;
    this.userId = this.album.userId;
    this.idAlbum = this.album.id;
  }

  openDialog():  void {
    this.dialog.open(UserComponent, {
     
     width: '500px', 
     data: this.userId
   });

   //this.dialog.open(UserComponent);
 }

}
