import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Router, ActivatedRoute } from '@angular/router';
import { Stepcounter } from 'ionic-native';

let startingOffset = 0;
Stepcounter.start(startingOffset).then(onSuccess => console.log('stepcounter-start success', onSuccess), onFailure => console.log('stepcounter-start error', onFailure));

Stepcounter.getHistory().then(historyObj => console.log('stepcounter-history success', historyObj), onFailure => console.log('stepcounter-history error', onFailure));

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class Login {
  constructor(public navCtrl: NavController) {
    function loginCtrl($log, $http, $localStorage, $window){
    var login;
    login = function(loginData){
    var loginDatas = "username=" + loginData.username + " &password=" + loginData.password;
    $localStorage.username = loginData.username;
    loginData.username="";
    loginData.password="";
    $http({
      method : "POST",
      url: 'http://localhost/apis/login.php',
      data: loginDatas,
      headers: {'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'}
    })
    .then(function(result) {
          console.log(result)
          $localStorage.user = result.data.data;
          $localStorage.token = result.data.data.token;
          setTimeout(function() {
            $window.location = "/activity";
         }, 100);
         console.log()
    });

  }
}
console.log()
}
}