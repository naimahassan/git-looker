import { Component } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
@Component({
 selector: 'app-root',
 templateUrl: './app.component.html',
 styleUrls: ['./app.component.css']
})
export class AppComponent {
 constructor(private http:HttpClient){}
 userName="";
 githubData:any="";
 avatarUrl="./assets/imageholder.png";

 searchUser(){
   
 }

} 






