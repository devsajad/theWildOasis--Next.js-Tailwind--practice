import "./styles/global.css";
import { Josefin_Sans } from "next/font/google";
import Header from "./_components/Header";

const font = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    template: "%s / The Wild Oasis",
    default: "Welocome to The Wild Oasis",
  },
  description:
    "Luxurious cabin hotel, located in the heart of the Italian Dolomites, surrounded by beautiful mountains and dark forests",
};

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${font.className} bg-primary-950 text-primary-100 min-h-screen flex flex-col relative`}
      >
        <Header />

        <div className="flex-1 px-6 py-12 grid">
          <main className="mx-auto w-full">{children}</main>
        </div>
      </body>
    </html>
  );
}

export default RootLayout;
