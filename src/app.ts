import matchesCriteria from "./utils/matchesCriteria";
import scrapePrices from "./utils/scrapePrices";

const main = async () => {
  const prices = await scrapePrices();
  const filteredPrices = prices.filter(matchesCriteria);

  console.log("filteredPrices", filteredPrices);
};

main();
