import { Listing } from "./scrapePrices";

const matchesCriteria = (listing: Listing): boolean => {
  const { pricePerTB, technology, condition, formFactor } = listing;

  if (pricePerTB === undefined) {
    return false;
  }

  if (condition !== "New") {
    return false;
  }

  if (technology !== "HDD") {
    return false;
  }

  if (formFactor !== `Internal 3.5"`) {
    return false;
  }

  if (pricePerTB > 15) {
    return false;
  }

  return true;
};

export default matchesCriteria;
