import { Component, OnInit } from '@angular/core';
import {Tour} from "../../../model/Tour";
import {TourService} from "../../service/tour.service";

@Component({
  selector: 'app-tour-list',
  templateUrl: './tour-list.component.html',
  styleUrls: ['./tour-list.component.css']
})
export class TourListComponent implements OnInit {
  search!: string;
  tours: Tour[] = [];
  constructor(private tourService: TourService) {

  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.tourService.getAll().subscribe(tours => {
      this.tours = tours;
    })
  }

  filter(search:string) {
    this.tourService.getAll().subscribe(tours => {
      let toursSearch: Tour[] = [];
      for (const tour of tours) {
        if (tour.title?.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
          .replace(/đ/g, 'd').replace(/Đ/g, 'D').includes(search.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
            .replace(/đ/g, 'd').replace(/Đ/g, 'D'))) {
          toursSearch.push(tour)
        }
        this.tours = toursSearch;
      }
    });
  }

}

