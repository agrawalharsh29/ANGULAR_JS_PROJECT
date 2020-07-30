import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogComponent } from './log/log.component';
import { Userpage1Component } from './userpage1/userpage1.component';
import { Userpage2Component } from './userpage2/userpage2.component';
import { Userpage3Component } from './userpage3/userpage3.component';
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from '@angular/common/http';
import {AuthService} from './auth.service';

@NgModule({
  declarations: [
    AppComponent,
    LogComponent,
    Userpage1Component,
    Userpage2Component,
    Userpage3Component,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([{
    path:'log',
    component:LogComponent,
    },
    {
    path:'',
    component:HomeComponent
    },
    {
    path:'userpage1',
    component:Userpage1Component,
    },
    {
     path:'userpage2',
    component:Userpage2Component,
    },
    {
     path:'userpage3',
    component:Userpage3Component,
    },
    {
     path:'home',
    component:HomeComponent,
    }

    ])
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
