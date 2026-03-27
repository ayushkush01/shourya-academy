import { Component } from '@angular/core';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  formData = {
    name: '',
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
    if (!this.formData.name || !this.formData.phone) {
        this.submitError = true;
        setTimeout(() => this.submitError = false, 4000);
        return;
    }

    this.isSubmitting = true;
    this.submitSuccess = false;
    this.submitError = false;

    emailjs
      .send('service_xztiauc', 'template_0fr71dv', this.formData as Record<string, unknown>, {
        publicKey: 'brpnojQh3uBOys6hv',
      })
      .then(
        () => {
          this.isSubmitting = false;
          this.submitSuccess = true;
          this.formData = { name: '', phone: '', course: 'Class 6-12', message: '' };
          setTimeout(() => this.submitSuccess = false, 5000);
        },
        (error) => {
          this.isSubmitting = false;
          this.submitError = true;
          setTimeout(() => this.submitError = false, 5000);
        },
      );
  }
}
