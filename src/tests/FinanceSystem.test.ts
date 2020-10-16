import { expect } from 'chai';
import { doCalculation } from '../modules/PriceSystem';

/**
 * Testing main doCalculate function
 */
describe('Testing main doCalculate function', function () {
  it('Test1: data set: 500, 1, ON', function () {
    const result = doCalculation({
      numItems: 500,
      pricePerItem: 1,
      stateCode: 'ON',
    });

    expect(result).equal('$565.00');
  });
  it('Test2: data set: 3600, $2.25, MI', function () {
    const result = doCalculation({
      numItems: 3600,
      pricePerItem: 2.25,
      stateCode: 'MI',
    });

    expect(result).equal('$7,984.98');
  });
  it('Test3: data set: 10000, $1, DE', function () {
    const result = doCalculation({
      numItems: 10000,
      pricePerItem: 1,
      stateCode: 'DE',
    });

    expect(result).equal('$9,000.00');
  });
  it('Test4: data set: 7000, $1, QC', function () {
    const result = doCalculation({
      numItems: 7000,
      pricePerItem: 1,
      stateCode: 'QC',
    });

    expect(result).equal('$7,484.87');
  });
  it('Test5: data set: 0, 0, DD', function () {
    try {
      doCalculation({
        numItems: 0,
        pricePerItem: 0,
        stateCode: 'DD',
      });
    } catch (e) {
      expect(e.toString()).equals(
        'Error: Orders from the province/state code you provided are not accepted.'
      );
    }
  });
});
