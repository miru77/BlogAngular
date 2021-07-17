import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { UserService } from '../services/user.service';
import { Users } from '../models/usuario';





@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements AfterViewInit, OnInit {

  listUsuarios:[] = [];

  displayedColumns: string[] = ['name',  'website', 'company','companyCatch', 'acciones'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator, { static: false })
  paginator!: MatPaginator;

  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


  constructor(private userService: UserService) { }

  ngOnInit(): void {
  this.cargarUsuarios();

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  
  cargarUsuarios(): void {
    this.userService.getUsuarios().subscribe(data => {
    
    this.listUsuarios = data;
    this.dataSource = new MatTableDataSource(data);

    console.log(this.listUsuarios)

    })
  }

  buscarPosteos(id: number) {

    console.log(id)

  }


}
