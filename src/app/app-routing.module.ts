import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
///Components
import {AddRestoComponent} from './add-resto/add-resto.component'
import {ListRestoComponent} from './list-resto/list-resto.component'
import {UpdateRestoComponent} from './update-resto/update-resto.component'

///Paths
const routes: Routes = [
  {
    component:AddRestoComponent,
    path: 'add'
  },
  {
    component:UpdateRestoComponent,
    path: 'update/:id'
  },
  {
    component:ListRestoComponent,
    path: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
