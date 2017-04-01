import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Stepcounter } from 'ionic-native';
import { FormsModule } from '@angular/forms';
import {Activity} from '../activity/activity';
import {Register} from '../register/register';
import {Http, Headers} from '@angular/http';
import {Storage} from '@ionic/storage';

let startingOffset = 0;
Stepcounter.start(startingOffset).then(onSuccess => console.log('stepcounter-start success', onSuccess), onFailure => console.log('stepcounter-start error', onFailure));

Stepcounter.getHistory().then(historyObj => console.log('stepcounter-history success', historyObj), onFailure => console.log('stepcounter-history error', onFailure));

@Component({
         selector: 'page-login',
         templateUrl: 'login.html',
        //  directives: []
})
export class Login {
         loginData = {username:'', password:''};
         constructor(public navCtrl: NavController, public http:Http, public storage:Storage, public formsmodule:FormsModule) {
         }


         login(){
            //  console.log(this.loginData.username)
                  let loginParam = "username=" + this.loginData.username + " &password=" + this.loginData.password;
                  this.storage.set('username', this.loginData.username);
                  console.log(loginParam);
                  this.loginData.username="";
                  this.loginData.password="";
                  let headers = new Headers();
                  headers.append('Content-Type','application/x-www-form-urlencoded; charset=UTF-8')
                  this.http.post('http://localhost/apis/login.php', loginParam, {headers:headers} )

                  .subscribe((result)=> {
                           console.log(result)
                           //  this.storage.set('user', result.data.data);
                           //  this.storage.set.token = result.data.data.token;
                           setTimeout(()=> {
                           this.navCtrl.push(Activity);
                           }, 100);
                  },(error)=>{
                      console.log(error);
                  }
                  );
                  

         }
         register(){
                  setTimeout(()=> {
                  this.navCtrl.push(Register);
                  }, 100);
                  console.log()
         }

}
