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

  getPosts(): Observable<any> {
    return this.http.get<any>(this.url  + '/' + 'posts' )
  }

  getPostsIdUser(id: number): Observable<any> {
    return this.http.get<any>(this.url + '/' + 'users' + '/' + id + '/' +'posts')
  }

  getIdUser(id: number): Observable<any> {
    return this.http.get<any>(this.url + '/' + 'users' + '/' + id)
  }

  getPostsIdComments(id: number): Observable<any> {
    return this.http.get<any>(this.url + '/' + 'posts' + '/' + id + '/' +'comments')
  }

  getAlbumsIdUsers(id: number): Observable<any> {
    return this.http.get<any>(this.url + '/' + 'users' + '/' + id + '/' +'albums')
  }
  getAlbums(): Observable<any> {
    return this.http.get<any>(this.url  + '/' + 'albums' )
  }

  getPhotosIdAlbum(id: number): Observable<any> {
    return this.http.get<any>(this.url + '/' + 'albums' + '/' + id + '/' +'photos')
  }

  getIdPhotos(id: number): Observable<any> {
    return this.http.get<any>(this.url + '/' + 'photos' + '/' + id)
  }

  getTodosIdUser(id: number): Observable<any> {
    return this.http.get<any>(this.url + '/' + 'users' + '/' + id + '/' +'todos')
  }
 
  
}
