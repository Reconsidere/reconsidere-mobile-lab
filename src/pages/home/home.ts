import { StatusBar } from '@ionic-native/status-bar';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IntroPage } from '../intro/intro';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  homePage = HomePage;
  splash = true;

  constructor(public navCtrl: NavController, statusBar: StatusBar, public storage: Storage) {
  }

  ionViewDidLoad() {
  }
}
