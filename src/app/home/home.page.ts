import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Media } from '@ionic-native/media/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    public platform: Platform,
    private media: Media
  ) {}

}
