type PriceSystemType = {
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
  return args.numItems.toString();
};
