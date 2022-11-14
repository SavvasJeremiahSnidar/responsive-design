import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TilesComponent } from './tiles/tiles.component';
import { TileComponent } from './tile/tile.component';
import { FlexboxTilesComponent } from './flexbox-tiles/flexbox-tiles.component';
import { CssGridTilesComponent } from './css-grid-tiles/css-grid-tiles.component';

@NgModule({
  declarations: [
    AppComponent,
    TilesComponent,
    TileComponent,
    FlexboxTilesComponent,
    CssGridTilesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
