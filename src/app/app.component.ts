import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'clicker';

  @Input()
  value = 1;

  clicker = {
    clicksNum: 0
  };

  onClick() {
    ++this.clicker.clicksNum;
  }
}
