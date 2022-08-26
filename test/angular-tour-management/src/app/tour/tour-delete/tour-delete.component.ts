import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {TourService} from "../../service/tour.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-tour-delete',
  templateUrl: './tour-delete.component.html',
  styleUrls: ['./tour-delete.component.css']
})
export class TourDeleteComponent implements OnInit {
  deleteForm!: FormGroup
  id!: any;
  constructor(private tourService: TourService, private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = paramMap.get('id');
      this.getTour(this.id);
    });
  }

  ngOnInit(): void {
  }

  getTour(id: number) {
    return this.tourService.findById(id).subscribe(tour => {
      console.log(tour)
      this.deleteForm = new FormGroup( {
        title: new FormControl(tour.title),
        price: new FormControl(tour.price),
        description: new FormControl(tour.description)
      });
    });

  }

  deleteProduct(id: number) {
    this.tourService.deleteTour(id).subscribe(() => {
      this.router.navigate(['']);
    }, e => console.log(e));
  }
}
