import { StatusBar } from '@ionic-native/status-bar';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Facebook } from '@ionic-native/facebook'
import firebase from 'firebase';

/**
 * Generated class for the AuthPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-auth',
  templateUrl: 'auth.html',
})
export class AuthPage {

  splash = true;
  isLoggedIn:boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, private fb: Facebook) {
  }

  fblogin(): Promise<any> {
    return this.fb.login(['email'])
      .then( response => {
        const facebookCredential = firebase.auth.FacebookAuthProvider
          .credential(response.authResponse.accessToken);

        firebase.auth().signInWithCredential(facebookCredential)
          .then( success => {
            this.isLoggedIn = true;
            console.log("Firebase success: " + JSON.stringify(success));
          });

      }).catch((error) => { console.log(error) });
  }

  logout() {
    this.fb.logout()
      .then( res => this.isLoggedIn = false)
      .catch(e => console.log('Error logout from Facebook', e));
  }

  ionViewDidLoad() {
    setTimeout(() =>this.splash=false, 4000);
  }

}
