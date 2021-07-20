import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  idUser: number;
  albums:any[] = [];
  loading = true;
  filterAlbums = '';

  constructor(private aRoute: ActivatedRoute, private userService: UserService) { 

    const param =this.aRoute.snapshot.paramMap.get('id');
    this.idUser = param?+param:0;

  }

  ngOnInit(): void {
    this.getPostIdUsuario(this.idUser)
  }

  getPostIdUsuario(id :number):void {

    this.userService.getAlbumsIdUsers(id).subscribe(data =>{
      this.albums = data;
      this.loading = false;
    

    })
  }

}
