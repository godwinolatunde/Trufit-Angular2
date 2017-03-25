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

  var start;
  status = 'start';

  convertToTime(time){
    ngIf(time.second == 60){
      time.minute++;
      time.second = 0;
    }
  }

  start(){
    start++;
    status = 'start'
    if(start == 1){
      setInterval(){
        if(status == 'start'){
          convertToTime(timed);
          apply(){
            timed.second++;
          };
        }
      }, 1000);
    }
  };

  pause(){
    status = 'pause';
  };

  stop(){
    status = 'stop';
    timed = {'minute':0,'second':0};
  }
}
