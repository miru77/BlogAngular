import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-todos-todos',
  templateUrl: './todos-todos.component.html',
  styleUrls: ['./todos-todos.component.css']
})
export class TodosTodosComponent implements OnInit {

  
  todos:any[] = [];
  loading = true;
  filterAlbums = '';

  constructor( private userService: UserService) { }

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos():void {

    this.userService.getTodos().subscribe(data =>{
      this.todos = data;
      this.loading = false;
      console.log(  this.todos)

    })
  }

}
