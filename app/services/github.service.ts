import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{
    private username:string;
    private client_id = 'e93d80ab06949476073b';
    private client_secret = 'c1cd842301e254d72071ccc5f3dc36f9411de428';
    
    constructor(private _http: Http){
        console.log('Github Service Ready...');
        this.username = 'Sokos6';
    }
    
    getUser(){
        return this._http.get('https://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
            .map(res => res.json());
    }
    
    getRepos(){
        return this._http.get('https://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret)
            .map(res => res.json());
    }
    
    updateUser(username:string){
        this.username = username;
    }
}