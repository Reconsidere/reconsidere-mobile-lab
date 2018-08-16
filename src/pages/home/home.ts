import { StatusBar } from '@ionic-native/status-bar';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  homePage = HomePage;
  splash = true;

  constructor(publicnavCtrl:NavController, statusBar: StatusBar) {
  }

  ionViewDidLoad() {
  }
}
