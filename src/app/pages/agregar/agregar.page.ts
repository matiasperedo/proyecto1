import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {

  usuario1: string = ''; 
  activarCamara: boolean = false; 

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
    
    this.usuario1 = localStorage.getItem('usuario') ?? ''; 
  }

  volverInicio() {
    
    this.navCtrl.navigateForward(['/login']);
  }

  activarCamaraFunction() {
    
    this.navCtrl.navigateForward('/agregar2');
    
    console.log('Cámara activada:', this.activarCamara);
  }
  cursos(){

    this.navCtrl.navigateForward('/agregar3')
  }
}