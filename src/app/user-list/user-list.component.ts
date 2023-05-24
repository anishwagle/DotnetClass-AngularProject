import { Component, OnInit } from '@angular/core';
import { UserInfo } from '../models/user-info.model';
import { IUserInfoService } from '../services/abstract/user-info.service.abstract';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit{
userInfos:UserInfo[]=[];
constructor(private userInfoService:IUserInfoService){}
  ngOnInit(): void {
    this.userInfos = this.userInfoService.getUserInfos();
  }

}
