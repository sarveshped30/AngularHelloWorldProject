import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title:string = 'HelloWorld';
  imgUrl:string = "assets/images/BridgeLabz-Logo.jpg"

  ngOnInit() : void {
    this.title = "Hello from bridgelabz";
  }
}
