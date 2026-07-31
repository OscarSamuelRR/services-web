import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoverMorelosContent } from './discover-morelos-content';

describe('DiscoverMorelosContent', () => {
  let component: DiscoverMorelosContent;
  let fixture: ComponentFixture<DiscoverMorelosContent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiscoverMorelosContent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscoverMorelosContent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
