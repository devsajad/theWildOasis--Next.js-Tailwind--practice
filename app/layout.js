import "./styles/global.css";
import { Josefin_Sans } from "next/font/google";
import Header from "./_components/Header";
import ReservationProvider from "./_context/ReservationContext";

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
        className={`bg-primary-950 text-primary-100 relative flex min-h-screen flex-col ${font.className}`}
      >
        <Header />

        <div className="grid flex-1 px-6 py-12">
          <main className="mx-auto w-full">
            <ReservationProvider>{children}</ReservationProvider>
          </main>
        </div>
      </body>
    </html>
  );
}

export default RootLayout;
