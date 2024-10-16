import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.page.html',
  styleUrls: ['./confirmation.page.scss'],
})
export class ConfirmationPage implements OnInit {
  totalAmount: number = 0;

  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController
  ) {}

  ngOnInit() {
    // Obtener los parámetros de la URL
    this.route.queryParams.subscribe(params => {
      this.totalAmount = params['totalAmount'] || 0;
    });
  }

  goBack() {
    this.navCtrl.navigateBack('/checkout');
  }
}
