import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponentComponent } from './first-component/first-component.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';

const routes: Routes = [
  {
    path:"add",
    component:UserFormComponent
  },
  {
    path:"edit/:id",
    component:UserFormComponent
  },
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
