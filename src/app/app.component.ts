import { Component, ElementRef, LOCALE_ID, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { MatIconModule } from '@angular/material/icon';
import { TranslocoRootModule } from './transloco.root.module';
import { TranslocoService } from '@ngneat/transloco';
import {MatMenuModule} from '@angular/material/menu';


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
    MatIconModule,
    TranslocoRootModule,
    MatMenuModule

  ],
  // providers: [{ provide: LOCALE_ID, useValue: 'en-US' }],

  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
  private readonly translocoService = inject(TranslocoService)


  constructor(private el: ElementRef) { }

  onLanguageChange(event: string) {
    this.translocoService.setActiveLang(event)
  }

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
function takeUntilDestroyed(): import("rxjs").OperatorFunction<any, unknown> {
  throw new Error('Function not implemented.');
}

