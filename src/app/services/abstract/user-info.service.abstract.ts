import { UserInfo } from "src/app/models/user-info.model";

export abstract class IUserInfoService{
    abstract getUserInfos():UserInfo[];
}