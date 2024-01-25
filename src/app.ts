import { CronJob } from "cron";
import matchesCriteria from "./utils/matchesCriteria";
import scrapePrices from "./utils/scrapePrices";
import sendPriceAlertEmail from "./utils/sendPriceAlertEmail";

const main = async () => {
  const prices = await scrapePrices();
  const filteredPrices = prices.filter(matchesCriteria);
  await sendPriceAlertEmail(filteredPrices);
};

main();

new CronJob(
  "0 */2 * * * ",
  async () => {
    await main();
  },
  null,
  true
);
