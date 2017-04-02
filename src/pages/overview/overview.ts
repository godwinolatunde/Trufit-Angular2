import { Component } from '@angular/core';
import {Http, Headers} from '@angular/http';
import { NavController, NavParams } from 'ionic-angular';
import {Storage} from '@ionic/storage';

@Component({
  selector: 'page-overview',
  templateUrl: 'overview.html'
})
export class Overview {
  constructor(public navCtrl: NavController, public http:Http, public storage:Storage) {
}
steps(){
   this.http.get('http://localhost/apis/pullout.php')
    .map(result => result.json())
    .subscribe(
      (result)=> {
        console.log(result);
      })
}
}
