import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GeocompletePage } from './geocomplete';
import { Ng4GeoautocompleteModule } from 'ng4-geoautocomplete';

@NgModule({
  declarations: [
    GeocompletePage,
  ],
  imports: [
    IonicPageModule.forChild(GeocompletePage),
    Ng4GeoautocompleteModule
  ],
})
export class GeocompletePageModule {}
