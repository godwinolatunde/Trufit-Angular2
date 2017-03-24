import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
// import { IonicStorageModule } from '@ionic/storage';
import {FormsModule} from '@angular/forms';
import { MyApp } from './app.component';
import { Activity } from '../pages/activity/activity';
import { Overview } from '../pages/overview/overview';
import { Login } from '../pages/login/login';
import { Name } from '../pages/name/name';

@NgModule({
  declarations: [
    MyApp,
    Activity,
    Overview,
    Login,
    Name
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    FormsModule
    // IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Activity,
    Overview,
    Login,
    Name
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
