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

}
