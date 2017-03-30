import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import {FormsModule} from '@angular/forms';
import { FORM_DIRECTIVES } from '@angular/forms';
import { MyApp } from './app.component';
import { Register } from '../pages/register/register';
import { Activity } from '../pages/activity/activity';
import { Overview } from '../pages/overview/overview';
import { Login } from '../pages/login/login';

@NgModule({
  declarations: [
    MyApp,
    Activity,
    Register,
    Overview,
    Login
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    FormsModule,
    // FORM_DIRECTIVES,
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
