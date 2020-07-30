import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Router } from '@angular/router'; 

@Injectable({
  providedIn: 'root'
})
export class AuthService {

	url = "http://localhost:3000";

  constructor(private http: HttpClient, private router: Router) { }

  getUserDetails(username,password)
  {
  return this.http.post(
    'http://localhost:3000/login',
    {username, password},
    {responseType: 'text'}).subscribe(
  res => {
  if(res=="harsh")
  {
  	this.router.navigateByUrl('/userpage1');
  }
  else if(res=="abc")
  {
  	this.router.navigateByUrl('/userpage2');
  }
else{
  console.log("wrong id");
  }
  },
  err => console.log(err)
  )
  }
  }
