import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaMenu } from './spa-menu';

describe('SpaMenu', () => {
  let component: SpaMenu;
  let fixture: ComponentFixture<SpaMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpaMenu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpaMenu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
