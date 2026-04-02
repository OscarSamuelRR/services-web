import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffersExperiencesContent } from './offers-experiences-content';

describe('OffersExperiencesContent', () => {
  let component: OffersExperiencesContent;
  let fixture: ComponentFixture<OffersExperiencesContent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OffersExperiencesContent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OffersExperiencesContent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
