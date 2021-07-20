import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';
 

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  idUser: number;
  posts:any[] = [];
  loading = true;
  filterPost = '';



  constructor(private aRoute: ActivatedRoute, private userService: UserService) {
    const param =this.aRoute.snapshot.paramMap.get('id');
     this.idUser = param?+param:0;

   }

  ngOnInit(): void {
    this.getPostIdUsuario( this.idUser)
  }

  getPostIdUsuario(id :number):void {
    
    this.userService.getPostsIdUser(id).subscribe(data =>{
    
      this.posts = data;
      this.loading = false;
      console.log( this.posts)

    })
  }

  

}
