import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {

  idPhoto: number;
  photo:any= {};
  loading = true;

  constructor( private aRoute: ActivatedRoute, private userService: UserService) { 

    const param =this.aRoute.snapshot.paramMap.get('id');
    this.idPhoto = param?+param:0;
   }
  

  ngOnInit(): void {
    this.getphotosId()

}

getphotosId():void {
    
  this.userService.getIdPhotos(this.idPhoto).subscribe(data =>{
  
    this.photo = data;
    this.loading = false;
    console.log(this.photo)
  
  })
}



}
