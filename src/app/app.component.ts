import { Component } from '@angular/core';
import {Github} from './github'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  github = "data" [""];

  constructor() {
    this.github = ["", ""]
  }

}






