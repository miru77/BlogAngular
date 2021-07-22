import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutComponent } from './layout/layout.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { MessageConfirmComponent } from './layout/message-confirm/message-confirm.component';
import { AngularMaterialModule } from './layout/angular-material/angular-material.module';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { CardComponent } from './posts/card/card.component';
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './users/user/user.component';
import { CommentsComponent } from './posts/comments/comments.component';
import { PostsTodosComponent } from './posts/posts-todos/posts-todos.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AlbumsComponent } from './albums/albums.component';
import { CardsAlbumsComponent } from './albums/cards-albums/cards-albums.component';
import { AlbumsTodosComponent } from './albums/albums-todos/albums-todos.component';
import { PhotosComponent } from './albums/photos/photos.component';
import { PhotoComponent } from './albums/photos/photo/photo.component';
import { TodosComponent } from './users/todos/todos.component';
import { CardTodoComponent } from './users/todos/card-todo/card-todo.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    NavbarComponent,
    FooterComponent,
    MessageConfirmComponent,
    UsersComponent,
    PostsComponent,
    CardComponent,
    FilterPipe,
    UserComponent,
    CommentsComponent,
    PostsTodosComponent,
    AlbumsComponent,
    CardsAlbumsComponent,
    AlbumsTodosComponent,
    PhotosComponent,
    PhotoComponent,
    TodosComponent,
    CardTodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
