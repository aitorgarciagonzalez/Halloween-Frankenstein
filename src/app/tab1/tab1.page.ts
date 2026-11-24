import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonText } from '@ionic/angular/standalone';
import { MonsterCardComponent } from 'halloween-ui';

@Component({
  selector: 'app-tab1',
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonText, MonsterCardComponent],
  template: `
    <ion-header><ion-toolbar><ion-title>El laboratorio</ion-title></ion-toolbar></ion-header>
    <ion-content class="ion-padding">
      <p class="eyebrow">ARCHIVOS CLASIFICADOS · 31 DE OCTUBRE</p>
      <h1>El monstruo ha despertado...</h1>
      <lib-monster-card
        image="assets/frankenstein.svg"
        title="Monstruo de Frankenstein"
        description="Una criatura creada a partir de restos humanos. No nació siendo un monstruo: fue abandonada por quien le dio vida."
        buttonText="Conocer a la criatura"
        (cardAction)="showMessage()">
      </lib-monster-card>
      <p class="intro">«Cuidado con aquello que la ciencia despierta y la humanidad abandona».</p>
    </ion-content>
  `,
  styles: [`
    h1 { font-family: Georgia, serif; color: #d7f2c5; font-size: 2rem; }
    .eyebrow { color: #a4c68d; letter-spacing: 2px; font-size: .72rem; }
    .intro { color: #d4dfd0; text-align: center; font-style: italic; margin: 28px 8px; }
  `]
})
export class Tab1Page {
  showMessage() { window.alert('El expediente de la criatura queda abierto.'); }
}
