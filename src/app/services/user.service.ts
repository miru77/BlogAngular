import { Injectable } from '@angular/core';
import { Users } from '../models/usuario';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  url ='https://jsonplaceholder.typicode.com';
  
  

  constructor( private http:HttpClient) { }

  getUsuarios(): Observable<any> {
    return this.http.get<Users>(this.url  + '/' + 'users' )
  }

  getPostsIdUser(id: number): Observable<any> {
    return this.http.get<any>(this.url + '/' + 'users' + '/' + id + '/' +'posts')
  }
}
//https://jsonplaceholder.typicode.com/users/1/posts