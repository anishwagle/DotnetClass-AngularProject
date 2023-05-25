import { Injectable } from "@angular/core";
import { IUserInfoService } from "./abstract/user-info.service.abstract";
import { Response } from "../models/response.model";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment.development";
import { Observable } from "rxjs";

@Injectable()
export class UserInfoService implements IUserInfoService{
    baseUrl = environment.baseUrl;
    constructor(private httpClient : HttpClient){}
     getUserInfos(): Observable<Response> {
        let response = this.httpClient.get<Response>(`${this.baseUrl}/api/Home/get`)
        return response;
    }

}