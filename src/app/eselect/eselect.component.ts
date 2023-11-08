import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../services/currency.service';
import { Currencies } from '../types/currencies';

@Component({
  selector: 'app-eselect',
  templateUrl: './eselect.component.html',
  styleUrls: ['./eselect.component.css']
})
export class EselectComponent {
  amount: number = 100;
  fromCurrency: Currencies = Currencies.UAH;
  toCurrency: Currencies = Currencies.USD;
  currencies = Object.values(Currencies);
  convertedAmount: number = 0;

  constructor(private currencyService: CurrencyService) { }

  ngOnInit(): void {
    this.updateExchangeRate();
  }

  updateExchangeRate() {
    this.currencyService.getExchangePairRate(this.fromCurrency, this.toCurrency).subscribe((data: any) => {
      const { conversion_rate } = data;
      this.convertedAmount = parseFloat((conversion_rate * this.amount).toFixed(3));
    });
  }

  onAmountChange(value: number) {
    this.amount = value
    this.updateExchangeRate();
  }

  onFromCurrencyChange(value: Currencies) {
    this.fromCurrency = value;
    this.updateExchangeRate();
  }

  onToCurrencyChange(value: Currencies) {
    this.toCurrency = value;
    this.updateExchangeRate();
  }

  onReverseCurrenciesClick() {
    const tempCurrency = this.fromCurrency;
    this.fromCurrency = this.toCurrency;
    this.toCurrency = tempCurrency;

    this.updateExchangeRate();
  }
}
