import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoutiquesGalleries } from './boutiques-galleries';

describe('BoutiquesGalleries', () => {
  let component: BoutiquesGalleries;
  let fixture: ComponentFixture<BoutiquesGalleries>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoutiquesGalleries]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoutiquesGalleries);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
