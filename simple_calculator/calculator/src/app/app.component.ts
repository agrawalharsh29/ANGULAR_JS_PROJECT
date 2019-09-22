import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'calculator';
  first;
  second;
  res;
  st="";

  addition() {
  this.res = this.first + this.second;
  this.st = ""+this.first+" + "+this.second+" = " +this.res;
  }
  subtraction() {
  this.res = this.first - this.second;
  this.st = ""+this.first+" - "+this.second+" = " +this.res;
  }
  multiplication() {
  this.res = this.first * this.second;
  this.st = ""+this.first+" * "+this.second+" = " +this.res;
  }
  division() {
  this.res = this.first / this.second;
  this.st = ""+this.first+" / "+this.second+" = " +this.res;
  }
}
