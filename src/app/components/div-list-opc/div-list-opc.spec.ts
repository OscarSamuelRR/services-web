import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivListOpc } from './div-list-opc';

describe('DivListOpc', () => {
  let component: DivListOpc;
  let fixture: ComponentFixture<DivListOpc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DivListOpc]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DivListOpc);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
