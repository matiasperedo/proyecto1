import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  usuario: string = '';
  navCtrl: any;

  constructor(private router: Router) {} 

  ngOnInit(): void {
    this.usuario = localStorage.getItem("usuario") ?? '';
  }

  codigoqr() {
    this.router.navigate(['/codigoqr']);
  }

  volver() {
    this.router.navigate(['/login']);
  }
}