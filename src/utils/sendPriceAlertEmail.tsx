import { Resend } from "resend";
import { Listing } from "./scrapePrices";
import PriceAlertEmail from "../../emails/price-alert";

const resend = new Resend(process.env.RESEND_TOKEN!);

const sendPriceAlertEmail = async (listings: Listing[]) => {
  console.log("Sending email...");

  const { data, error } = await resend.emails.send({
    from: "Drive Price Notifier <alerts@resend.dev>",
    to: process.env.RECIPIENT_EMAIL!,
    subject: `${listings.length} New Price Alerts`,
    react: <PriceAlertEmail listings={listings} />,
  });

  if (error) {
    console.error("Failed to send email:");
    return console.error({ error });
  } else {
    console.log("Email sent successfully");
  }

  return data;
};

export default sendPriceAlertEmail;
