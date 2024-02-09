import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IUser } from "./interfaces";

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private readonly baseUrl = 'api/users';

    constructor(private http: HttpClient) {}

    getUsers() {
        return this.http.get<IUser[]>(this.baseUrl);
    }

}