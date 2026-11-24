import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-tab3',
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent],
  template: `
    <ion-header><ion-toolbar><ion-title>El rincón del terror</ion-title></ion-toolbar></ion-header>
    <ion-content class="ion-padding">
      <h1>Galería del laboratorio</h1>
      <div class="gallery">
        <article><img src="assets/frankenstein.svg" alt="Ilustración de la criatura"><h2>La criatura</h2><p>El resultado del experimento.</p></article>
        <article><img src="assets/laboratorio.svg" alt="Laboratorio oscuro"><h2>El laboratorio</h2><p>Donde comenzó todo.</p></article>
        <article><img src="assets/debilidad.svg" alt="Llama en la oscuridad"><h2>El fuego</h2><p>Un peligro de la noche.</p></article>
      </div>
      <p class="quote">«No hay nada más aterrador que ser rechazado por todos».</p>
    </ion-content>
  `,
  styles: [`
    h1 { color: #d7f2c5; font-family: Georgia, serif; }
    .gallery { display: grid; grid-template-columns: repeat(auto-fit,minmax(210px,1fr)); gap: 16px; }
    article { background: #1b2a20; border: 1px solid #66865d; border-radius: 16px; padding: 12px; box-shadow: 0 8px 18px #0008; }
    img { width: 100%; height: 170px; object-fit: contain; background: #101812; border-radius: 10px; }
    h2 { color: #b8dc9e; } p { color: #d8e2d4; }
    .quote { text-align: center; font-style: italic; margin: 28px 0; }
  `]
})
export class Tab3Page {}
