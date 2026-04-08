import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  branches = [
    {
      name: 'Uslapur Branch',
      address: 'Main Road, Uslapur, Bilaspur, CG',
      phone: '+91 83199 64998',
      whatsapp: 'https://wa.me/918319964998',
      mapsLink: 'https://maps.app.goo.gl/d37ELMYKiZnR5Lrh8',
      embedUrl: 'https://maps.google.com/maps?q=Uslapur+Bilaspur+Chhattisgarh&t=&z=15&ie=UTF8&iwloc=&output=embed'
    },
    {
      name: 'Nehru Nagar Branch',
      address: 'Nehru Nagar, Bilaspur, CG',
      phone: '+91 95894 09958',
      whatsapp: 'https://wa.me/919589409958',
      mapsLink: 'https://maps.app.goo.gl/YPWLPgACQqMyExun7',
      embedUrl: 'https://maps.google.com/maps?q=Nehru+Nagar+Bilaspur+Chhattisgarh&t=&z=15&ie=UTF8&iwloc=&output=embed'
    }
  ];

  selectedBranchIndex = 0;

  get selectedMapUrl(): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      this.branches[this.selectedBranchIndex].embedUrl
    );
  }

  selectBranch(index: number) {
    this.selectedBranchIndex = index;
  }

  constructor(private sanitizer: DomSanitizer) { }

  formData = {
    name: '',
    email: '',
    phone: '',
    course: 'Class 6-12',
    message: ''
  };

  isSubmitting = false;
  submitSuccess = false;
  submitError = false;

  public sendEmail(e: Event) {
    e.preventDefault();

    // Basic validation
    if (!this.formData.name || !this.formData.phone || !this.formData.email) {
      this.submitError = true;
      setTimeout(() => this.submitError = false, 4000);
      return;
    }

    this.isSubmitting = true;
    this.submitSuccess = false;
    this.submitError = false;

    const payload = this.formData as Record<string, unknown>;
    const PUBLIC_KEY = 'brpnojQh3uBOys6hv';
    const SERVICE_ID = 'service_xztiauc';

    // 1. Send enquiry to admin
    emailjs.send(SERVICE_ID, 'template_0fr71dv', payload, { publicKey: PUBLIC_KEY })
      .then(() => {
        // 2. Send auto-reply to student
        return emailjs.send(SERVICE_ID, 'template_chmddmt', payload, { publicKey: PUBLIC_KEY });
      })
      .then(() => {
        this.isSubmitting = false;
        this.submitSuccess = true;
        this.formData = { name: '', email: '', phone: '', course: 'Class 6-12', message: '' };
        setTimeout(() => this.submitSuccess = false, 5000);
      })
      .catch(() => {
        this.isSubmitting = false;
        this.submitError = true;
        setTimeout(() => this.submitError = false, 5000);
      });
  }
}
