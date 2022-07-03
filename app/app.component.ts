import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title:string = 'HelloWorld';
  imgUrl:string = "assets/images/BridgeLabz-Logo.jpg";
  url:string = "https://www.bridgelabz.com";
  userName:string = "";
  nameError:string = "";

  //On application start will initialize title to "Hello from bridgelabz" 
  ngOnInit() : void {
    this.title = "Hello from bridgelabz";
  }

  //Clicking on bridgelabz logo will trigger event and redirect to bridgelabz website  
  onClick($event : any) {
    console.log("Save button is clicked",$event);
    window.open(this.url);
  }

  //On input validate username and bind with view 
  onUserInput($event:any) {
    console.log("Change event occured!", $event)
    const nameRegex = RegExp('^[A-Z][a-z]{2,}$');
    if(nameRegex.test(this.userName)) {
      this.nameError = "";
    } else {
      this.nameError = "username Invalid!"
    }
  }
}
