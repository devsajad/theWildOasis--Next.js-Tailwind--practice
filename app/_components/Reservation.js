import { auth } from "../_lib/auth";
import {
  getBookedDatesByCabinId,
  getCabin,
  getSettings,
} from "../_lib/data-service";
import DateSelector from "./DateSelector";
import LoginMessage from "./LoginMessage";
import ReservationForm from "./ReservationForm";

async function Reservation({ cabinId }) {
  const [cabin, settings, bookedDate] = await Promise.all([
    getCabin(cabinId),
    getSettings(),
    getBookedDatesByCabinId(cabinId),
  ]);

  const session = await auth();

  return (
    <div className="border-primary-800 grid min-h-[400px] grid-cols-2 items-center border">
      <DateSelector cabin={cabin} settings={settings} bookedDate={bookedDate} />
      {session?.user ? (
        <ReservationForm cabin={cabin} user={session.user} />
      ) : (
        <LoginMessage />
      )}
    </div>
  );
}

export default Reservation;
