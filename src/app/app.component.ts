import { Component, Host } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./layout/header/header.component";
import { AboutMeComponent } from "./layout/about-me/about-me.component";
import { ExperienceComponent } from "./layout/experience/experience.component";
import { GalleryComponent } from "./layout/gallery/gallery.component";
import { SkillsComponent } from "./layout/skills/skills.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, AboutMeComponent, ExperienceComponent, GalleryComponent, SkillsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'portfolio';

  
}
