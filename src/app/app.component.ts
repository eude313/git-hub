import { Component, OnInit } from '@angular/core';
import { GitService }from './git.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'the-hub';

  profile:any;
  repos:any;
  username!:string;
  
  constructor(private gitService:GitService){
       this.gitService.updateProfile(this.username);
       this.gitService.getProfileInfo().subscribe((profile) => {
         this.profile = profile;
       });
    
      this.gitService.getProfileRepos().subscribe((repos) => {
        this.repos = repos;
      });
    }

    findProfile(){
        this.gitService.updateProfile(this.username);
        this.gitService.getProfileInfo().subscribe((profile) => {
          this.profile = profile;
        });
      
        this.gitService.getProfileRepos().subscribe((repos) => {
          this.repos = repos;
        })
      }
        ngOnInit() {
          
          this.gitService.updateProfile('eude313');
          this.gitService.getProfileInfo().subscribe((profile: any) => this.profile = profile);
          this.gitService.getProfileRepos().subscribe((repos: any) =>  this.repos = repos);
    }

}

