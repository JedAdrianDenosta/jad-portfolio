import { Inter, IBM_Plex_Sans, Roboto } from "next/font/google";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });
const ibm = IBM_Plex_Sans({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});
// const roboto = Roboto({
//   weight: ["100", "300", "400", "500", "700", "900"],
//   subsets: ["latin"],
// });

export const metadata = {
  title: "Jed Adrian Denosta",
  description: "Made with love my Jed",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={ibm.className}>{children}</body>
    </html>
  );
}
