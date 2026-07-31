import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoverMorelos } from './discover-morelos';

describe('DiscoverMorelos', () => {
  let component: DiscoverMorelos;
  let fixture: ComponentFixture<DiscoverMorelos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiscoverMorelos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscoverMorelos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
