import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { environment } from '../../environments/environment'

import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
  private username:string;
  private api_key:string = environment.api_key;

  constructor(private _http:HttpClient) {
    this.username = 'naimahassan';
    //console.log("service ready")
   }

   getUser(){
     return this._http.get('https://api.github.com/users/'+this.username + '?api_key' + this.api_key)
      .map(result => result);
   }

   getRepos(){
    return this._http.get('https://api.github.com/users/'+this.username + '/repos' + '?api_key' + this.api_key)
    .map(result => result);
   }

   updateUser(username:string){
    this.username = username;
   }

}
