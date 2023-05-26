import { Injectable } from "@angular/core";
import { IUserInfoService } from "./abstract/user-info.service.abstract";
import { Response } from "../models/response.model";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment.development";
import { Observable } from "rxjs";
import { UserInfo } from "../models/user-info.model";

@Injectable()
export class UserInfoService implements IUserInfoService{
    baseUrl = environment.baseUrl;
    constructor(private httpClient : HttpClient){}
     getUserInfoById(id: string): Observable<Response> {
        let response = this.httpClient.get<Response>(`${this.baseUrl}/api/Home/get/${id}`)
        return response;
    }
     deleteUserInfoBy(id: string): Observable<Response> {
        let response = this.httpClient.get<Response>(`${this.baseUrl}/api/Home/delete/${id}`)
        return response;
    }
     addUserInfo(name: string, email: string, password: string, phone: string): Observable<Response> {
        let req:UserInfo = {
            name:name,
            email:email,
            password:password,
            phone:phone
        }
        let response = this.httpClient.post<Response>(`${this.baseUrl}/api/Home/add`,req)
        return response;
    }
     updateUserInfo(id: string, name: string, email: string, password: string, phone: string): Observable<Response> {
        let req:UserInfo = {
            id:id,
            name:name,
            email:email,
            password:password,
            phone:phone
        }
        let response = this.httpClient.post<Response>(`${this.baseUrl}/api/Home/add`,req)
        return response;
    }
     getUserInfos(): Observable<Response> {
        let response = this.httpClient.get<Response>(`${this.baseUrl}/api/Home/get`)
        return response;
    }

}