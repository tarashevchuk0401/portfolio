import { Component, EventEmitter, Output, inject } from '@angular/core';
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
export class HeaderComponent {
  private readonly translocoService = inject(TranslocoService)
  
  @Output() navigateTo = new EventEmitter<string>();

  navigateToElement(element: string) {
    this.navigateTo.emit(element);
  }  
  
  onLanguageChange(event: string) {
    this.translocoService.setActiveLang(event)
  }


}
