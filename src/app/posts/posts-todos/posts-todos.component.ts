import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-posts-todos',
  templateUrl: './posts-todos.component.html',
  styleUrls: ['./posts-todos.component.css']
})
export class PostsTodosComponent implements OnInit {

  posts:any[] = [];
  filterPost = '';


  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.cargarUsuarios()
  }

  cargarUsuarios(): void {
    this.userService.getPosts().subscribe(data => {
    
    this.posts = data;

    console.log(this.posts)

    })
  }

}
