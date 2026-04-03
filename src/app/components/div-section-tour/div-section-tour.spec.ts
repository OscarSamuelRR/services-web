import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivSectionTour } from './div-section-tour';

describe('DivSectionTour', () => {
  let component: DivSectionTour;
  let fixture: ComponentFixture<DivSectionTour>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DivSectionTour]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DivSectionTour);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
