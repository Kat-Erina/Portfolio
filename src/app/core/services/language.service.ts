import { Injectable, signal } from "@angular/core";
import ENG from '../../../assets/languages/en.json';
import GEO from '../../../assets/languages/ka.json';


@Injectable({'providedIn':'root'})
export class LanguageService{
private dictionaries: Record<'ENG' | 'GEO', Record<string, any>> = {
  ENG,
  GEO
};
chosenLanguage=signal('ENG')
translations = signal<Record<string, any>>(ENG);


  // switchLanguage(lang: 'ENG' | 'GEO') {
  //   this.translations.set(this.dictionaries[lang]);
  //     }

 toggleLanguage(){
    let chosenLang:'ENG'| 'GEO'=this.chosenLanguage()==='ENG'? 'GEO': 'ENG';
    this.chosenLanguage.set(chosenLang);
    localStorage.setItem('chosenLanguage', this.chosenLanguage())
     this.translations.set(this.dictionaries[chosenLang]);
  }

  constructor(){
const storedLang = localStorage.getItem('chosenLanguage') as 'ENG' | 'GEO' | null;
   if (storedLang) {
    this.chosenLanguage.set(storedLang);
      this.translations.set(this.dictionaries[storedLang]);
    }
  }  
}