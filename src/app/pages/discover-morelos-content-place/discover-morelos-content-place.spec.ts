import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoverMorelosContentPlace } from './discover-morelos-content-place';

describe('DiscoverMorelosContentPlace', () => {
  let component: DiscoverMorelosContentPlace;
  let fixture: ComponentFixture<DiscoverMorelosContentPlace>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiscoverMorelosContentPlace]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscoverMorelosContentPlace);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
