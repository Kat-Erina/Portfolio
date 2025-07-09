import { Component, inject, Input } from '@angular/core';
import { LanguageService } from '../../../core/services/language.service';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  @Input() data!: {
       "id":number,
    "name": string, 
    "img":string, 
    "github": string, 
    "live":string, 
    "description":string
  }
}
