import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private alertController: AlertController,
  ) {}

  confirmClickThis() {
    alert('ion-content clicked now');
  }

  async launchAlertController() {
    const alert = await this.alertController.create({
      header: 'TITLE',
      buttons: ['close']
    });
    await alert.present();
  }
}
