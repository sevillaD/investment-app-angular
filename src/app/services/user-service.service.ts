import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User} from '../model/User';

const USER_URL = `${environment.BASE_URL}/user`;

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }

  getAllUsers():Observable<any>{
    return this.http.get<User[]>(`${USER_URL}/all`);
  }

  getUserById(userId:number):Observable<any>{
    return this.http.get(`${USER_URL}/get-user/${userId}`);
  }

  addUser(user:User):Observable<any>{
    return this.http.post(`${USER_URL}/register`, user);
  }

  updateUser(user:User):Observable<any>{
    return this.http.put(`${USER_URL}/update-user`, user);
  }

  deleteUser(userId:number):Observable<any>{
    return this.http.delete(`${USER_URL}/delete/${userId}`);
  }

}
