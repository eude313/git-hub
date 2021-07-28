import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule }from '@angular/forms';
import { GitService } from './git.service';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [GitService],
  bootstrap: [AppComponent]
})
export class AppModule { }


// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';
// import { HttpClient,HttpHeaders }from '@angular/common/http';
// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { HttpClientModule } from '@angular/common/http';
// 
// @NgModule({
//   declarations: [
//     AppComponent,
//     ProfileComponent,
    
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     HttpClientModule,
//     
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }