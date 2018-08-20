import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { AuthProvider } from '../../providers/auth/auth';
import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  loading = false;
  credentials = {email: null, password: null};
  address = {cep: null, number: null};

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public auth: AuthProvider,
              public toastCtrl: ToastController
            ) {
  }

  signup() {
    this.loading = true;
    setTimeout(() => this.loading=false, 4000);
    this.auth.signup(this.credentials)
    .then(() => {
      this.navCtrl.push(LoginPage);
      this.toastCtrl.create({
        message: "Registro efetuado com sucesso!",
        duration: 3000
      }).present();
    })
    .catch(() => {
      this.toastCtrl.create({
        message: "Erro ao realizar registro",
        duration: 3000
      }).present();
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

}
