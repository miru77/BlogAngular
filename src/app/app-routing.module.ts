import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { CommentsComponent } from './posts/comments/comments.component';

const routes: Routes = [
  {path: 'users', component: UsersComponent},
  {path: 'users/:id/posts', component: PostsComponent},
  {path: 'posts/:id/comments', component: CommentsComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
