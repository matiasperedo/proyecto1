import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-agregar4',
  templateUrl: './agregar4.page.html',
  styleUrls: ['./agregar4.page.scss'],
})
export class Agregar4Page implements OnInit {
  

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  aceptar() {
    this.navCtrl.navigateForward(['/agregar']);
  }


}
