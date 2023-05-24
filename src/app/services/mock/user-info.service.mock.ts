import { UserInfo } from "src/app/models/user-info.model";
import { IUserInfoService } from "../abstract/user-info.service.abstract";
import { Injectable } from "@angular/core";

@Injectable()
export class MockUserService implements IUserInfoService{
    getUserInfos(): UserInfo[] {
        let result:UserInfo[]=[
            {
                id:"test1",
                email:"test1@gmail.com",
                name:"test1",
                passwor:"pass1",
                phoneNumber:"1234"
            },
            {
                id:"test2",
                email:"test2@gmail.com",
                name:"test2",
                passwor:"pass2",
                phoneNumber:"1234"
            }
        ]
        return result;
    }

}