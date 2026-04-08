import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements OnInit, OnDestroy {
  rankHoldersCount: number = 0;
  private targetCount: number = 100;
  private duration: number = 2000;

  // Typewriter state
  currentWord: string = '';
  isCursorBlinking: boolean = false;

  private words: string[] = ['Excellence', 'Success', 'Leadership', 'Ambition', 'Growth', 'Victory'];
  private wordIndex: number = 0;
  private charIndex: number = 0;
  private isDeleting: boolean = false;
  private typeSpeed: number = 90;
  private deleteSpeed: number = 50;
  private pauseDuration: number = 1800;
  private typewriterTimeout: any;

  ngOnInit() {
    this.animateCount();
    this.typewriterTick();
  }

  ngOnDestroy() {
    if (this.typewriterTimeout) {
      clearTimeout(this.typewriterTimeout);
    }
  }

  animateCount() {
    const frameRate = 1000 / 60;
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

  typewriterTick() {
    const fullWord = this.words[this.wordIndex];

    if (!this.isDeleting) {
      // Typing forward
      this.charIndex++;
      this.currentWord = fullWord.substring(0, this.charIndex);
      this.isCursorBlinking = false;

      if (this.charIndex === fullWord.length) {
        // Pause at full word, then start deleting
        this.isCursorBlinking = true;
        this.typewriterTimeout = setTimeout(() => {
          this.isDeleting = true;
          this.isCursorBlinking = false;
          this.typewriterTick();
        }, this.pauseDuration);
        return;
      }
    } else {
      // Deleting
      this.charIndex--;
      this.currentWord = fullWord.substring(0, this.charIndex);

      if (this.charIndex === 0) {
        // Move to next word
        this.isDeleting = false;
        this.wordIndex = (this.wordIndex + 1) % this.words.length;
        this.typewriterTimeout = setTimeout(() => this.typewriterTick(), 400);
        return;
      }
    }

    const speed = this.isDeleting ? this.deleteSpeed : this.typeSpeed;
    this.typewriterTimeout = setTimeout(() => this.typewriterTick(), speed);
  }
}
