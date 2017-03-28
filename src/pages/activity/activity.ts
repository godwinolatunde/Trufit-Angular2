import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-activity',
  templateUrl: 'activity.html'
})
export class Activity {
         timed = {'minute':0,'second':0};
  constructor(public navCtrl: NavController) {
  }

  start;
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
    if(this.start == 1){
      setInterval(()=>{
        if(status == 'start'){
          this.convertToTime(this.timed);
          console.log()
        }
      }, 1000);
    }
  }
  apply(){
   this.timed.second++;
   }
  pause(){
    status = 'pause';
  }

  stop(){
    status = 'stop';
    this.timed = {'minute':0,'second':0};
  }
}
