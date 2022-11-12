import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPersonComponent } from './add-person/add-person.component';
import { UpdatePersonComponent } from './update-person/update-person.component';
import { ListPersonComponent } from './list-person/list-person.component';

const routes: Routes = [
  {
    component:AddPersonComponent,
    path:'add'
  },
  {
    component:UpdatePersonComponent,
    path:'update/:id'
  },
  {
    component:ListPersonComponent,
    path:'list'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
