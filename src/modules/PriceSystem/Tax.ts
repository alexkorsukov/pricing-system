import { TaxRates, TaxRateType } from './config';
import { Validator } from './Validator';

interface TaxInterface {
  getPriceAfterTax(priceBeforeTax: number, stateCode: string): number;

  getTaxRate(stateCode: string): number | boolean;
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
    // Validate
    const validator = new Validator();
    validator.validatePricePerItem(priceBeforeTax);
    validator.validateStateCode(stateCode);

    // Main logic
    const taxRate = this.getTaxRate(stateCode);

    if (typeof taxRate === 'number') {
      // Apply discount to the order price
      const priceAfterTax = priceBeforeTax * (1 + taxRate / 100);

      return priceAfterTax;
    }
  }

  /**
   * Get Discount
   *
   * @param orderPrice
   * @private
   */
  public getTaxRate(stateCode: string): number | boolean {
    stateCode = stateCode.trim().toUpperCase();

    // Loop the rates to find appropriate tax rate
    for (const entry of this.rates) {
      if (entry.province === stateCode) {
        return entry.taxRate;
      }
    }

    return false;
  }
}
