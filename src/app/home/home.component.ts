import { Component } from '@angular/core';
import { TranslocoRootModule } from '../transloco.root.module';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TranslocoRootModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
