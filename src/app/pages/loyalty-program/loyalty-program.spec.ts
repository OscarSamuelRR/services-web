import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoyaltyProgram } from './loyalty-program';

describe('LoyaltyProgram', () => {
  let component: LoyaltyProgram;
  let fixture: ComponentFixture<LoyaltyProgram>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoyaltyProgram]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoyaltyProgram);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
