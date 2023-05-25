import { Observable } from "rxjs";
import { Response } from "src/app/models/response.model";

export abstract class IUserInfoService{
    abstract  getUserInfos(): Observable<Response>;
}