import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(private http: HttpClient) { }
  baseUrl= 'http://localhost:4200/';

  login(loginData): Observable<AuthService> {
    return this.http.post<AuthService>(this.baseUrl + 'test/api/auth.php', loginData);
  }

  // getUserDetails(username, password){
  //   return this.http.post('/api/auth.php', {
  //     username,
  //     password
  //   }).subscribe(data =>{
  //     console.log(data, "sdasdasdas")
  //   })
  // }
}
