import { PlaywrightCrawler, Dataset } from "crawlee";

const crawler = new PlaywrightCrawler({
  // Use the requestHandler to process each of the crawled pages.
  async requestHandler({ request, page, enqueueLinks, pushData, log }) {
    const title = await page.title();
    log.info(`Title of ${request.loadedUrl} is '${title}'`);

    // Save results as JSON to `./storage/datasets/default` directory.
    await pushData({ title, url: request.loadedUrl });

    // Extract links from the current page and add them to the crawling queue.
    await enqueueLinks();
  },
  maxRequestsPerCrawl: 20,
});

const main = async () => {
  await crawler.run(["https://crawlee.dev"]);

  const data = await crawler.getData();
  console.table(data.items);
};

main();
