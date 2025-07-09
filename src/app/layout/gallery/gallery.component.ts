import { AfterViewInit, Component, ElementRef, inject, signal, ViewChild } from '@angular/core';
import { CardComponent } from "./card/card.component";
import { LanguageService } from '../../core/services/language.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  imports: [CardComponent, CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent implements AfterViewInit {
@ViewChild('galleryRef', {static:true}) galleryRoot!:ElementRef

languageService=inject(LanguageService);
  chosenLanguage=this.languageService.chosenLanguage;
  translations=this.languageService.translations;
ngAfterViewInit(): void {
  // const observer=new IntersectionObserver(
  //   ([entry])=>{
  //     if(entry.isIntersecting){
  //       this.galleryRoot.nativeElement.classList.add('gallery-visible')
  //       observer.unobserve(this.galleryRoot.nativeElement)
  //     }
  //     else{this.galleryRoot.nativeElement.classList.remove('gallery-visible')}
      
  //   }, {threshold:0.1}
  // )

  // observer.observe(this.galleryRoot.nativeElement)
}

get length(){
  return this.translations()['gallery'].length-1
}

 currentIndex = signal(0);
getTransform(index: number): string {
  const offset = (index - this.currentIndex()) * 100;
  return `translateX(${offset}%)`;
}

  nextCard() {
    if (this.currentIndex() < this.translations()['gallery'].length-1) {  
      this.currentIndex.update(curVal=>curVal+1);
    }
  }

  prevCard() {
    if (this.currentIndex() > 0) {
        this.currentIndex.update(curVal=>curVal-1);
    }
    console.log(this.currentIndex())
  }

}
