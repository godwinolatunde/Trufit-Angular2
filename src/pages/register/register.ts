import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Login} from '../login/login';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class Register {

  constructor(public navCtrl: NavController) {

  }
  loginpage(){
           // setTimeout(()=> {
           this.navCtrl.push(Login);
           // }, 100);
           console.log()
  }
  }
