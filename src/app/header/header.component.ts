import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  menuIsOpen=signal(false)

  toggleMenu(){
    this.menuIsOpen.set(!this.menuIsOpen())
    console.log(this.menuIsOpen())
  }
}
