import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [],
  template: `
  <h3>Los juegos favoritos de {{username}} </h3>
   <ul>
    @for (game of games; track game.id){
      <li>{{game.id}} {{game.name}} </li>

    } 
   </ul>
  `,
  styles: ``
})
export class GamesComponent {
 @Input() username: string = '';
 @Output() addFavoriteEvent = new EventEmitter <string> ();

  fav (gameName: string){
    this.addFavoriteEvent.emit(gameName)
  }

  games = [
    {
      id: 1,
      name: "Uncharted4"
    },
    {
      id: 2,
      name: "Horizon Zero Dawn"
    },
    {
      id: 3,
      name: "GTA"
    }

  ]

}
