import { Component } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ecommerce';
  showHead: boolean = false;
  constructor(private router: Router) {
    router.events.forEach((event) => {
      if (event instanceof NavigationEnd) {
        if (['/login','/'].includes(event['url'])) {
          this.showHead = false;
        } else {
          this.showHead = true;
        }
      }
    });
  }
  ngOnInit() {}
}
