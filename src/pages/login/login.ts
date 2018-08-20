import { SignupPage } from './../signup/signup';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Toast, ToastController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { HomePage } from '../home/home';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  splash = true;
  loading = false;
  credentials = {email: "", password: ""}
  cep = null;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public http: HttpClient,
              public auth: AuthProvider,
              public toastCtrl: ToastController

  ) {
  }

  login() {
    this.loading = true;
    this.auth.login(this.credentials)
    .then(
      () => this.navCtrl.push(HomePage)
    ).catch(
      () => {
        this.toastCtrl.create({
          message: "Não foi possível autenticar!",
          duration: 3000
        }).present();
      }
    );
  }

  logout() {
    setTimeout(() => this.loading=false, 4000);
    this.auth.logout().then(
      () => {
        this.navCtrl.push(LoginPage)
        this.toastCtrl.create({
          message: "Sessão finalizada!",
          duration: 3000
        }).present();
      }
    );
  }

  fblogin() {}

  gplogin() {}

  signup() {
    this.navCtrl.push(SignupPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    setTimeout(() =>this.splash=false, 4000);
  }

}
