import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario: string = '';
  contrasena: string = '';

  constructor(private navCtrl: NavController,
              private alertCtrl: AlertController) { }

  ngOnInit() { }

  async validar() { 
    if (this.usuario === 'matias@duoc.com' && this.contrasena === '1234') {
      
      localStorage.setItem("usuario", this.usuario);
      
      // Personalizamos el mensaje para el usuario tipo alumno
      const alert = await this.alertCtrl.create({
        header: `Bienvenido alumno ${this.usuario}`,
        message: 'Registre la asistencia de su clase',
        buttons: ['OK']
      });
      await alert.present();

      this.navCtrl.navigateForward(['/agregar']);
    } else if (this.usuario === 'juan@profesorduoc.com' && this.contrasena === '5678') {
      
      localStorage.setItem("usuario", this.usuario);
      
      // Personalizamos el mensaje para el usuario tipo profesor
      const alert = await this.alertCtrl.create({
        header: `Bienvenido profesor ${this.usuario}`,
        message: 'Genere código de asistencia de la clase escogida',
        buttons: ['OK']
      });
      await alert.present();

      this.navCtrl.navigateForward(['/home']);
    } else {
      
      const alert = await this.alertCtrl.create({
        header: 'Error',
        message: 'Usuario o contraseña incorrecta',
        buttons: ['OK']
      });
      await alert.present();
    }
  }
}