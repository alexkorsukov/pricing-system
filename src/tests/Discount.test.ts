import { expect } from 'chai';
import { Discount } from '../modules/PriceSystem/Discount';
import { doCalculation } from '../modules/PriceSystem';
import { ERRORS } from '../modules/PriceSystem/config';

/**
 * Testing functionality for Discount Class
 */
describe('Testing Discount functionality', function () {
  it('Test1: Number of Items = 10, pricePerItem = 1 (Successful)', function () {
    const result = new Discount().getPriceWithDiscount(10, 1);

    expect(result).equal(10);
  });
  it('Test2: Number of Items = 10, pricePerItem = 99.9 (Successful)', function () {
    const result = new Discount().getPriceWithDiscount(10, 99.9);

    expect(result).equal(999);
  });
  it('Test3: Number of Items = 0, pricePerItem = 0 (Should Fail, wrong data)', function () {
    try {
      new Discount().getPriceWithDiscount(0, 0);
    } catch (e) {
      expect(e.toString()).equals(`Error: ${ERRORS.ERROR_NUMBER_OF_ITEMS}`);
    }
  });
  it('Test4: Number of Items = 11, pricePerItem = 100 (Successful)', function () {
    const result = new Discount().getPriceWithDiscount(11, 100);

    expect(result).equal(1067);
  });
  it('Test5: Number of Items = 11, pricePerItem = 500 (Successful)', function () {
    const result = new Discount().getPriceWithDiscount(11, 500);

    expect(result).equal(5225);
  });
  it('Test5: Number of Items = 14, pricePerItem = 700 (Successful)', function () {
    const result = new Discount().getPriceWithDiscount(14, 700);

    expect(result).equal(9114);
  });
  it('Test6: Number of Items = 15, pricePerItem = 1000 (Successful)', function () {
    const result = new Discount().getPriceWithDiscount(15, 1000);

    expect(result).equal(13500);
  });
});
