import "./globals.css";
import "./styles/main.scss";
import { Outfit } from "next/font/google";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Head from 'next/head';

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Katalyst Technologies",
  description: "Design and Development Agency, We build custom software solutions for businesses. We are a team of experienced developers, designers, and digital strategists. We specialize in web and mobile app development, e-commerce, and digital transformation consulting.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <Head>
      {/* Global metadata */}
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
      <meta property="og:title" content={metadata.title} />
      <meta property="og:description" content={metadata.description} />
      <meta property="twitter:card" content="summary_large_image" />
      {/* Additional metadata can be added here */}
    </Head>
      <body className={outfit.className} suppressHydrationWarning={false}>
        <div className={`bg-white text-neutral-950`}>
          <Header />
          <div className="lg:container mx-auto pt-10">{children}</div>

          <Footer />
        </div>
      </body>
    </html>
  );
}
