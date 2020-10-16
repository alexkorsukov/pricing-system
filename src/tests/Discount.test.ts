import { expect } from 'chai';
import { Discount } from '../modules/PriceSystem/Discount';

/**
 * Testing functionality for Discount Class
 */
describe('Testing Discount functionality', function () {
  it('Test1: Number of Items = 10, pricePerItem = 1', function () {
    const result = new Discount().getPriceWithDiscount(10, 1);

    expect(result).equal(10);
  });
  it('Test2: Number of Items = 10, pricePerItem = 99.9', function () {
    const result = new Discount().getPriceWithDiscount(99.9, 10);

    expect(result).equal(999);
  });
  it('Test3: Number of Items = 0, pricePerItem = 0', function () {
    const result = new Discount().getPriceWithDiscount(0, 0);

    expect(result).equal(0);
  });
  it('Test4: Number of Items = 11, pricePerItem = 100', function () {
    const result = new Discount().getPriceWithDiscount(11, 100);

    expect(result).equal(1067);
  });
  it('Test5: Number of Items = 11, pricePerItem = 500', function () {
    const result = new Discount().getPriceWithDiscount(11, 500);

    expect(result).equal(5225);
  });
  it('Test5: Number of Items = 14, pricePerItem = 700', function () {
    const result = new Discount().getPriceWithDiscount(14, 700);

    expect(result).equal(9114);
  });
  it('Test6: Number of Items = 15, pricePerItem = 1000', function () {
    const result = new Discount().getPriceWithDiscount(15, 1000);

    expect(result).equal(13500);
  });
});
