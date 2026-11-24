import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { MonsterCardComponent } from 'halloween-ui';

@Component({
  selector: 'app-tab2',
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, MonsterCardComponent],
  template: `
    <ion-header><ion-toolbar><ion-title>Secretos y leyendas</ion-title></ion-toolbar></ion-header>
    <ion-content class="ion-padding">
      <h1>Historia de la criatura</h1>
      <p>La leyenda moderna se popularizó con la novela <em>Frankenstein o el moderno Prometeo</em>, publicada por Mary Shelley en 1818. Víctor Frankenstein es el científico que crea vida mediante un experimento.</p>
      <lib-monster-card
        image="assets/laboratorio.svg"
        title="Su mayor poder"
        description="Una fuerza física extraordinaria y una gran resistencia. Su inteligencia y capacidad para aprender también pueden sorprender."
        buttonText="Ver su poder"
        (cardAction)="showDetail('poder')">
      </lib-monster-card>
      <lib-monster-card
        image="assets/debilidad.svg"
        title="Su debilidad"
        description="El rechazo, la soledad y el abandono. En muchas versiones también teme al fuego y a la persecución humana."
        buttonText="Ver su debilidad"
        (cardAction)="showDetail('debilidad')">
      </lib-monster-card>
      <h2>Curiosidad de Halloween</h2>
      <p>La imagen popular de la criatura con tornillos en el cuello y piel verdosa procede sobre todo de sus adaptaciones cinematográficas.</p>
    </ion-content>
  `,
  styles: [`
    h1,h2 { color: #d7f2c5; font-family: Georgia, serif; }
    p { line-height: 1.6; color: #d8e2d4; }
  `]
})
export class Tab2Page {
  showDetail(type: string) { window.alert(type === 'poder' ? 'La criatura destaca por su fuerza.' : 'La soledad es una de sus grandes debilidades.'); }
}
