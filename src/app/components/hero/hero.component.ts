import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements OnInit {
  rankHoldersCount: number = 0;
  private targetCount: number = 100;
  private duration: number = 2000; // 2 seconds

  ngOnInit() {
    this.animateCount();
  }

  animateCount() {
    const frameRate = 1000 / 60; // 60fps
    const totalFrames = this.duration / frameRate;
    const increment = this.targetCount / totalFrames;
    let currentCount = 0;

    const interval = setInterval(() => {
      currentCount += increment;
      if (currentCount >= this.targetCount) {
        this.rankHoldersCount = this.targetCount;
        clearInterval(interval);
      } else {
        this.rankHoldersCount = Math.floor(currentCount);
      }
    }, frameRate);
  }
}
