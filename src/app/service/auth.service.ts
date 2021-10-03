import { Injectable } from '@angular/core';
import{environment} from 'src/environments/environment'
import{HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseURL = environment.baseUrl;

  constructor(private http:HttpClient) { }
  login(email, password){
    return this.http.post(this.baseURL+'/login',{email: email ,password: password})
  }
  ajout(Admin){
    return this.http.post(this.baseURL+'/users',Admin)
  }  
}
