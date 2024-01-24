import matchesCriteria from "./utils/matchesCriteria";
import scrapePrices from "./utils/scrapePrices";
import sendPriceAlertEmail from "./utils/sendPriceAlertEmail";

const main = async () => {
  const prices = await scrapePrices();
  const filteredPrices = prices.filter(matchesCriteria);
  await sendPriceAlertEmail(filteredPrices);
};

main();
