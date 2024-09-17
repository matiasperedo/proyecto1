import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-agregar2',
  templateUrl: './agregar2.page.html',
  styleUrls: ['./agregar2.page.scss'],
})
export class Agregar2Page implements OnInit {
  

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  listo() {
    this.navCtrl.navigateForward(['/agregar4']);
  }

  


}
