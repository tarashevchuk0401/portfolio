import { Component, EventEmitter, Output, inject } from '@angular/core';
import { TranslocoRootModule } from '../transloco.root.module';
import { TranslocoService } from '@ngneat/transloco';
import {MatMenuModule} from '@angular/material/menu';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [TranslocoRootModule, MatMenuModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  private readonly translocoService = inject(TranslocoService);

  language: string = 'en'

  @Output() navigateTo = new EventEmitter<string>();

  navigateToElement(element: string) {
    this.navigateTo.emit(element);
  }

  onLanguageChange(lang: string) {
    this.translocoService.setActiveLang(lang);
    this.language = lang;
  }

}
