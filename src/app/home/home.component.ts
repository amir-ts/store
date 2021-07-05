import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { 
  }
  
  ngOnInit(): void { //ngOnInit is a method which runs at the start of the componennt
    // void stops the method from having a return
    this.alerter()
    
  }
  
  alerter(){ //this is a method that we use to alert
    alert("به سورن شاپ خوش آمدید")
  } 
}
