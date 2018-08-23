import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';

/**
 * Generated class for the QrcodePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-qrcode',
  templateUrl: 'qrcode.html',
})
export class QrcodePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private qrScanner: QRScanner) {
  }

  openScanner() {
    this.qrScanner.prepare()
    .then((status: QRScannerStatus) => {
      if (status.authorized) {
        let scan = this.qrScanner.scan()
        .subscribe((code: string) => {
          console.log('Scanned something', code);
          this.qrScanner.hide();
          scan.unsubscribe();
        })
      }
      if(status.denied) {
        console.log('Permissão negada ao qr scanner');
      }
    })
    .catch((e: any) => {
      console.log('Scanner Error', e);
    });
  }

  confirmRead() {}

  closeScanner() {
    this.qrScanner.hide();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QrcodePage');
  }

}
