import * as cheerio from "cheerio";

const scrapePrices = async () => {
  const html = await fetch("https://diskprices.com").then((res) => res.text());
  const $ = cheerio.load(html);

  const prices = $("tr.disk")
    .toArray()
    .map((el) => {
      const $el = $(el);

      return {
        name: $(el).find(".name").text(),
        productType: $(el).attr("data-product-type"),
        pricePerGB:
          Number($($el.children().get(0)).text().replace("$", "")) ?? undefined,
        pricePerTB:
          Number($($el.children().get(1)).text().replace("$", "")) ?? undefined,
        price:
          Number($($el.children().get(2)).text().replace("$", "")) ?? undefined,
        capacity: $($el.children().get(3)).text(),
        warranty: $($el.children().get(4)).text() || undefined,
        formFactor: $($el.children().get(5)).text(),
        technology: $($el.children().get(6)).text(),
        condition: $($el.children().get(7)).text(),
      };
    });

  return prices;
};

export default scrapePrices;
