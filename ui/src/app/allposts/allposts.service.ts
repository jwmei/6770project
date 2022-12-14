import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AllPostsService {

  // private url = 'http://127.0.0.1:5011';
  private url = 'http://54.226.205.228:5011';
	constructor(private http: HttpClient){}

  getAllPosts(owner_id:string){
    return this.http.get(this.url + '/' + owner_id + '/allposts');
  }
}