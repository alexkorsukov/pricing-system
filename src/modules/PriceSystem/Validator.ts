import { Tax } from './Tax';
import { ERRORS } from './config';

interface ValidatorInterface {
  validateNumberOfItems(numberOfItems: number): void | any;

  validatePricePerItem(pricePerItem: number): void | any;

  validateStateCode(pricePerItem: string): void | any;
}

/**
 * Validator Class
 */
export class Validator implements ValidatorInterface {
  /**
   * Validate Number Of Items
   *
   * @param numberOfItems
   * @param pricePerItem
   * @private
   */
  public validateNumberOfItems(numberOfItems: number): void | any {
    if (!(this.isPositive(numberOfItems) && this.isInteger(numberOfItems))) {
      throw new Error(ERRORS.ERROR_NUMBER_OF_ITEMS);
    }
  }

  /**
   * Validate Price Per Item
   *
   * @param pricePerItem
   */
  public validatePricePerItem(pricePerItem: number): void | any {
    if (!this.isPositive(pricePerItem)) {
      throw new Error(ERRORS.ERROR_PRICE);
    }
  }

  /**
   * Validate State Code
   *
   * @param pricePerItem
   */
  public validateStateCode(stateCode: string): void | any {
    if (new Tax().getTaxRate(stateCode) === false) {
      // Throw an exception as sales tax cannot be found in the DB
      throw new Error(ERRORS.ERROR_STATE_CODE);
    }
  }

  /**
   * Is Positive
   *
   * @param numberOfItems
   * @param pricePerItem
   */
  private isPositive(val: any): boolean {
    if (typeof val === 'number') {
      if (val > 0) {
        return true;
      }
    }

    return false;
  }

  /**
   * Is Integer
   *
   * @param numberOfItems
   * @param pricePerItem
   */
  private isInteger(val: any): boolean {
    if (typeof val === 'number') {
      if (Number.isInteger(val)) {
        return true;
      }
    }

    return false;
  }
}
