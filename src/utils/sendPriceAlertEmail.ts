import { Resend } from "resend";
import { Listing } from "./scrapePrices";

const resend = new Resend(process.env.RESEND_TOKEN!);

const sendPriceAlertEmail = async (listings: Listing[]) => {
  console.log("Sending email...");

  const { data, error } = await resend.emails.send({
    from: "Acme <onboarding@resend.dev>",
    to: process.env.RECIPIENT_EMAIL!,
    subject: "Hello World",
    html: "<p>Congrats on sending your <strong>first email</strong>!</p>",
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
