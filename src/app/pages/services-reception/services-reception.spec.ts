import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesReception } from './services-reception';

describe('ServicesReception', () => {
  let component: ServicesReception;
  let fixture: ComponentFixture<ServicesReception>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesReception]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesReception);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
