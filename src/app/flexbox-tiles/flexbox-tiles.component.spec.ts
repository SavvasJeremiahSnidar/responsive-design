import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexboxTilesComponent } from './flexbox-tiles.component';

describe('FlexboxTilesComponent', () => {
  let component: FlexboxTilesComponent;
  let fixture: ComponentFixture<FlexboxTilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlexboxTilesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlexboxTilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
