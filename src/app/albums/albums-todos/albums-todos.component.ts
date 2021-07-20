import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-albums-todos',
  templateUrl: './albums-todos.component.html',
  styleUrls: ['./albums-todos.component.css']
})
export class AlbumsTodosComponent implements OnInit {

  albums:any[] = [];
  loading = true;
  filterAlbums = '';

  constructor( private userService: UserService) { }

  ngOnInit(): void {
    this.getAlbums()
  }

  getAlbums():void {

    this.userService.getAlbums().subscribe(data =>{
      this.albums = data;
      this.loading = false;
         


    })
  }


}
