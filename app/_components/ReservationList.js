"use client";

import { useOptimistic } from "react";
import ReservationCard from "./ReservationCard";
import { deleteBookingAction } from "../_lib/actions";

function ReservationList({ bookings }) {
  const [optimisticBookings, setOptimisticBookings] = useOptimistic(
    bookings,
    (currentBookings, bookingId) => {
      return currentBookings.filter((booking) => booking.id !== bookingId);
    },
  );

  async function handleDelete(bookingId) {
    setOptimisticBookings(bookingId);
    await deleteBookingAction(bookingId);
  }

  return (
    <ul className="space-y-6">
      {optimisticBookings.map((booking) => (
        <ReservationCard
          booking={booking}
          key={booking.id}
          onDelete={handleDelete}
        />
      ))}
    </ul>
  );
}

export default ReservationList;
