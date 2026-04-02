import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffersExperiences } from './offers-experiences';

describe('OffersExperiences', () => {
  let component: OffersExperiences;
  let fixture: ComponentFixture<OffersExperiences>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OffersExperiences]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OffersExperiences);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
