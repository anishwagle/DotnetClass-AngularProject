import { Observable } from "rxjs";
import { Response } from "src/app/models/response.model";

export abstract class IUserInfoService{
    abstract  getUserInfos(): Observable<Response>;
    abstract  getUserInfoById(id:string): Observable<Response>;
    abstract  deleteUserInfoBy(id:string): Observable<Response>;
    abstract  addUserInfo(name:string,email:string,password:string,phone:string): Observable<Response>;
    abstract  updateUserInfo(id:string,name:string,email:string,password:string,phone:string): Observable<Response>;
}