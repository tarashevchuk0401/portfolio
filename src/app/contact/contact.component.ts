import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
// import { EmailJSResponseStatus } from '@emailjs/browser';
import emailjs from '@emailjs/browser';
import { EmailJSResponseStatus } from '@emailjs/browser';
import { TranslocoRootModule } from '../transloco.root.module';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule, TranslocoRootModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})

export class ContactComponent {

  async sendEmail(form: NgForm) {
    if(form.invalid){
      return
    }
    emailjs.init('DfVuStD8G8ujnxSe_');
    await emailjs.send('service_njktu9h', 'template_42omheo', {
      from_name: form.value.name,
      to_name: 'Taras',
      from_email: form.value.email,
      subject: 'subject',
      message: form.value.message
    })
    form.reset();
  }

}
