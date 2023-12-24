import { Component, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    MatSidenavModule,
    HomeComponent,
    SidebarComponent,
    PortfolioComponent,
    ContactComponent,
    MatIconModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';

  constructor(private el: ElementRef) { }

  navigateTo(element: string) {
    const aboutMe: HTMLElement = this.el.nativeElement.querySelector('.breakpointAboutMe');
    const portfolio: HTMLElement = this.el.nativeElement.querySelector('.breakpointPortfolio');
    const contact: HTMLElement = this.el.nativeElement.querySelector('.breakpointContact');

    let yOffset: number = 0;
    switch (element) {
      case 'aboutMe':
        yOffset = aboutMe.offsetTop;
        break;
      case 'portfolio':
        yOffset = portfolio.offsetTop;
        break;
      case 'contact':
        yOffset = contact.offsetTop;
        break;
    }
    
    window.scrollTo({
      top: yOffset
    })
  }
}
