import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelRules } from './hotel-rules';

describe('HotelRules', () => {
  let component: HotelRules;
  let fixture: ComponentFixture<HotelRules>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HotelRules]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotelRules);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
