import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:3002/api/auth'; // ?Your backend API URL
  LoggedIn:boolean = true

  constructor(private http: HttpClient,private router:Router) { }

  async register(data:any):Promise<any>{
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    try {
      
      const response = await this.http.post(`${this.apiUrl}/register`, data, { headers }).toPromise();
      return response;
    } catch (error) {
      console.error(error)
    }
  }

  async login(data: any): Promise<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    try {
      
      const response = await this.http.post(`${this.apiUrl}/login`, data, { headers }).toPromise();
      this.LoggedIn = true;
      return response;
    } catch (error) {
      console.error(error)
    }
  }

  isLoggedIn():boolean{
    return this.LoggedIn
  }

  logout(){
    this.LoggedIn = false;
    sessionStorage.clear()
    this.router.navigate(['/login'])

  }


}
