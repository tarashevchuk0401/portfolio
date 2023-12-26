import { Component, EventEmitter, OnChanges, Output, SimpleChanges, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { TranslocoService } from '@ngneat/transloco';
import {MatMenuModule} from '@angular/material/menu';
import { TranslocoRootModule } from '../transloco.root.module';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIconModule, MatMenuModule, TranslocoRootModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent  {
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
