import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodDrinks } from './food-drinks';

describe('FoodDrinks', () => {
  let component: FoodDrinks;
  let fixture: ComponentFixture<FoodDrinks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoodDrinks]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodDrinks);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
