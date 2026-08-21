import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { SITE, RESIDENCES } from "@/lib/content";
import PopupForm from "@/components/PopupForm";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: "Sobha One World Hoskote | 1-4 BHK Pre-Launch Luxury Apartments, East Bangalore",
  description:
    "Sobha One World Hoskote: 300-acre pre-launch township by Sobha Limited. Luxury 1-4 BHK apartments from ₹1.09 Cr*. Price list, floor plans & location.",
  keywords: [
    "Sobha One World Hoskote",
    "Sobha One World",
    "luxury apartments Hoskote",
    "pre-launch apartments East Bangalore",
    "3 BHK Hoskote",
    "Sobha Limited Bangalore",
  ],
  alternates: { canonical: "/" },
  manifest: "/site.webmanifest",
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE.url,
    siteName: "Sobha One World Hoskote",
    title: "Sobha One World Hoskote | 1-4 BHK Pre-Launch Luxury Apartments",
    description:
      "A 300-acre master-planned township by Sobha Limited in Hoskote, East Bangalore. 1-4 BHK luxury residences from ₹1.09 Cr*.",
    images: [{ url: "/img/hero.jpg", width: 1200, height: 630, alt: "Sobha One World Hoskote" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sobha One World Hoskote | 1-4 BHK Pre-Launch Luxury Apartments",
    description: "300-acre pre-launch township in East Bangalore. 1-4 BHK luxury residences from ₹1.09 Cr*.",
    images: ["/img/hero.jpg"],
  },
};

const BUILD_DATE = new Date().toISOString().slice(0, 10);

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ApartmentComplex",
      "@id": `${SITE.url}/#property`,
      name: "Sobha One World",
      description:
        "300-acre pre-launch master-planned township in Hoskote, East Bangalore offering 1-4 BHK luxury apartments by Sobha Limited.",
      url: `${SITE.url}/`,
      image: `${SITE.url}/img/hero.jpg`,
      telephone: SITE.phone,
      priceRange: "₹1.09 Cr* onwards",
      numberOfRooms: "1-4",
      petsAllowed: false,
      address: {
        "@type": "PostalAddress",
        streetAddress: SITE.address.street,
        addressLocality: SITE.address.locality,
        addressRegion: SITE.address.region,
        postalCode: SITE.address.postal,
        addressCountry: "IN",
      },
      geo: { "@type": "GeoCoordinates", latitude: "13.0712", longitude: "77.7988" },
      dateModified: BUILD_DATE,
      makesOffer: RESIDENCES.map((r) => {
        // "₹1.09 Cr*" -> 10900000. Configurations quoted "On Request" carry no price.
        const crore = r.price.startsWith("₹") ? Number(r.price.replace(/[^0-9.]/g, "")) : null;
        const inr = crore ? Math.round(crore * 1e7) : null;
        return {
          "@type": "Offer",
          name: `${r.name} — Sobha One World Hoskote`,
          url: `${SITE.url}/sobha-one-world-hoskote-price`,
          availability: "https://schema.org/PreOrder",
          priceCurrency: "INR",
          ...(inr
            ? {
                price: inr,
                priceSpecification: {
                  "@type": "PriceSpecification",
                  minPrice: inr,
                  priceCurrency: "INR",
                  valueAddedTaxIncluded: false,
                },
              }
            : { description: "Price on request" }),
          itemOffered: {
            "@type": "Apartment",
            name: r.name,
            numberOfRooms: r.id.charAt(0),
            floorSize: {
              "@type": "QuantitativeValue",
              value: Number(r.area.replace(/[^0-9]/g, "")),
              unitCode: "FTK",
            },
          },
        };
      }),
      amenityFeature: [
        "Swimming Pool",
        "Gymnasium",
        "Clubhouse",
        "Landscaped Gardens",
        "Children Play Area",
        "24/7 Security",
      ].map((name) => ({ "@type": "LocationFeatureSpecification", name, value: true })),
    },
    {
      // channel partner entity — RealEstateAgent is the correct LocalBusiness subtype
      "@type": "RealEstateAgent",
      "@id": `${SITE.url}/#business`,
      name: "Sobha One World Hoskote — Authorised Channel Partner",
      url: `${SITE.url}/`,
      telephone: SITE.phone,
      image: `${SITE.url}/img/hero.jpg`,
      priceRange: "₹₹₹",
      address: {
        "@type": "PostalAddress",
        streetAddress: SITE.address.street,
        addressLocality: SITE.address.locality,
        addressRegion: SITE.address.region,
        postalCode: SITE.address.postal,
        addressCountry: "IN",
      },
      geo: { "@type": "GeoCoordinates", latitude: "13.0712", longitude: "77.7988" },
      areaServed: ["Hoskote", "East Bangalore", "Whitefield", "Bangalore"].map((name) => ({
        "@type": "Place",
        name,
      })),
      contactPoint: {
        "@type": "ContactPoint",
        telephone: SITE.phone,
        contactType: "Sales",
        availableLanguage: ["English", "Hindi", "Kannada"],
      },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${cormorant.variable} ${inter.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <PopupForm />
      </body>
    </html>
  );
}
