import { QrcodePage } from './../pages/qrcode/qrcode';
import { IntroPage } from './../pages/intro/intro';
import { EmailComposer } from '@ionic-native/email-composer';
import {AngularFireAuth} from 'angularfire2/auth';
import { firebase } from './app.credentials';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { MyApp } from './app.component';
import { LoginPage } from './../pages/login/login';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthProvider } from '../providers/auth/auth';
import { HttpClientModule } from '@angular/common/http';
import { GeolocationProvider } from '../providers/geolocation/geolocation';
import { SignupPage } from '../pages/signup/signup';
import { ChartsModule } from 'ng2-charts';
import { Storage } from '@ionic/storage';
import { HandshakeProvider } from '../providers/handshake/handshake';
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    IntroPage,
    LoginPage,
    SignupPage,
    HomePage,
    ListPage,
    QrcodePage
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    HttpClientModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(firebase.config),
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    IntroPage,
    LoginPage,
    SignupPage,
    HomePage,
    ListPage,
    QrcodePage
  ],
  providers: [
    AuthProvider,
    AngularFireAuth,
    GeolocationProvider,
    EmailComposer,
    StatusBar,
    SplashScreen,
    HandshakeProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
