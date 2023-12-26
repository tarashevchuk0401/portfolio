import { Component } from '@angular/core';
import { TranslocoRootModule } from '../transloco.root.module';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [TranslocoRootModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

}
