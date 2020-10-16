import { DiscountRates, DiscountRateType } from './config';
import { Validator } from './Validator';

interface DiscountInterface {
  getPriceWithDiscount(numberOfItems: number, pricePerItem: number): number;
}

/**
 * Discount Class
 */
export class Discount implements DiscountInterface {
  private readonly rates: DiscountRateType;

  constructor() {
    this.rates = DiscountRates;
  }

  /**
   * Get Price With Discount
   *
   * @param numberOfItems
   * @param pricePerItem
   */
  public getPriceWithDiscount(
    numberOfItems: number,
    pricePerItem: number
  ): number {
    // Validate
    const validator = new Validator();
    validator.validateNumberOfItems(numberOfItems);
    validator.validatePricePerItem(pricePerItem);

    // Main logic
    const orderPrice = numberOfItems * pricePerItem;
    const discount = this.getDiscount(orderPrice);

    // Apply discount to the order price
    const priceWithDiscount = orderPrice * (1 - discount / 100);

    return priceWithDiscount;
  }

  /**
   * Get Discount
   *
   * @param orderPrice
   * @private
   */
  private getDiscount(orderPrice: number): number {
    let discount = 0;

    // Loop the rates to find appropriate discount
    for (const entry of this.rates) {
      if (orderPrice < entry.orderValue) {
        return discount;
      } else if (orderPrice >= entry.orderValue) {
        discount = entry.discountRate;
      }
    }

    return discount;
  }
}
