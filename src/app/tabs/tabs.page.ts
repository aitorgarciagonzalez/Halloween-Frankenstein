import { Component } from '@angular/core';
import { IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { home, book, images } from 'ionicons/icons';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonIcon, IonLabel],
  template: `
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="inicio" href="/tabs/inicio">
          <ion-icon name="home"></ion-icon><ion-label>Inicio</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="historia" href="/tabs/historia">
          <ion-icon name="book"></ion-icon><ion-label>Historia</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="galeria" href="/tabs/galeria">
          <ion-icon name="images"></ion-icon><ion-label>Galería</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  `
})
export class TabsPage {
  constructor() { addIcons({ home, book, images }); }
}
