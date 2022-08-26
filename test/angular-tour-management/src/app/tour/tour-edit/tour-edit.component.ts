import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {TourService} from "../../service/tour.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-tour-edit',
  templateUrl: './tour-edit.component.html',
  styleUrls: ['./tour-edit.component.css']
})
export class TourEditComponent implements OnInit {
  editForm!: FormGroup;
  id!: any;
  tour!: any;

  constructor(private tourService: TourService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = paramMap.get('id');
      console.log(this.id);
      this.getTour(this.id);

      console.log(this.getTour(this.id));
    });
  }

  getTour(id: number) {
    return this.tourService.findById(id).subscribe(tour => {
      console.log(tour)
      this.editForm = new FormGroup( {
        title: new FormControl(tour.title, Validators.required),
        price: new FormControl(tour.price, Validators.required),
        description: new FormControl(tour.description, Validators.required)
      });
    });

  }

  ngOnInit(): void {
  }

  updateTour(id: number){
    const tour = this.editForm.value;
    this.tourService.updateTour(id, tour).subscribe(() =>{
      alert("Update successful!")
      this.router.navigate([""]);
    });

  }
}
