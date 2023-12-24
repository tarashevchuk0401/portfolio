import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  @Output() navigateTo = new EventEmitter<string>();

  navigateToElement(element: string) {
    this.navigateTo.emit(element);
  }

}
