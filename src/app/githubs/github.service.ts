import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { environment } from '../../environments/environment'

import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
  private username:string;
  private api_key:string = environment.api_key;

  constructor(private HtttpClient) {
    console.log("service ready")
   }

}
