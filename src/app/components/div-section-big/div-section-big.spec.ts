import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivSectionBig } from './div-section-big';

describe('DivSectionBig', () => {
  let component: DivSectionBig;
  let fixture: ComponentFixture<DivSectionBig>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DivSectionBig]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DivSectionBig);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
