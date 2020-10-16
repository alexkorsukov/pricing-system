import { TaxRates, TaxRateType } from './config';

interface TaxInterface {
  getPriceAfterTax(priceBeforeTax: number, stateCode: string): number;
}

/**
 * Tax Class
 */
export class Tax implements TaxInterface {
  private readonly rates: TaxRateType;

  constructor() {
    this.rates = TaxRates;
  }

  /**
   * Get Price With Discount
   *
   * @param numberOfItems
   * @param pricePerItem
   */
  public getPriceAfterTax(priceBeforeTax: number, stateCode: string): number {
    const taxRate: number = this.getTaxRate(stateCode);

    // Apply discount to the order price
    const priceAfterTax = priceBeforeTax * (1 + taxRate / 100);

    return priceAfterTax;
  }

  /**
   * Get Discount
   *
   * @param orderPrice
   * @private
   */
  private getTaxRate(stateCode: string): number {
    stateCode = stateCode.trim().toUpperCase();

    // Loop the rates to find appropriate tax rate
    for (let entry of this.rates) {
      if (entry.province === stateCode) {
        return entry.taxRate;
      }
    }

    // Throw an exception as sales tax cannot be found in the DB
    try {
      throw new Error(
        `Orders from the province/state code you provided (${stateCode}) are not accepted.`
      );
    } catch (e) {
      console.log(e);
    }
  }
}
