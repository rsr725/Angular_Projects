import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showSecret = false;
  logItems = [];
  clickCount = 1;
  countBtnClick() {
    this.showSecret = !this.showSecret;
    this.logItems.push(new Date());
  }
  getColor(logItem) {
    return logItem >= 5 ? 'blue' : 'transparent';
  }
}
