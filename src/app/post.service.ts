import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IPost } from "./interfaces";

@Injectable({
    providedIn: 'root'
})
export class PostService {
    private readonly baseUrl = 'api/posts';

    constructor(private http: HttpClient){}

    getPosts() {
        return this.http.get<IPost[]>(this.baseUrl);
    }

    getPost(postId: number) {
        return this.http.get<IPost>(this.baseUrl + '/' + postId);
    }
}