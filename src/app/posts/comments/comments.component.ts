import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';



@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements AfterViewInit,  OnInit {

  idPost: number;
  comments:any[] = [];

    displayedColumns: string[] = [ 'name','email', 'body'];
    dataSource = new MatTableDataSource();

    @ViewChild(MatPaginator, { static: false })
  paginator!: MatPaginator;

  @ViewChild(MatSort) sort!: MatSort;
   

  constructor(private aRoute: ActivatedRoute, private userService: UserService) {
    const param =this.aRoute.snapshot.paramMap.get('id');
     this.idPost = param?+param:0;
     console.log( this.idPost)
   }

   ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

   
  ngOnInit(): void {
    this.getCommentsIdPost(this.idPost)
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  getCommentsIdPost(id :number):void {
   
    this.userService.getPostsIdComments(id).subscribe(data =>{
    
      this.comments = data;
      this.dataSource = new MatTableDataSource(data);
      //this.loading = false;
    
     


    })
  }

}
