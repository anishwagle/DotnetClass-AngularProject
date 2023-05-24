import { Injectable } from "@angular/core";
import { IUserInfoService } from "./abstract/user-info.service.abstract";
import { UserInfo } from "../models/user-info.model";

@Injectable()
export class UserInfoService implements IUserInfoService{
     getUserInfos(): UserInfo[] {
        throw new Error("Method not implemented.");
    }

}