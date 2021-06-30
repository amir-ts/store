import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private dataservice: DataService
  ) { }
  password = ""
  username = ""

  ngOnInit(): void {
  }
  sendData() {
    this.dataservice.callLogin(
      this.username, this.password
    )
    .subscribe(
      x => {
        console.log(x)
      }
    )
  }
}
