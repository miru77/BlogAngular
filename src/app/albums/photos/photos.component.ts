import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ActivatedRoute } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

 

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  idAlbum: number;
  photos:any[] = [];
  loading = true;


  constructor( private aRoute: ActivatedRoute, 
    private userService: UserService, public snackBar: MatSnackBar) 
    {
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

  borrarFhoto(id :number)  {

    this.photos = this.photos.filter(photo => photo.id !==id );
    this.snackBar.open('La imagen fue elimada con exito!','', {
      duration: 3000
    })
      
  }


}
