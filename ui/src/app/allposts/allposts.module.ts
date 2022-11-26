import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AllPostsComponent } from './allposts.component';
import { AllPostsRoutingModule } from "./allposts-routing.module";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AllPostsRoutingModule,
    RouterModule,
    FormsModule,
  ]
})
export class AllPostsModule { }
