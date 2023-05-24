import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponentComponent } from './first-component/first-component.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  {
    path:"",
    component:UserListComponent
  },
  {
    path:"first",
    component:FirstComponentComponent
  },
  {
    path:"second",
    component:SecondComponent
  },
  {
    path:"third/:id",
    component:ThirdComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
