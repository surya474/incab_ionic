import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { Ng4GeoautocompleteModule } from 'ng4-geoautocomplete';

@NgModule({
  declarations: [
    HomePage,   
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
    Ng4GeoautocompleteModule
  ],
})


export class HomePageModule {}
