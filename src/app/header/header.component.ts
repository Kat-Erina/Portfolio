import { Component, inject, OnInit, signal } from '@angular/core';
import { LanguageService } from '../../core/language.service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  menuIsOpen=signal(false)
  
  languageService=inject(LanguageService);
  chosenLanguage=this.languageService.chosenLanguage;
  translations=this.languageService.translations;

  toggleMenu(){
    this.menuIsOpen.set(!this.menuIsOpen())
  }



}
