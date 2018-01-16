import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GithubService } from './githubs/github.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private http: HttpClient, private _githubService: GithubService) { }
  userName: any = [];
  githubData: any = [];
  //avatarUrl="./assets/imageholder.png";

  ngOnInit() {
    this._githubService.getUser().subscribe(userName => {
      //console.log(userName)
      this.userName = userName
    })
  }

  //  searchUser(){

  //  }

}






