import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Activity } from '../pages/activity/activity';
import { Page2 } from '../pages/page2/page2';
import { Login } from '../pages/login/login';
import { Name } from '../pages/name/name';

@NgModule({
  declarations: [
    MyApp,
    Activity,
    Page2,
    Login,
    Name
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Activity,
    Page2,
    Login,
    Name
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
