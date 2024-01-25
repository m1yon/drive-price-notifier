import {
  Body,
  Button,
  Container,
  Column,
  Head,
  Heading,
  Html,
  Row,
  Section,
  Text,
  Tailwind,
  Link,
} from "@react-email/components";
import * as React from "react";
import type { Listing } from "@/utils/scrapePrices";

type PriceAlertEmailProps = {
  listings: Listing[];
};

export const PriceAlertEmail = ({ listings }: PriceAlertEmailProps) => {
  return (
    <Html lang="en">
      <Tailwind>
        <Head></Head>
        <Body className="bg-white my-auto mx-auto font-sans">
          <Container className="bg-white px-2 md:px-16 rounded-lg">
            <Heading>{listings.length} New Price Alerts</Heading>
            <Section>
              {listings.map((listing) => (
                <Row key={listing.name} className="mb-8">
                  <Column className="w-32">
                    <Text className="text-3xl font-bold m-0">
                      ${listing.pricePerTB?.toFixed(2)}
                    </Text>
                    <Text className="m-0 text-sm text-gray-500">per TB</Text>
                  </Column>

                  <Column>
                    <Link href={listing.url}>
                      {listing.name.length < 70
                        ? listing.name
                        : listing.name.substring(0, 70) + "..."}
                    </Link>
                  </Column>
                </Row>
              ))}
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default PriceAlertEmail;

PriceAlertEmail.PreviewProps = {
  listings: [
    {
      name: "MaxDigitalData 8TB 7200 RPM 256MB Cache SATA 6.0Gb/s 3.5inch Internal Enterprise Hard Drive (MD8000GSA25672E) - 3 Years Warranty",
      productType: "internal_hdd",
      pricePerGB: 0.011,
      pricePerTB: 11.25,
      price: 90,
      capacity: "8 TB",
      warranty: "3 years",
      formFactor: 'Internal 3.5"',
      technology: "HDD",
      condition: "New",
    },
    {
      name: "MaxDigitalData 8TB 7200 RPM 256MB Cache SATA 6.0Gb/s 3.5inch Internal Hard Drive for Surveillance (MD8000GSA25672DVR) - 3 Years Warranty",
      productType: "internal_hdd",
      pricePerGB: 0.012,
      pricePerTB: 11.74,
      price: 94,
      capacity: "8 TB",
      warranty: "3 years",
      formFactor: 'Internal 3.5"',
      technology: "HDD",
      condition: "New",
    },
    {
      name: 'Western Digital 14TB Ultrastar DC HC530 SATA HDD - 7200 RPM Class, SATA 6 Gb/s, 512MB Cache, 3.5" - WUH721414ALE604',
      productType: "internal_hdd",
      pricePerGB: 0.013,
      pricePerTB: 12.9,
      price: 181,
      capacity: "14 TB",
      warranty: "5 years",
      formFactor: 'Internal 3.5"',
      technology: "HDD",
      condition: "New",
    },
    {
      name: "Toshiba MG Series Enterprise 14TB 3.5’’ SATA 6Gbit/s Internal HDD 7200RPM 550TB/year 24/7 Operation. MG07ACA14TE",
      productType: "internal_hdd",
      pricePerGB: 0.013,
      pricePerTB: 13.21,
      price: 185,
      capacity: "14 TB",
      warranty: "5 years",
      formFactor: 'Internal 3.5"',
      technology: "HDD",
      condition: "New",
    },
    {
      name: "WD RE4 2 TB Enterprise Hard Drive: 3.5 Inch, 7200 RPM, SATA II, 64 MB Cache (WD2003FYYS) (Old Model)",
      productType: "internal_hdd",
      pricePerGB: 0.014,
      pricePerTB: 14,
      price: 28,
      capacity: "2 TB",
      warranty: undefined,
      formFactor: 'Internal 3.5"',
      technology: "HDD",
      condition: "New",
    },
  ],
} as PriceAlertEmailProps;
