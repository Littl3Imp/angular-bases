import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  standalone: false,

  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroNames: string[] = ['Spiderman', 'ironman', 'hulk', 'thor', 'black widow'];
  public deleteHeroe?: string;

  removeLastHeroe(): void {
    this.deleteHeroe = this.heroNames.pop();
  }
}
