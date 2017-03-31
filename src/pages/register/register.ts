import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Login} from '../login/login';
import {Http, Headers} from '@angular/http';
import {Storage} from '@ionic/storage';


@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class Register {
  regData = {username:'', password:'',email:'',height:'',weight:'',age:''};

  constructor(public navCtrl: NavController,public http:Http, public storage:Storage) {

  }
  loginpage(){

    let regDatas = "username=" + this.regData.username + " &email=" + this.regData.email + " &password=" + this.regData.password + " &height=" + this.regData.height + " &weight=" + this.regData.weight + " &age=" + this.regData.age;
                  this.storage.set('username', this.regData.username);
                  console.log(this.regData);
                  // this.regData.username="";
                  // this.regData.password="";
                  let headers = new Headers();
                  headers.append('Content-Type','application/x-www-form-urlencoded; charset=UTF-8')
                  this.http.post('http://localhost/apis/signup.php',regDatas, {headers:headers} )

                  .subscribe((result)=> {

                            this.storage.set('user', result);
                            console.log(result);
                           //  this.storage.set.token = result.data.data.token;
                           setTimeout(()=> {
                           this.navCtrl.push(Login);
                           }, 100);
                  },(error)=>{
                      console.log(error);
                  }
                  );
  }
  page(){
           setTimeout(()=> {
           this.navCtrl.push(Login);
           }, 100);
  }
  }
