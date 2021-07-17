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
  idPost: number | undefined;
  title : string | undefined;
  body : string | undefined;




  constructor(private aRoute: ActivatedRoute, private userService: UserService) {
    const param =this.aRoute.snapshot.paramMap.get('id');
     this.idUser = param?+param:0;

   }

  ngOnInit(): void {
    this.getPostIdUsuario( this.idUser)
  }

  getPostIdUsuario(id :number):void {
    console.log(id)
    this.userService.getPostsIdUser(id).subscribe(data =>{
      console.log(data)
     

    //  this.idPost = data.id;
      //this.title =  data.title;
      //this.body = data.body;

    })
  }

}
