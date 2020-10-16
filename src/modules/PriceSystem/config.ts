/**
 * Discount Rate Type
 */
export type DiscountRateType = {
  orderValue: number;
  discountRate: number;
}[];

/**
 * Tax Rate Type
 */
export type TaxRateType = {
  province: string;
  taxRate: number;
}[];

/**
 * Discount Rate Config
 */
export const DiscountRates: DiscountRateType = [
  {
    orderValue: 1000,
    discountRate: 3,
  },
  {
    orderValue: 5000,
    discountRate: 5,
  },
  {
    orderValue: 7000,
    discountRate: 7,
  },
  {
    orderValue: 10000,
    discountRate: 10,
  },
];

/**
 * Tax Rate Config
 */
export const TaxRates: TaxRateType = [
  {
    province: 'AB',
    taxRate: 5,
  },
  {
    province: 'ON',
    taxRate: 13,
  },
  {
    province: 'QC',
    taxRate: 14.975,
  },
  {
    province: 'MI',
    taxRate: 6,
  },
  {
    province: 'DE',
    taxRate: 0,
  },
];

/**
 * Error codes
 */
export const ERRORS = {
  ERROR_NUMBER_OF_ITEMS:
    'Number of items must be greater than zero and integer.',
  ERROR_PRICE: 'Price must be greater than zero.',
  ERROR_STATE_CODE:
    'Orders from the province/state code you provided are not accepted.',
};
