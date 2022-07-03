import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title:string = 'HelloWorld';

  ngOnInit() : void {
    this.title = "Hello from bridgelabz";
  }
}
