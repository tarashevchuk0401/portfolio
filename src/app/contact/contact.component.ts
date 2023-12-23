import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
// import { EmailJSResponseStatus } from '@emailjs/browser';
import  emailjs from '@emailjs/browser';
import { EmailJSResponseStatus } from '@emailjs/browser';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {

  // constructor(private emailjs: emailjs)
  
  ngOnInit(): void {
  }
  
  async sendEmail(form: NgForm){
    console.log(form)
    emailjs.init('DfVuStD8G8ujnxSe_');
    let response = await emailjs.send('service_njktu9h','template_42omheo',{
      from_name: form.value.name,
      to_name: 'Taras',
      from_email: form.value.email,
      subject: 'subject',
      message: form.value.message
    })
    
    // await emailjs.sendForm('service_njktu9h', 'template_42omheo', body , 'DfVuStD8G8ujnxSe_')
    // .then((result: EmailJSResponseStatus) => {
    //   console.log(result.text);
    // }, (error) => {
    //   console.log(error.text);
    // });
    
  }
}
