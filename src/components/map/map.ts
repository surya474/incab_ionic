import { Component } from '@angular/core';


/**
 * Generated class for the MapComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
declare var google
@Component({
  selector: 'map',
  templateUrl: 'map.html'
})
export class MapComponent  {

 
public map;
  constructor() {
   this.map=this.createMap()
  }


  ionViewDidLoad(){
    this.map=this.createMap()
  }

  createMap(location =new google.maps.LatLng(18.0008097,83.5255191)){
let mapOptions={
  center:Location,
  zoom:15,
  mapTypeId:google.maps.mapTypeId.ROADMAP,
  disableDefaultUI:true

}


let mapEl=document.getElementById('map');
let map=new google.maps.Map(mapEl,mapOptions)

return map
  }
}
