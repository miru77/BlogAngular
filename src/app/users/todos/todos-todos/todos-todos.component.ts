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

  filtroEstadoCompleto() {
   
    this.todos = this.todos.filter(todo => todo.completed === true);
      this.loading = false;

    }
    filtroEstadoInCompleto() {
   
      this.todos = this.todos.filter(todo => todo.completed === false);
        this.loading = false;
  
      }

      filtroTodos() {
   
        this.getTodos();
    
        }

}
