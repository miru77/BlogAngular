import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  idPost: number;
  comments:any[] = [];

  constructor(private aRoute: ActivatedRoute, private userService: UserService) {
    const param =this.aRoute.snapshot.paramMap.get('id');
     this.idPost = param?+param:0;

     console.log( this.idPost)

   }

  ngOnInit(): void {
  }

}
