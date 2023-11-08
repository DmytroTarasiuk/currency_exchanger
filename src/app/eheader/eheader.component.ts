import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../services/currency.service';
import { Currencies, ExchangeRatesResponse } from '../types/currencies';

@Component({
  selector: 'app-eheader',
  templateUrl: './eheader.component.html',
  styleUrls: ['./eheader.component.css']
})
export class EheaderComponent {
  usdRate: number = 0;
  eurRate: number = 0;
  baseCode = Currencies.UAH;

  constructor(private currencyService: CurrencyService) {}

  ngOnInit(): void {
    this.currencyService.getExchangeRates(this.baseCode).subscribe((data: ExchangeRatesResponse) => {
      const {conversion_rates} = data
      this.usdRate = parseFloat(conversion_rates.USD.toFixed(3));
      this.eurRate = parseFloat(conversion_rates.EUR.toFixed(3));
    });
  }
}
