import { Injectable } from '@angular/core';
import { HttpClient }from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GitService {
  private username:string;
  private client_id = "82439588"; 
  private client_secret = "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";

  constructor(private http:HttpClient) { 
      this.username = "eude313";
    }
      getProfileInfo(){
        return this.http.get("https://api.github.com/users/" + this.username + "?client_id="+ this.client_id + "&client_secret=" + this.client_secret)
      }
    
      getProfileRepos(){
        return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id="+ this.client_id + "&client_secret=" + this.client_secret)
      }
      updateProfile(username:string){
        this.username = username;
      }


}
