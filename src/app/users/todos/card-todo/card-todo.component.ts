import { Component, Input, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-card-todo',
  templateUrl: './card-todo.component.html',
  styleUrls: ['./card-todo.component.css']
})
export class CardTodoComponent implements OnInit {

  @Input() todo:any;

  userId: number | undefined;
  title : string | undefined;
  completed: boolean | undefined;
  favoriteSeason: string | undefined;

  constructor(public snackBar: MatSnackBar) { }

  ngOnInit(): void {

    this.userId = this.todo.userId;
    this.title = this.todo.title;
    this.completed = this.todo.completed;
  }

  cambiarEstadoCompletdo() {
    this.completed = ! this.completed ;
    this.snackBar.open('El estado fue cambiado con exito!','', {
      duration: 3000
    })

  }

}

