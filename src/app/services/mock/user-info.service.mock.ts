import { UserInfo } from "src/app/models/user-info.model";
import { Response } from "src/app/models/response.model";
import { IUserInfoService } from "../abstract/user-info.service.abstract";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class MockUserService implements IUserInfoService{
    getUserInfos(): Observable<Response> {
        let result:UserInfo[]=[
            {
                id:"test1",
                email:"test1@gmail.com",
                name:"test1",
                password:"pass1",
                phone:"1234"
            },
            {
                id:"test2",
                email:"test2@gmail.com",
                name:"test2",
                password:"pass2",
                phone:"1234"
            }
        ]
        let response = new Observable<Response>(x=>{
            x.next({
                hasError:false,
                result:result
            })
            x.complete()
        })
        return response;
    }

}