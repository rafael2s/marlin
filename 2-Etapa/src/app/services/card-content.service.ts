import { HttpClient } from '@angular/common/http';
import { Posts } from './../model/post.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardContentService {
  constructor(private http: HttpClient) { }
  public getPosts():Observable<any>{
    return this.http.get(`https://jsonplaceholder.typicode.com/posts`);
  }

}
