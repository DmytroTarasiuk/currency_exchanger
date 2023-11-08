export enum Currencies {
    UAH = 'UAH',
    USD = 'USD',
    EUR = 'EUR',
}

export interface ExchangeRatesResponse {
    conversion_rates: {
        [Currencies.EUR]: number,
        [Currencies.USD]: number,
        [Currencies.UAH]?: number
    };
}