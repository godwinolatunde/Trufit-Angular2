import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-activity',
  templateUrl: 'activity.html'
})
export class Activity {

  constructor(public navCtrl: NavController) {
    function activityCtrl($log, $http, $localStorage, $window){
    console.log($localStorage);
    var timed;
    var pause;
    var stop;
    var apply;

  
  timed = {'minute':0,'second':0};
  var start;
  status = 'start';

  function convertToTime(time){
    if(time.second == 60){
      time.minute++;
      time.second = 0;
    }
  }

  start = function(){
    start++;
    status = 'start'
    if(start == 1){
      setInterval(function(){
        if(status == 'start'){
          convertToTime(timed);
          apply(function(){
            timed.second++;
          });
        }
      }, 1000);
    }
  }

  pause = function(){
    status = 'pause';
  }

  stop = function(){
    status = 'stop';
    timed = {'minute':0,'second':0};
  }
    
  }

}
}
