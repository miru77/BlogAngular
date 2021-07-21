import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { CommentsComponent } from './posts/comments/comments.component';
import { PostsTodosComponent } from './posts/posts-todos/posts-todos.component';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumsTodosComponent } from './albums/albums-todos/albums-todos.component';
import { PhotosComponent } from './albums/photos/photos.component';
import { PhotoComponent } from './albums/photos/photo/photo.component';

const routes: Routes = [
  {path: 'users', component: UsersComponent},
  {path: 'posts', component: PostsTodosComponent},
  {path: 'albums', component: AlbumsTodosComponent},
  {path: 'photos/:id', component: PhotoComponent},
  {path: 'users/:id/posts', component: PostsComponent},
  {path: 'posts/:id/comments', component: CommentsComponent},
  {path: 'users/:id/albums', component: AlbumsComponent},
  {path: 'albums/:id/photos', component: PhotosComponent},
  {path: '', redirectTo:'users', pathMatch: 'full'},
  {path: '**', redirectTo:'users', pathMatch: 'full'},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

PhotoComponent