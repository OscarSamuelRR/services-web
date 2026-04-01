import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaRules } from './spa-rules';

describe('SpaRules', () => {
  let component: SpaRules;
  let fixture: ComponentFixture<SpaRules>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpaRules]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpaRules);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
