import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { CardComponent } from "./card/card.component";

@Component({
  selector: 'app-gallery',
  imports: [CardComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent implements AfterViewInit {
@ViewChild('galleryRef', {static:true}) galleryRoot!:ElementRef

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

 currentIndex = 0;
getTransform(index: number): string {
  const cardWidth = 500; 
  const offset = (index - this.currentIndex) * cardWidth;
  return `translateX(${offset}px)`;
}

  nextCard() {
    if (this.currentIndex < 2) {  
      this.currentIndex++;
    }
  }

  prevCard() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

}
