import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-app-izizi';
  products = [
    {
      name: "banana",
      description: "Sweet and lovely fruit",
    },
    {
      name: "coconut",
      description:"yeah some people's head is like me",
    },
    {
      name: "pawpaw",
    },
];
}
