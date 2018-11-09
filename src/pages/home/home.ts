import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, ModalController, LoadingController } from 'ionic-angular';

import { GoogleMap, GoogleMaps, LatLng, GoogleMapsEvent, GoogleMapOptions, Marker } from '@ionic-native/google-maps';
import { Geolocation, GeolocationOptions, Geoposition } from '@ionic-native/geolocation';
import { CabsLocationProvider } from '../../providers/cabs-location/cabs-location';
import { DistpriceprovProvider } from '../../providers/distpriceprov/distpriceprov';
import { ConfirmrideProvider } from '../../providers/confirmride/confirmride';
import { Socket } from 'ng-socket-io';
import { AlertLoaderProvider } from '../../providers/alert-loader/alert-loader';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var google;
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  google: any;
  options: GeolocationOptions;
  currentPos: Geoposition;
  lat;
  lng;
  cabs
  @ViewChild('map') mapElement: ElementRef;
  private map;
  private map2: GoogleMap;
  locations = [];
  location: LatLng
  Cabs = 'ListView'
  cabsList = []
  markers = [];
  showdist = false
  spinnerShow = true
  Mobile_Number="919866963616"
  uid
  currentLocation = "Current Location"; from; to; fromLat; fromLng; toLat; toLng; dist; price1; price2
  loading:any;


  constructor(public loader:LoadingController,public alrtloaderprov:AlertLoaderProvider,private socket: Socket, public confmrideprov: ConfirmrideProvider, public distpriceprov: DistpriceprovProvider, public modalCtrl: ModalController, public cabsLocaProv: CabsLocationProvider, public menuCtrl: MenuController, private geolocation: Geolocation, public getCabs: CabsLocationProvider, private googleMaps: GoogleMaps, public navCtrl: NavController, public navParams: NavParams) {
//this.Mobile_Number=localStorage.getItem('Mobile_Number')
 this.uid=localStorage.getItem('uid')  
 console.log(this.Mobile_Number,this.uid)   
  }
               
  ngAfterViewInit() {    
    this.loadMap()   
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');

    this.getCabsData()
    
    this.socket.connect()  
    this.socket.on('tripReqStatus', (data) => {    
                console.log("trp req status from server",data.Mobile_Number,this.Mobile_Number)   
               
              
                if(this.Mobile_Number==data.Mobile_Number){  
                  this.navCtrl.setRoot('BookridePage',{data:data},{animate: true, direction: 'forward'})            
    
                this.loading.dismiss()
                                  
            }                     
    });           
          


   
  }



  async geoModalFrom() {
    let profileModal = this.modalCtrl.create('GeocompletePage', { userId: 8675309 });
    profileModal.onDidDismiss(res => {

      console.log(Object.keys(res))
      console.log(res['data'])
      let data = res['data']
      this.from = data['formatted_address']
      this.fromLat = data['geometry']['location']['lat']
      this.fromLng = data['geometry']['location']['lng']
      this.location = new LatLng(this.fromLat, this.fromLng);
      console.log(this.lat, this.lng);
      this.showCurrentLocation()

      let obj = {
        lat: this.fromLat.toString(),
        lng: this.fromLng.toString()
      }
      this.cabsLocaProv.getCabsData(obj).then((res: any) => {
        this.parseGetCabs(res)
        this.loadMap();
      })
      console.log(this.from)
      console.log(this.fromLat, this.fromLng)
    });
    profileModal.present();
  }
    


  async geoModalTo() {
    let profileModal = this.modalCtrl.create('GeocompletePage', {});
    profileModal.onDidDismiss(res => {
      console.log(res);
      if (res['response']) {
        let data = res['data']
        this.to = data['formatted_address']
        this.toLat = data['geometry']['location']['lat']
        this.toLng = data['geometry']['location']['lng']
        this.getDistance().then(distance => {
          console.log("in get distnce tomodal", distance)

          this.getPrice().then(price => {
            this.showdist = true
            console.log(this.dist)
          })
        })


      }
      else {

      }


    });   
      

    profileModal.present();
  }
  bookride() {
    let data = {       
      "Mobile_Number": "919866963616",
      "lat": this.fromLat,
      "lng": this.fromLng,
      "from": this.from,
      "to": this.to,
      "userId":this.uid,
      "userName": "suryateja"
    }

  //  this.alrtloaderprov.showLoader("Connecting to Driver")
  this.loading = this.loader.create({
    content: "Connecting to Driver"     
  });

  this.loading.present();
    this.confmrideprov.confirmRide(data).then((res: any) => {
      console.log("in confirm booking response", res)
       
    })

    // this.navCtrl.push('BookridePage',{"driverdata":data})
  }

  getPrice() {
    return new Promise(resolve => {
      console.log("in get price")
      let data = {
        lat: this.fromLat.toString(),
        lng: this.fromLng.toString(),
      }
      this.distpriceprov.getRidePrice(data).then((resp: any) => {
        console.log("in price resp", resp)
        if (resp.success) {
          if (resp.Data.length) {
            console.log(resp.Data)
            let price = resp.Data[0].price
            this.price1 = (price * this.dist).toFixed(0)
            this.price2 = (this.price1 - (3 * this.dist)).toFixed(0)
            console.log(this.price1, this.price2)
            resolve(price)
          }
        }
      })

    })

  }

  async  getDistance() {
    return new Promise(resolve => {
      let data = {
        fromlat: this.fromLat.toString(),
        fromlng: this.fromLng.toString(),
        tolat: this.toLat.toString(),
        tolng: this.toLng.toString()
      }
      this.distpriceprov.getDistance(data).then((resp: any) => {
        if (resp.success) {
          this.showdist = true
          this.dist = resp.Data.distanceValue
          resolve(this.dist)
        }
      })
    })

  }


  getCabsData() {

    this.geolocation.getCurrentPosition().then((resp) => {
      console.log(resp)
      this.from = "Current Location "
      this.lat = resp.coords.latitude;
      this.lng = resp.coords.longitude;
      this.fromLat = this.lat
      this.fromLng = this.lng
      this.location = new LatLng(this.lat, this.lng);
      console.log(this.lat, this.lng);
      this.showCurrentLocation()

      let obj = {
        lat: this.lat,
        lng: this.lng
      }
      this.getCabs.getCabsData(obj).then((res: any) => {
        console.log(res)
        this.spinnerShow = false
        if (res.success) {

          this.parseGetCabs(res)
        } else {
          alert("something went wrong")
        }

      })
    }).catch((error) => {
      console.log('Error getting location', error);
    });

  }



  getLocationView() {

    this.loadMap();

  }

  showCurrentLocation() {
    let mapOptions = {
      center: this.location,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: this.map.getCenter()
    });

    let content = "<h4>Information!</h4>";

    this.addInfoWindow(marker, content);
  }
  addInfoWindow(marker, content) {

    let infoWindow = new google.maps.InfoWindow({
      content: content
    });

    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });

  }
  loadMap() {
    console.log("in load map")
    let mapOptions = {
      center: this.location,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    };
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    let marker2 = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.BOUNCE,
      position: this.map.getCenter(),
      title: 'You are here'
    });

    let content = "<h4>You are here!</h4>";

    this.addInfoWindow(marker2, content);
    var infowindow = new google.maps.InfoWindow();
    let i;
    for (i = 0; i < this.locations.length; i++) {
      this.markers[i] = new google.maps.Marker({
        position: new google.maps.LatLng(this.locations[i].lat, this.locations[i].lng),
        map: this.map,
        animation: google.maps.Animation.DROP,
        icon: 'data:image/png;base64,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'
      });
      google.maps.event.addListener(this.markers, 'click', (function (marker, i) {
        return function () {
          infowindow.setContent(this.locations[i][0]);
          infowindow.open(this.map, marker);
        }
      })(this.markers, i));
    }
    console.log(this.locations);
  }

  clearMarkers() {
    this.setMapOnAll(null);
  }

  deleteMarkers() {
    this.clearMarkers();
    this.markers = [];
  }
  setMapOnAll(map) {
    for (var i = 0; i < this.markers.length; i++) {
      this.markers[i].setMap(map);
    }
  }
  addMarker() {
    let mapOptions = {
      camera: {
        target: {
          lat: this.lat,
          lng: this.lng
        },
        zoom: 18,
        tilt: 30
      }
    };



    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    let marker: Marker = new google.maps.Marker({
      title: 'You are here',
      icon: 'blue',
      animation: 'DROP',
      position: {
        lat: this.lat,
        lng: this.lng
      }
    });
    // marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
    //   alert('clicked');
    // });
  }






  parseGetCabs(res) {
    this.cabsList = res.Data
    for (let i = 0; i < this.cabsList.length; i++) {

      let obj = {
        lat: parseFloat(this.cabsList[i].lat),
        lng: parseFloat(this.cabsList[i].lng)
      };
      console.log("retrieved lat lng", obj)
      this.locations[i] = obj;
    }
    this.loadMap()

  }




}
