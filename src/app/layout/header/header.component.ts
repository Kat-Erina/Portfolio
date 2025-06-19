import { Component, ElementRef, Host, HostBinding, HostListener, inject, OnInit, QueryList, Self, signal, SkipSelf, ViewChild, ViewChildren } from '@angular/core';
import { LanguageService } from '../../core/services/language.service';

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

 
@HostListener('document:keydown.enter', ['$event'])
handleEnter(event: KeyboardEvent) {
  console.log('Enter key pressed:', event);
}


}
