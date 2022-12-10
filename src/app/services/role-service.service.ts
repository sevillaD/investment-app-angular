import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Role } from '../model/Role';

const ROLES_URL = `${environment.BASE_URL}/role`

const COMPANIES_URL = `${environment.BASE_URL}/investment`;

@Injectable({
  providedIn: 'root'
})
export class RoleServiceService {

  constructor(private http: HttpClient) { }

  getAllRoles():Observable<any>{
    return this.http.get<Role[]>(`${ROLES_URL}/all`);
  }

  getRoleById(roleId:number):Observable<any>{
    return this.http.get(`${ROLES_URL}/role/${roleId}`);
  }

  addRole(role: Role):Observable<any>{
    return this.http.post(`${ROLES_URL}/add-role`, role);
  }

  updateRole(role: Role):Observable<any>{
    return this.http.put(`${ROLES_URL}/update-role`, role);
  }

  deleteRole(roleId: number):Observable<any>{
    return this.http.delete(`${ROLES_URL}/delete/${roleId}`);
  }

}
