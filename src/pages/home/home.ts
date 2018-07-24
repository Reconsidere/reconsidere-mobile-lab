import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  
splash = true;
homePage = HomePage;

constructor(publicnavCtrl:NavController) {
 
}

ionViewDidLoad() {
  setTimeout(() =>this.splash=false, 4000);
}

}