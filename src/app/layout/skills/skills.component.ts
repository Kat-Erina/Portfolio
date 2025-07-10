import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { LanguageService } from '../../core/services/language.service';

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
languageService=inject(LanguageService);
translations=this.languageService.translations
  isOpen=signal(true)

  toggleOpen(){
    this.isOpen.set(!this.isOpen())
  }




}
