import { Component } from '@angular/core';
import { BannerComponent } from './banner/banner.component';
import { ListCardsComponent } from './list-cards/list-cards.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BannerComponent, ListCardsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
