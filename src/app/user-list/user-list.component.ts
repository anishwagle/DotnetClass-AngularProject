import { Component, OnInit } from '@angular/core';
import { UserInfo } from '../models/user-info.model';
import { IUserInfoService } from '../services/abstract/user-info.service.abstract';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit{
  displayedColumns: string[] = ['name', 'email', 'password', 'phone','actions'];
  dataSource:UserInfo[] = [];
constructor(private userInfoService:IUserInfoService){}
  ngOnInit(): void {
     this.userInfoService.getUserInfos().subscribe(response=>{
      this.dataSource = response.result;
     });
  }

}
