import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { PostDetailsComponent } from './post-details/post-details.component';

const routes: Routes = [
  {path: "", pathMatch: 'full', redirectTo:"/users"},
  {path: "users", component: UsersListComponent},
  {path: "posts", component: PostsListComponent},
  {path: "posts/:id", component: PostDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
