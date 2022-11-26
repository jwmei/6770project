import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Routes, RouterModule } from "@angular/router";
import { AllPostsComponent } from "./allposts.component";

const routes: Routes = [
  { path: '', component: AllPostsComponent }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllPostsRoutingModule { }
