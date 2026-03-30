import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Laundry } from './laundry';

describe('Laundry', () => {
  let component: Laundry;
  let fixture: ComponentFixture<Laundry>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Laundry]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Laundry);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
