import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YellowHouse } from './yellow-house';

describe('YellowHouse', () => {
  let component: YellowHouse;
  let fixture: ComponentFixture<YellowHouse>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YellowHouse]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YellowHouse);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
