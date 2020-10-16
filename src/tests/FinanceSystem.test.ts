import { expect } from 'chai';
import { doCalculation } from '../modules/PriceSystem';
import { ERRORS } from '../modules/PriceSystem/config';

/**
 * Testing main doCalculate function
 */
describe('Testing main doCalculate function', function () {
  it('Test1: data set: 500, 1, ON (Successful)', function () {
    const result = doCalculation({
      numItems: 500,
      pricePerItem: 1,
      stateCode: 'ON',
    });

    expect(result).equal('$565.00');
  });
  it('Test2: data set: 3600, $2.25, MI (Successful)', function () {
    const result = doCalculation({
      numItems: 3600,
      pricePerItem: 2.25,
      stateCode: 'MI',
    });

    expect(result).equal('$7,984.98');
  });
  it('Test3: data set: 10000, $1, DE (Successful)', function () {
    const result = doCalculation({
      numItems: 10000,
      pricePerItem: 1,
      stateCode: 'DE',
    });

    expect(result).equal('$9,000.00');
  });
  it('Test4: data set: 7000, $1, QC (Successful)', function () {
    const result = doCalculation({
      numItems: 7000,
      pricePerItem: 1,
      stateCode: 'QC',
    });

    expect(result).equal('$7,484.87');
  });
  it('Test5: data set: 1, 10, DD (Should Fail: wrong state code)', function () {
    try {
      doCalculation({
        numItems: 1,
        pricePerItem: 10,
        stateCode: 'DD',
      });
    } catch (e) {
      expect(e.toString()).equals(`Error: ${ERRORS.ERROR_STATE_CODE}`);
    }
  });
  it('Test6: data set: -10.555, 10000, Ontario (Should Fail: wrong number of items)', function () {
    try {
      doCalculation({
        numItems: -10.555,
        pricePerItem: 10000,
        stateCode: 'ON',
      });
    } catch (e) {
      expect(e.toString()).equals(`Error: ${ERRORS.ERROR_NUMBER_OF_ITEMS}`);
    }
  });
  it('Test7: data set: 10, -50.55, Ontario (Should Fail: wrong price)', function () {
    try {
      doCalculation({
        numItems: 10,
        pricePerItem: -50.55,
        stateCode: 'ON',
      });
    } catch (e) {
      expect(e.toString()).equals(`Error: ${ERRORS.ERROR_PRICE}`);
    }
  });
});
