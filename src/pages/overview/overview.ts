import { Component } from '@angular/core';
import {Http, Headers} from '@angular/http';
import { NavController, NavParams } from 'ionic-angular';
import {Storage} from '@ionic/storage';

@Component({
  selector: 'page-overview',
  templateUrl: 'overview.html'
})
export class Overview {
  step = {steps:""}
  calorie = {calories:""}
  dist = {distance:""}
  constructor(public navCtrl: NavController, public http:Http, public storage:Storage) {
    
}
ionViewDidLoad(){
this.steps();
this.calories();
this.distance();
}
steps(){
  var user = JSON.parse(localStorage.getItem('user')) 
  var link = 'http://localhost/apis/pullout.php?user_id='+user.id
  console.log(link)
    let b = this.http.get(link)
    .map(result => result.json())
    .subscribe(
      (result)=> {
        console.log(result);
        this.step.steps = result.result[0].steps_taken;
        console.log(result.result[0].steps_taken);
        b.unsubscribe()
    })
      
}


calories(){
  var user = JSON.parse(localStorage.getItem('user')) 
  var link = 'http://localhost/apis/cal.php?user_id='+user.id
  console.log(link)
   let c = this.http.get(link)
    .map(result => result.json())
    .subscribe(
      (result)=> {
        console.log(result);
        this.calorie.calories = result.result[0].calorie_count;
        console.log(result.result[0].calorie_count);
        c.unsubscribe()
      })
}

distance(){
  var user = JSON.parse(localStorage.getItem('user')) 
  var link = 'http://localhost/apis/dist.php?user_id='+user.id
  console.log(link)
   let d = this.http.get(link)
    .map(result => result.json())
    .subscribe(
      (result)=> {
        console.log(result);
        this.dist.distance = result.result[0].distance_run;
        console.log(result.result[0].distance_run);
        d.unsubscribe()
      })
}
}
