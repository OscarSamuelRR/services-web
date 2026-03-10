import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivSections } from './div-sections';

describe('DivSections', () => {
  let component: DivSections;
  let fixture: ComponentFixture<DivSections>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DivSections]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DivSections);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
