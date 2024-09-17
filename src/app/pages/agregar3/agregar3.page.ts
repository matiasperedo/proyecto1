import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-agregar3',
  templateUrl: './agregar3.page.html',
  styleUrls: ['./agregar3.page.scss'],
})
export class Agregar3Page implements OnInit {
  constructor(private navCtrl: NavController) { }

 

  ngOnInit() {
  }

  volver(){

    this.navCtrl.navigateForward('/agregar')
  }

}
