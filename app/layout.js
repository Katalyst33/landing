import "./globals.css";
import "./main.scss";
import { Outfit } from "next/font/google";
import Footer from "./components/Footer";
import Header from "./components/Header";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Katalyst Technologies",
  description: "Design and Development Agency",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={outfit.className} suppressHydrationWarning={true}>
        <div className={`bg-white text-neutral-950`}>
          <Header />
          <div className="lg:container mx-auto pt-10">{children}</div>

          <Footer />
        </div>
      </body>
    </html>
  );
}
