import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-monster-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <article class="monster-card">
      <div class="image-frame">
        <img [src]="image" [alt]="title">
      </div>
      <div class="card-content">
        <p class="tag">EXPEDIENTE DE HALLOWEEN</p>
        <h2>{{ title }}</h2>
        <p class="description">{{ description }}</p>
        <button type="button" (click)="cardAction.emit()">{{ buttonText }}</button>
      </div>
    </article>
  `,
  styles: [`
    :host { display:block; margin: 20px 0; }
    .monster-card {
      overflow:hidden; border:2px solid #789b62; border-radius:18px;
      background:linear-gradient(145deg,#263a2b,#111a14);
      box-shadow:0 10px 24px #0009, inset 0 0 18px #9ac47718;
      color:#e7f0df; transition:transform .2s, box-shadow .2s;
    }
    .monster-card:hover { transform:translateY(-3px); box-shadow:0 14px 28px #000b, 0 0 16px #91bf7a55; }
    .image-frame { padding:12px 12px 0; }
    img { display:block; width:100%; height:190px; object-fit:contain; border-radius:12px; background:#0b110d; }
    .card-content { padding:16px; }
    .tag { color:#a9cc8e; letter-spacing:2px; font-size:.65rem; }
    h2 { margin:8px 0; color:#d5efbd; font: bold 1.35rem Georgia,serif; }
    .description { line-height:1.55; color:#d5dfd0; }
    button { border:1px solid #b5d696; border-radius:9px; padding:11px 16px; background:#8fb96f; color:#101812; font-weight:bold; cursor:pointer; }
    button:active { transform:scale(.97); background:#b5d696; }
  `]
})
export class MonsterCardComponent {
  @Input() image = 'assets/frankenstein.svg';
  @Input() title = 'Criatura desconocida';
  @Input() description = 'No hay información disponible sobre este expediente.';
  @Input() buttonText = 'Abrir expediente';
  @Output() cardAction = new EventEmitter<void>();
}
