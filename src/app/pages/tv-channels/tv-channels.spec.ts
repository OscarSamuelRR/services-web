import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvChannels } from './tv-channels';

describe('TvChannels', () => {
  let component: TvChannels;
  let fixture: ComponentFixture<TvChannels>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TvChannels]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TvChannels);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
