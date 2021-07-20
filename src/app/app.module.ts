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
    CommentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
