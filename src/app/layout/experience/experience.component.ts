import { Component, ElementRef, ViewChild } from '@angular/core';
import { ExperienceSectionComponent } from './experience-section/experience-section.component';

@Component({
  selector: 'app-experience',
  imports: [ExperienceSectionComponent],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {

  @ViewChild('experienceRef', {static:true}) experienceRoot!:ElementRef


    ngAfterViewInit(): void {
    // const observer = new IntersectionObserver(
    //   ([entry]) => {
    //     if (entry.isIntersecting) {
    //       this.experienceRoot.nativeElement.classList.add('visible');
    //       observer.unobserve(this.experienceRoot.nativeElement); 
    //     } else{
    //       this.experienceRoot.nativeElement.classList.remove('visible');
    //     }
    //   },
    //   { threshold: 0.1 } 
    // );
    // observer.observe(this.experienceRoot.nativeElement);
  }
}

