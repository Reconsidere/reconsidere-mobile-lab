import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { HomePage } from '../home/home';

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
  credentials = {email: "", password: ""}

  constructor(public navCtrl: NavController, public navParams: NavParams, public auth: AuthProvider) {
  }

  login() {
    this.auth.login(this.credentials)
    .then(
      () => this.navCtrl.push(HomePage)
    );
  }

  signup() {
    this.auth.signup(this.credentials).then(
      () => this.navCtrl.push(HomePage)
    );
  }

  logout() {
    this.auth.logout().then(
      () => this.navCtrl.push(LoginPage)
    );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    setTimeout(() =>this.splash=false, 4000);
  }

}
