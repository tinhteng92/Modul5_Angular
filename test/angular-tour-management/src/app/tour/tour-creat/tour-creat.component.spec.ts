import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourCreatComponent } from './tour-creat.component';

describe('TourCreatComponent', () => {
  let component: TourCreatComponent;
  let fixture: ComponentFixture<TourCreatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TourCreatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TourCreatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
