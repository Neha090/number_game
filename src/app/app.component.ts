import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 // title = 'project';

 num =0 ;

 constructor() {
   this.num=3;
 }

 onadd()
 {
     this.num=this.num+1;
 }

 onsub()
 {
   this.num=this.num-1;
 }
}
