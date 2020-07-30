import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {

  constructor(private Auth: AuthService) { }

  ngOnInit(): void {
  }
  loginuser(event){
  event.preventDefault()
  const target = event.target;
  const username = target.querySelector('#username').value
  const password = target.querySelector('#password').value

  this.Auth.getUserDetails(username,password)
  }
}
