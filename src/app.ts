import scrapePrices from "./utils/scrapePrices";

const main = async () => {
  const prices = await scrapePrices();
  console.log("prices", prices);
};

main();
