import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { user } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'http://localhost:25167/bavuaapi/user';
  constructor(private http: HttpClient) { }

  SignUp(newUser: user): Observable<number> {
    
    return this.http.post<number>(this.url + '/SignUp', newUser)
  }
}
