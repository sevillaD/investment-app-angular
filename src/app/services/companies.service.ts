import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Company } from '../model/Company';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

const COMPANIES_URL = `${environment.BASE_URL}/investment`;

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {

  constructor(private http: HttpClient) { }

  getCompanies():Observable<any>{
    return this.http.get<Company[]>(`${COMPANIES_URL}/all-companies`);
  }

  addCompany(company:Company):Observable<any>{
    return this.http.post(`${COMPANIES_URL}/add-company`, company)
  }

  getCompanyById(id: number):Observable<any>{
    return this.http.get(`${COMPANIES_URL}/company/${id}`);
  }

  updateCompany(company:Company):Observable<any>{
    return this.http.put(`${COMPANIES_URL}/update-company`, company);
  }

}
