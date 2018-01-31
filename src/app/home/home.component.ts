import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  Name='Manjunath';
  public myID="Myid";
  public myText="";
  onclick(){
    console.log('Welcome to myapp')
    this.myText="Welcome";
  }

}
