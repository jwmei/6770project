import { Component, OnInit } from '@angular/core';
import { AllPostsService } from './allposts.service';
import { Post } from '../models/post.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './allposts.component.html',
  styleUrls: ['./allposts.component.css'],
  providers: [ AllPostsService ]
})
export class AllPostsComponent implements OnInit {
  public allposts : any = [];
  // public owner_id = "";
  public url = this.router.url;
  public username = "";

  constructor(private service: AllPostsService,
              private router: Router) {
  }

  ngOnInit(){
    this.getAllPosts();
  };
  

  getAllPosts(){
    let url = this.router.url;
    this.username = url.split("/")[1];
    console.log(this.username);
    this.service.getAllPosts(this.username).subscribe((response: any) => {
      this.allposts = response;
      console.log('result is ', this.allposts);
    });
  }

  goToAddPost() {
    this.username = this.url.split("/")[1];
    window.location.href = this.username + '/addpost'
  }

  goToMyPosts() {
    this.username = this.url.split("/")[1];
    window.location.href = this.username + '/posts'
  }

  goToBlogPage(blog_id: any) {
    this.username = this.url.split("/")[1];
    window.location.href = this.username + '/posts/' + blog_id;
  }

}
