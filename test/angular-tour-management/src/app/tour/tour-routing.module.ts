import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TourListComponent} from "./tour-list/tour-list.component";
import {TourCreatComponent} from "./tour-creat/tour-creat.component";
import {TourEditComponent} from "./tour-edit/tour-edit.component";
import {TourDeleteComponent} from "./tour-delete/tour-delete.component";
import {TourViewComponent} from "./tour-view/tour-view.component";

const routes: Routes = [{
  path: '',
  component: TourListComponent
},{
  path: 'create',
  component: TourCreatComponent
}, {
  path: 'edit/:id',
  component: TourEditComponent
}, {
  path: 'delete/:id',
  component: TourDeleteComponent
}, {
  path: 'view/:id',
  component: TourViewComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TourRoutingModule { }
