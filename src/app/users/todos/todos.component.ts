import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  idUser: number;
  todos:any[] = [];
  loading = true;
  filterAlbums = '';

  constructor(private aRoute: ActivatedRoute, private userService: UserService) { 
    const param =this.aRoute.snapshot.paramMap.get('id');
    this.idUser = param?+param:0;

  }

  ngOnInit(): void {
    this.getTodosIdUsuario(this.idUser)
   
  }

  getTodosIdUsuario(id :number):void {

    this.userService.getTodosIdUser(id).subscribe(data =>{
      this.todos = data;
      this.loading = false;
      

    })
  }

}
