import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoC0322G1Component } from './demo-c0322-g1.component';

describe('DemoC0322G1Component', () => {
  let component: DemoC0322G1Component;
  let fixture: ComponentFixture<DemoC0322G1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoC0322G1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoC0322G1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
