import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { SearchModule } from './search/search.module';
import { results } from './results.';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, SearchModule],
  templateUrl: './app.component.html',
  styles: [`
    :host {
      display: block;
      height: 100%;
      padding: 2em 3em;
    }
  `]
})
export class App {
  protected results = results;
}

bootstrapApplication(App);
