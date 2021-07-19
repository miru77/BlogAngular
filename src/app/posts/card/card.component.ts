import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() post:any;

  idPost: number | undefined;
  title : string | undefined;
  body : string | undefined;

  constructor() { }

  ngOnInit(): void {

    console.log(this.post)

    this.title = this.post.title;
    this.idPost = this.post.id;
    this.body = this.post.body;

    console.log(this.title)
    
  }

}
