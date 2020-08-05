import { Component, OnInit } from '@angular/core';
import { AppHeaderService } from '@app/services';
import { Subscription } from 'rxjs';
import { Platform } from '@ionic/angular';
import { Location } from '@angular/common';

@Component({
  selector: 'app-ap-about',
  templateUrl: './ap-about.page.html',
  styleUrls: ['./ap-about.page.scss'],
})
export class ApAboutPage implements OnInit {
  backButtonFunc: Subscription;


  constructor(
    private headerService: AppHeaderService,
    private platform: Platform,
    private location: Location
  ) { }

  ionViewWillEnter() {
    this.headerService.showHeaderWithBackButton();
    this.handleBackButton();
  }

  handleBackButton() {
    this.backButtonFunc = this.platform.backButton.subscribeWithPriority(10, () => {
      this.location.back();
      this.backButtonFunc.unsubscribe();
    });
  }

  ngOnInit() {
  }

}
