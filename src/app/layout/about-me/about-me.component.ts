import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { LanguageService } from '../../core/services/language.service';

@Component({
  selector: 'app-about-me',
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {
languageService=inject(LanguageService);
translations=this.languageService.translations
}
