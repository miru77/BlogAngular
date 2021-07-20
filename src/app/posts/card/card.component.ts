import { Component, Input, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { UserComponent } from '../../users/user/user.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() post:any;

  userId: number | undefined;
  idPost: number | undefined;
  title : string | undefined;
  body : string | undefined;

  constructor( public dialog: MatDialog) { }

  ngOnInit(): void {

    this.userId = this.post.userId;
    this.title = this.post.title;
    this.idPost = this.post.id;
    this.body = this.post.body;
    
  }

  openDialog():  void {
     this.dialog.open(UserComponent, {
      
      width: '500px', 
      data: this.userId
    });

    //this.dialog.open(UserComponent);
  }

  

}
