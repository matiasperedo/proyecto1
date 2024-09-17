import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  constructor(private navCtr1:NavController) { }

  ngOnInit() {
    setTimeout(()=>{
      this.navCtr1.navigateForward(['/login'])
    },3000)
  }

}
