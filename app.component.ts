import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pokedex';
  links = [
    { path: '/pokemon', label: 'POKEMON' },
    { path: '/about', label: 'ABOUT' }
  ]
}
