import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoolMenu } from './pool-menu';

describe('PoolMenu', () => {
  let component: PoolMenu;
  let fixture: ComponentFixture<PoolMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PoolMenu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoolMenu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
