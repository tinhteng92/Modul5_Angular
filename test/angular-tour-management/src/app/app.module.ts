import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TourListComponent } from './tour/tour-list/tour-list.component';
import { TourEditComponent } from './tour/tour-edit/tour-edit.component';
import { TourCreatComponent } from './tour/tour-creat/tour-creat.component';
import { TourDeleteComponent } from './tour/tour-delete/tour-delete.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
