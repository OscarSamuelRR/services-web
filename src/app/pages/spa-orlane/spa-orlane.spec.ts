import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaOrlane } from './spa-orlane';

describe('SpaOrlane', () => {
  let component: SpaOrlane;
  let fixture: ComponentFixture<SpaOrlane>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpaOrlane]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpaOrlane);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
