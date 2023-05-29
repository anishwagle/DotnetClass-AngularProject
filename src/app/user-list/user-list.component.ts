import { Component, OnInit } from '@angular/core';
import { UserInfo } from '../models/user-info.model';
import { IUserInfoService } from '../services/abstract/user-info.service.abstract';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogComponentComponent } from '../delete-dialog-component/delete-dialog-component.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit{
  displayedColumns: string[] = ['name', 'email', 'password', 'phone','actions'];
  dataSource:UserInfo[] = [];

  isLoading = false;
constructor(private userInfoService:IUserInfoService,public dialog: MatDialog,private _snackBar: MatSnackBar){}
  ngOnInit(): void {
     this.initData()
  }
  initData(){
    this.isLoading = true;
    this.userInfoService.getUserInfos().subscribe(response=>{
      this.isLoading = false;
      if(response.hasError){
        this._snackBar.open(`${response.errorMessage}`, "close");
      }
      this.dataSource = response.result;
     });
  }
  handelDelete(id:string){
   const dialogRef = this.dialog.open(DeleteDialogComponentComponent, {
      width: '250px',
      data:id
    });
    dialogRef.afterClosed().subscribe(id=>{
      if(id){
        this.isLoading = true;
        this.userInfoService.deleteUserInfoBy(id).subscribe(res=>{
          this.isLoading =false;
          this._snackBar.open(`Deleted Successfully`, "close");
          if(!res.hasError){
            this.initData()
          }

        })
      }
    })
  }

}
