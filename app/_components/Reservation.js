import {
  getBookedDatesByCabinId,
  getCabin,
  getSettings,
} from "../_lib/data-service";
import DateSelector from "./DateSelector";
import ReservationForm from "./ReservationForm";

async function Reservation({ cabinId }) {
  const [cabin, settings, bookedDate] = await Promise.all([
    getCabin(cabinId),
    getSettings(),
    getBookedDatesByCabinId(cabinId),
  ]);

  return (
    <div className="border-primary-800 grid min-h-[400px] grid-cols-2 items-center border">
      <DateSelector cabin={cabin} settings={settings} bookedDate={bookedDate} />
      <ReservationForm cabin={cabin} />
    </div>
  );
}

export default Reservation;
