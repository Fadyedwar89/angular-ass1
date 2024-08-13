import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent {
  img1: string = './assets/imgs/poert1.png';
  img2: string = './assets/imgs/poert2.png';
  img3: string = './assets/imgs/port3.png';
  imglayer: String = '';
  check: boolean = true;

  showLayer(imglayer: String): void {
    this.imglayer = imglayer;
    this.check = false;
  }

  distroyLayer(): void {
    this.check = true;
  }
}
