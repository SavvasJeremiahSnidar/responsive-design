import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssGridTilesComponent } from './css-grid-tiles.component';

describe('CssGridTilesComponent', () => {
  let component: CssGridTilesComponent;
  let fixture: ComponentFixture<CssGridTilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CssGridTilesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CssGridTilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
