import { Component, Inject, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userId: number | undefined;
  user:any= {};

  constructor(@Inject(MAT_DIALOG_DATA) public data: number, private userService: UserService) { }

  ngOnInit(): void {

   
    this.userId = this.data;
    this.getIdUsuario()
  }

  getIdUsuario():void {
    
    this.userService.getIdUser(this.data).subscribe(data =>{
    
      this.user = data;
  
    })
  }

}
