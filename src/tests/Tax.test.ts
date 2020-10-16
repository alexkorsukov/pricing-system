import { expect } from 'chai';
import { doCalculation } from '../modules/PriceSystem';
import { Discount } from '../modules/PriceSystem/Discount';
import { Tax } from '../modules/PriceSystem/Tax';
import { ERRORS } from '../modules/PriceSystem/config';

/**
 * Testing functionality for Tax Class
 */
describe('Testing Tax functionality', function () {
  it('Test1: get price after tax rate for Ontario, price before tax = 0 (Should Fail, wrong price before tax)', function () {
    try {
      new Tax().getPriceAfterTax(0, 'ON');
    } catch (e) {
      expect(e.toString()).equals(`Error: ${ERRORS.ERROR_PRICE}`);
    }
  });
  it('Test2: get price after tax rate for Quebec, price before tax = 1000 (Successful)', function () {
    const result = new Tax().getPriceAfterTax(1000, 'QC');

    expect(result).equal(1149.75);
  });
  it('Test3: get price after tax rate for dummy state code = DD, price = 1000 (Successful)', function () {
    try {
      new Tax().getPriceAfterTax(1000, 'DD');
    } catch (e) {
      expect(e.toString()).equals(`Error: ${ERRORS.ERROR_STATE_CODE}`);
    }
  });
});
