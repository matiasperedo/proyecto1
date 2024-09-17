import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-codigoqr',
  templateUrl: './codigoqr.page.html',
  styleUrls: ['./codigoqr.page.scss'],
})
export class CodigoqrPage implements OnInit {
  

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  aceptar() {
    this.navCtrl.navigateForward(['/home']);
  }


}
