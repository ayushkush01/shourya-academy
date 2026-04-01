import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  activeSection: string = 'home';

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const sections = ['home', 'about', 'courses', 'results', 'gallery', 'contact'];
    let currentSection = 'home';

    for (const section of sections) {
      if (section === 'home') continue;
      
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        // If the top of the section is near the top of the viewport (e.g., within 200px)
        if (rect.top <= 200) {
          currentSection = section;
        }
      }
    }
    this.activeSection = currentSection;
  }
}
