import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';

@Injectable()
export class PostService {

  // private url = 'http://127.0.0.1:5011';
  private url = 'http://54.226.205.228:5011';
  
	constructor(private http: HttpClient){

	}

  getPost(owner_id:string){
    return this.http.get(this.url + '/' + owner_id + '/posts');
  }
}