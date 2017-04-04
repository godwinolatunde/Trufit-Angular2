import { Component } from '@angular/core';
import{Login} from '../login/login';
import { NavController } from 'ionic-angular';
import { Stepcounter } from 'ionic-native';
import {Http, Headers} from '@angular/http';


let startingOffset = 0;
Stepcounter.start(startingOffset).then(onSuccess => console.log('stepcounter-start success', onSuccess), onFailure => console.log('stepcounter-start error', onFailure));

Stepcounter.getHistory().then(historyObj => console.log('stepcounter-history success', historyObj), onFailure => console.log('stepcounter-history error', onFailure));

@Component({
  selector: 'page-activity',
  templateUrl: 'activity.html'
})
export class Activity {
    timed = {'minute':0,'second':0};
  constructor(public navCtrl: NavController, public stepcounter: Stepcounter, public http:Http) {
  }
  ionViewDidLoad(){
this.store();
  }
  success(message) {
        alert(message);
    }

failure() {
        alert("Error calling CordovaStepCounter Plugin");
    }

  start = 0;
  status = 'start';

  convertToTime(time){
    if(time.second == 60){
      time.minute++;
      time.second = 0;
    }
  }

 private play(){
    this.start++;
    status = 'start'
    Stepcounter.start(startingOffset).then(onSuccess => console.log('stepcounter-start success', onSuccess), onFailure => console.log('stepcounter-start error', onFailure));
    if(this.start == 1){
      setInterval(()=>{
        if(status == 'start'){
          this.convertToTime(this.timed);
          this.timed.second++;
          console.log(this.timed.second);

        }
      }, 1000);
    }
  }
  apply(){
   }
  pause(){
    status = 'pause';
  }

  stop(){
    status = 'stop';
    Stepcounter.stop();
    this.timed = {'minute':0,'second':0};
  }
   stepcount:any =Stepcounter.getStepCount;
        weight:any = localStorage.getItem('weight')

    //Step to Distance
      stridelength = 2.3;   //avg stride length for people with 2.1 to 2.5ft
      km = (3280/(this.stridelength));
      
      distance:number = ((this.stepcount)/(this.km));
    store(){
      let step = "steps_taken=" + this.stepcount
       var user = JSON.parse(localStorage.getItem('user')); 
    // var link = 'http://localhost/apis/store.php'+ step
  // console.log(link)
  let headers = new Headers();
  headers.append('Content-Type','application/x-www-form-urlencoded; charset=UTF-8')
  this.http.post('http://localhost/apis/store.php', step, { headers: headers })
    // .map(result => result.json())
    .subscribe(
      (result)=> {
        console.log(result);
        // this.step.steps = result.result[0].steps_taken;
        // console.log(result.result[0].steps_taken);
        // e.unsubscribe()
    })
    }
    //Metabolic Burn Rate

  burnrate(){
      return(this.weight * 0.57 *2.2046226218)
  }
  
  cal(){
      console.log(this.timed);
      let cak:number = ((this.burnrate()) * (this.distance));
      console.log(cak);
       return  (cak);
  }
  out(){
        localStorage.removeItem('token')
        console.log(localStorage);
            setTimeout(()=> {
           this.navCtrl.setRoot(Login);
           }, 100);
  }
  }
