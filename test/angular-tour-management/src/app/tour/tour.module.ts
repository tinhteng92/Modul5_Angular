import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TourRoutingModule } from './tour-routing.module';
import {TourListComponent} from "./tour-list/tour-list.component";
import {TourEditComponent} from "./tour-edit/tour-edit.component";
import {TourCreatComponent} from "./tour-creat/tour-creat.component";
import {TourDeleteComponent} from "./tour-delete/tour-delete.component";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { TourViewComponent } from './tour-view/tour-view.component';


@NgModule({
  declarations: [
    TourListComponent,
    TourEditComponent,
    TourCreatComponent,
    TourDeleteComponent,
    TourViewComponent
  ],
  imports: [
    CommonModule,
    TourRoutingModule,
    ReactiveFormsModule
  ]
})
export class TourModule { }
