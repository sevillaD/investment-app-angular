import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Transactions } from '../model/Transactions';

const TRANSACTIONS_URL = `${environment.BASE_URL}`

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  constructor(private http: HttpClient) { }

  getAllTransactions():Observable<any>{
    return this.http.get<any>(`${TRANSACTIONS_URL}/allTransactions`);
  }
  
}
