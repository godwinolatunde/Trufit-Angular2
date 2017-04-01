import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import {FormsModule} from '@angular/forms';
import { MyApp } from './app.component';
import {Stepcounter} from '@ionic-native/stepcounter';
import { Register } from '../pages/register/register';
import { Activity } from '../pages/activity/activity';
import { Overview } from '../pages/overview/overview';
import { Login } from '../pages/login/login';

@NgModule({
  declarations: [
    MyApp,
    Stepcounter,
    Activity,
    Register,
    Overview,
    Login
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    FormsModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Activity,
    Register,
    Overview,
    Login
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
