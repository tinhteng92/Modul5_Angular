import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {TourService} from "../../service/tour.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Tour} from "../../../model/Tour";

@Component({
  selector: 'app-tour-view',
  templateUrl: './tour-view.component.html',
  styleUrls: ['./tour-view.component.css']
})
export class TourViewComponent implements OnInit {
  // viewForm!: FormGroup;
  id!: any;
  viewTour!: Tour;

  // tour: Tour = new Tour ( "", 0, "");
  constructor(private tourService: TourService, private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = paramMap.get('id');
      // alert(paramMap.get('id'));
      // this.getTour(this.id);

      this.tourService.findById(this.id).subscribe(tour => {
        this.viewTour = tour;
      })
    });
  }

  ngOnInit(): void {
  }

}
//   getTour(id: any) {
//     return this.tourService.findById(id).subscribe(tour => {
//       console.log(tour)
//       // this.tour = tour;
//       this.viewForm = new FormGroup({
//         title: new FormControl(tour.title),
//         price: new FormControl(tour.price),
//         description: new FormControl(tour.description)
//       });
//     });
//   }
// }
