import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent implements OnInit, OnDestroy {

  stats = [
    { label: 'Students', target: 500, current: 0, suffix: '+' },
    { label: 'Rank Holders', target: 100, current: 0, suffix: '+' },
    { label: 'Branches', target: 2, current: 0, suffix: '+' },
  ];

  private observer: IntersectionObserver | null = null;
  private animated = false;

  ngOnInit() {
    // Trigger count animation when section scrolls into view
    this.observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !this.animated) {
        this.animated = true;
        this.stats.forEach(stat => this.animateStat(stat));
      }
    }, { threshold: 0.3 });

    const section = document.getElementById('about');
    if (section) this.observer.observe(section);
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }

  private animateStat(stat: { target: number; current: number }) {
    const duration = 1800;
    const frameRate = 1000 / 60;
    const totalFrames = duration / frameRate;
    const increment = stat.target / totalFrames;
    let current = 0;

    const interval = setInterval(() => {
      current += increment;
      if (current >= stat.target) {
        stat.current = stat.target;
        clearInterval(interval);
      } else {
        stat.current = Math.floor(current);
      }
    }, frameRate);
  }
}
