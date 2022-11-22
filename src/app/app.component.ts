import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  width = 600;
  height = 500;
  color1 = 'yellow';
  color2 = 'pink';
  percentColor1 = 0;
  percentColor2 = 100;
  fontSize = 52;

  layout = {
    horizontal: false,
    horizontalRev: false,
    vertical: false,
    verticalRev: false,
  };

  colors = [
    'red',
    'purple',
    'blue',
    'green',
    'yellow',
    'brown',
    'grey',
    'black',
  ];

  getBannerStyles() {
    return {
      width: `${this.width}px`,
      height: `${this.height}px`,
      backgroundImage: `linear-gradient(to bottom, ${this.color1} ${this.percentColor1}%, ${this.color2} ${this.percentColor2}%)`,
    };
  }
}
