import { Component, OnInit } from '@angular/core';
import AOS from "aos";

@Component({
  selector: 'app-list-cards',
  standalone: true,
  imports: [],
  templateUrl: './list-cards.component.html',
  styleUrl: './list-cards.component.scss'
})
export class ListCardsComponent implements OnInit {
  ngOnInit(): void {
    AOS.init()
  }
}
