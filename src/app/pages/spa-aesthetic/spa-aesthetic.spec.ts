import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaAesthetic } from './spa-aesthetic';

describe('SpaAesthetic', () => {
  let component: SpaAesthetic;
  let fixture: ComponentFixture<SpaAesthetic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpaAesthetic]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpaAesthetic);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
