import { Component, OnInit } from '@angular/core';
import { IUserInfoService } from '../services/abstract/user-info.service.abstract';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  userForm = new FormGroup({
    name:new FormControl("",Validators.required),
    email:new FormControl("",[Validators.email,Validators.required]),
    password:new FormControl("",Validators.required),
    phone:new FormControl("",Validators.required)
  });
  userInfoId:string = "";
  isAddForm:boolean=true;
constructor(private userInfoService:IUserInfoService,private activatedRoute:ActivatedRoute,private router:Router){}
  ngOnInit(): void {
    this.userInfoId = this.activatedRoute.snapshot.params["id"];
    if(this.userInfoId){
      this.isAddForm = false;
      this.userInfoService.getUserInfoById(this.userInfoId).subscribe(res=>{
        if(!res.hasError){
          this.userForm.setValue({
            name:res.result.name,
            email:res.result.email,
            password:res.result.password,
            phone:res.result.phone
          })
        }
      })
    }
  }
  handelSubmit(){
    if(this.isAddForm){
      this.userInfoService.addUserInfo(`${this.userForm.get("name")?.value}`,
      `${this.userForm.get("email")?.value}`,
      `${this.userForm.get("password")?.value}`,
      `${this.userForm.get("phone")?.value}`).subscribe(res=>{
        if(!res.hasError){
          this.router.navigate(["/"])
        }
      }
        )
    }else{
      this.userInfoService.updateUserInfo(this.userInfoId,`${this.userForm.get("name")?.value}`,
      `${this.userForm.get("email")?.value}`,
      `${this.userForm.get("password")?.value}`,
      `${this.userForm.get("phone")?.value}`).subscribe(res=>{
        if(!res.hasError){
          this.router.navigate(["/"])
        }
      }
        )
    }
  }
}
