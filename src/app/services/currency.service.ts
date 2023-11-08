import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Currencies } from '../types/currencies';

@Injectable({
  providedIn: 'root'
})

export class CurrencyService {
  private apiUrl = 'https://v6.exchangerate-api.com/v6/5913ec8aeb70001cb4c1d2ea';

  constructor(private http: HttpClient) { }

  getExchangeRates(baseCode: Currencies): Observable<any> {
    return this.http.get(`${this.apiUrl}/latest/${baseCode}`);
  }

  getExchangePairRate(baseCode: Currencies, targetCode: Currencies): Observable<any> {
    return this.http.get(`${this.apiUrl}/pair/${baseCode}/${targetCode}`);
  }
}