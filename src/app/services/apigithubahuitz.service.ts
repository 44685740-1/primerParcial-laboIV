import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApigithubahuitzService {
  private apiUrl = 'https://api.github.com/users/44685740-1';

  constructor(private http: HttpClient) { }

  getProfileData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
  
}
