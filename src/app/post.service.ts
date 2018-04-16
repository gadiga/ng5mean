import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Post } from "./post";

@Injectable()
export class PostService {

  private readonly getUrl = "/api/posts";
  private readonly getDetailsUrl = "/api/details/";
  private readonly postUrl = "/api/posts";

  result: any;

  constructor(private _http: Http) { }

  getPosts (){
    return this._http.get(this.getUrl)
        .map(result => this.result = result.json())
  }

  getPost (id: String){
    return this._http.get(this.getDetailsUrl + id)
        .map(result => this.result = result.json())
  }

  createPost (newPost: Post){
    console.log("posted data");
    let headers = new Headers({
      'Content-Type': "application/json"
    });
    let options = new RequestOptions({
          headers: headers
        });
    return this._http.post(this.postUrl, JSON.stringify(newPost), options)
        .map(result => this.result = result.json())
  }

}
