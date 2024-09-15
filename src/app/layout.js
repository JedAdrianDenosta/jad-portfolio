import { Inter, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const ibm = IBM_Plex_Sans({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "Jed Adrian Denosta",
  description: "Made with love my Jed",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
