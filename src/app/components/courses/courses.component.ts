import { Component } from '@angular/core';

interface Course {
  title: string;
  shortDesc: string;
  icon: string;
  bgClass: string;
  textClass: string;
  details: string;
  features: string[];
}

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {
  courses: Course[] = [
    {
      title: 'Classes 6-12',
      shortDesc: 'Subject expertise for CG & CBSE boards with focus on fundamental concepts.',
      icon: 'school',
      bgClass: 'bg-secondary-container',
      textClass: 'text-secondary',
      details: 'Our comprehensive coaching for classes 6th to 12th is designed to build a rock-solid foundation for both school exams and future competitive endeavors. We follow updated board patterns meticulously.',
      features: ['Concept Clarity', 'Weekly Assessments', 'Board-pattern Mock Tests']
    },
    {
      title: 'Navodaya & Sainik',
      shortDesc: 'Specialized entrance coaching for prestigious government schools.',
      icon: 'military_tech',
      bgClass: 'bg-tertiary-fixed',
      textClass: 'text-on-tertiary-fixed-variant',
      details: 'Prepare your child for prestigious institutions like Navodaya Vidyalaya and Sainik Schools. We provide specialized training focusing on mental ability, mathematics, and language proficiency.',
      features: ['Mental Ability Drills', 'Previous Year Questions', 'Physical Endurance Guidance']
    },
    {
      title: 'Spoken English',
      shortDesc: 'Master fluency and confidence with our structured communication modules.',
      icon: 'record_voice_over',
      bgClass: 'bg-primary-fixed',
      textClass: 'text-on-primary-fixed-variant',
      details: 'Break the language barrier with our Spoken English program. From grammar basics to advanced public speaking, we help you communicate with undeniable confidence.',
      features: ['Interactive Group Discussions', 'Vocabulary Building', 'Personality Development']
    },
    {
      title: 'Civil Judge',
      shortDesc: 'Expert legal mentorship for judicial services exams preparation.',
      icon: 'balance',
      bgClass: 'bg-secondary-container',
      textClass: 'text-secondary',
      details: 'Step into the prestigious judicial services with our targeted preparation strategy. We cover bare acts, landmark judgments, and main answer-writing comprehensively to give you the winning edge.',
      features: ['In-depth Bare Act Analysis', 'Mains Answer Writing', 'Interview Mock Panels']
    },
    {
      title: 'PSC / Vyapam',
      shortDesc: 'Targeted strategies for Chhattisgarh state competitive examinations.',
      icon: 'history_edu',
      bgClass: 'bg-tertiary-fixed',
      textClass: 'text-on-tertiary-fixed-variant',
      details: 'A specialized batch dedicated to CGPSC and Vyapam exams focusing on Chhattisgarh GK, current affairs, and aptitude to secure top ranks in state-level recruitments.',
      features: ['CG Special GK', 'Current Affairs Modules', 'Time Management Strategies']
    },
    {
      title: 'Banking / SSC',
      shortDesc: 'Fast-track methods and mock tests for Central government jobs.',
      icon: 'account_balance',
      bgClass: 'bg-primary-fixed',
      textClass: 'text-on-primary-fixed-variant',
      details: 'Crack fast-paced exams like Bank PO, Clerk, and SSC CGL/CHSL with our short-trick oriented mathematics and rigorous reasoning practice sessions.',
      features: ['Short-trick Math', 'High-speed Reasoning', 'Full-length Online Mocks']
    },
    {
      title: 'Home Tuition',
      shortDesc: 'Personalized one-on-one attention at the comfort of your home.',
      icon: 'house',
      bgClass: 'bg-secondary-container',
      textClass: 'text-secondary',
      details: 'Get customized learning at your doorstep. Our expert tutors adapt to the student\'s pace, ensuring concepts are thoroughly understood without the pressure of a classroom.',
      features: ['Flexible Timings', 'Customized Pacing', 'Focused Weakness Improvement']
    },
    {
      title: 'Custom Courses',
      shortDesc: 'Contact us for tailored coaching solutions for specific needs.',
      icon: 'auto_stories',
      bgClass: 'bg-tertiary-fixed',
      textClass: 'text-on-tertiary-fixed-variant',
      details: 'Have a specific exam or subject in mind? We design custom crash courses, short-term prep modules, or subject-specific deep dives based on your unique requirements.',
      features: ['Need-based Curriculum', 'Crash Course Availability', 'Expert Guidance']
    }
  ];

  selectedCourse: Course | null = null;

  openModal(course: Course) {
    this.selectedCourse = course;
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  }

  closeModal() {
    this.selectedCourse = null;
    document.body.style.overflow = 'auto';
  }
}
