import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoyaltyProgramSpa } from './loyalty-program-spa';

describe('LoyaltyProgramSpa', () => {
  let component: LoyaltyProgramSpa;
  let fixture: ComponentFixture<LoyaltyProgramSpa>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoyaltyProgramSpa]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoyaltyProgramSpa);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
