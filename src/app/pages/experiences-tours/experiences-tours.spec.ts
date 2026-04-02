import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperiencesTours } from './experiences-tours';

describe('ExperiencesTours', () => {
  let component: ExperiencesTours;
  let fixture: ComponentFixture<ExperiencesTours>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperiencesTours]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperiencesTours);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
