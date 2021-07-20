import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ActivatedRoute } from '@angular/router';
 

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  idAlbum: number;
  photos:any[] = [];
  loading = true;


  constructor( private aRoute: ActivatedRoute, private userService: UserService) {
    const param =this.aRoute.snapshot.paramMap.get('id');
    this.idAlbum = param?+param:0;
   }

  ngOnInit(): void {
    this.getphotosIdAlbum(this.idAlbum)
  }

  getphotosIdAlbum(id :number):void {
    
    this.userService.getPhotosIdAlbum(id).subscribe(data =>{
    
      this.photos = data;
      this.loading = false;
    
    })
  }

 


}
