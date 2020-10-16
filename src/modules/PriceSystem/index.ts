/**
 * Price System Config
 */
import { Discount } from './Discount';
import { Tax } from './Tax';

export type PriceSystemType = {
  numItems: number;
  pricePerItem: number;
  stateCode: string;
};

/**
 * Do price calculation
 *
 * @param args
 */
export const doCalculation = (args: PriceSystemType): string => {
  const priceWithDiscount = new Discount().getPriceWithDiscount(
    args.numItems,
    args.pricePerItem
  );

  const finalPrice = new Tax().getPriceAfterTax(
    priceWithDiscount,
    args.stateCode
  );

  return `$${toPriceFormat(finalPrice)}`;
};

/**
 * Converts strings and numbers to money/price format
 * 10000.565 -> 10,000.56
 *
 * @param val
 */
const toPriceFormat = (
  val: string | number,
  noDecimalZeros = false
): string => {
  let minimumFractionDigits = 2;

  // No no decimal zeros 105.00 -> 105
  if (noDecimalZeros && val.toString().includes('.')) {
    minimumFractionDigits = 0;
  }

  return Number(val).toLocaleString(undefined, {
    minimumFractionDigits: minimumFractionDigits,
    maximumFractionDigits: 2,
  });
};
