import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodDrinksContent } from './food-drinks-content';

describe('FoodDrinksContent', () => {
  let component: FoodDrinksContent;
  let fixture: ComponentFixture<FoodDrinksContent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoodDrinksContent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodDrinksContent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
