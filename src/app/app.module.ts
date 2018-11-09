import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

//
import { GoogleMaps } from '@ionic-native/google-maps';
import { Geolocation } from '@ionic-native/geolocation';
import { GeolocationProvider } from '../providers/geolocation/geolocation';

import { CabsLocationProvider } from '../providers/cabs-location/cabs-location';
import { HttpClientModule } from '@angular/common/http';
import { Ng4GeoautocompleteModule } from 'ng4-geoautocomplete';
import { Globalvalues } from '../globalValues';
import * as firebase from 'firebase';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { Firebase } from '@ionic-native/firebase';
import { ApiProvider } from '../providers/api/api';
import { CountrieslistProvider } from '../providers/countrieslist/countrieslist';
import { LoginProvProvider } from '../providers/login-prov/login-prov';
import { DistpriceprovProvider } from '../providers/distpriceprov/distpriceprov';
import { ConfirmrideProvider } from '../providers/confirmride/confirmride';
import { SocketIoModule, SocketIoConfig } from 'ng-socket-io';
import { AlertLoaderProvider } from '../providers/alert-loader/alert-loader';

const socketconfig: SocketIoConfig = { url: 'localhost:8810', options: {} };
//url: 'http://ec2-18-217-223-215.us-east-2.compute.amazonaws.com:8810
//'http://incabnode.appspot.com:8810   
firebase.initializeApp(Globalvalues.firebaseConfig);
@NgModule({
  declarations: [   
    MyApp  
  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    AngularFireModule.initializeApp(Globalvalues.firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    IonicModule.forRoot(MyApp),
    Ng4GeoautocompleteModule.forRoot(),
    SocketIoModule.forRoot(socketconfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
      
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GoogleMaps,
    Geolocation,
    Firebase,   
    GeolocationProvider,
    CabsLocationProvider,
    ApiProvider,
    CountrieslistProvider,
    LoginProvProvider,
    DistpriceprovProvider,
    ConfirmrideProvider,
    AlertLoaderProvider,
  ]      
})
export class AppModule {}
