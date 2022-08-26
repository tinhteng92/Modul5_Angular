import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validator, Validators} from "@angular/forms";
import {TourService} from "../../service/tour.service";
import {Router} from "@angular/router";
import {
  logExperimentalWarnings
} from "@angular-devkit/build-angular/src/builders/browser-esbuild/experimental-warnings";

@Component({
  selector: 'app-tour-creat',
  templateUrl: './tour-creat.component.html',
  styleUrls: ['./tour-creat.component.css']
})
export class TourCreatComponent implements OnInit {
  creatForm: FormGroup = new FormGroup({
    // id: new FormControl(),
    title: new FormControl("", Validators.required),
    price: new FormControl("", Validators.required),
    description: new FormControl("", Validators.required)

  })
  constructor(private tourService: TourService, private router: Router) { }

  ngOnInit(): void {
  }

  submit(){
    const tour = this.creatForm.value;
    this.tourService.saveTour(tour).subscribe(() =>{
      alert("Add new successful!");
      this.router.navigate(['']);
      this.creatForm.reset();

    }, e => console.log(e));
  }


}
