"use client";

import { differenceInDays, isEqual, isPast, isWithinInterval } from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { useReservation } from "../_context/ReservationContext";

function isAlreadyBooked(range, datesArr) {
  return (
    range.from &&
    range.to &&
    datesArr.some((date) =>
      isWithinInterval(date, { start: range.from, end: range.to }),
    )
  );
}

function DateSelector({ cabin, settings, bookedDates }) {
  const { range, setRange, resetRange } = useReservation();
  // SETTINGS
  const { minBookLength, maxBookLength } = settings;
  // Cabins
  const { regularPrice, discount } = cabin;
  const numNights = differenceInDays(range.to, range.from);
  const cabinPrice = numNights * regularPrice;


  return (
    <div className="flex flex-col justify-between">
      <DayPicker
        animate
        className="place-self-center pt-12"
        mode="range"
        min={minBookLength + 1}
        max={maxBookLength}
        startMonth={new Date()}
        selected={range}
        onSelect={(selected) =>
          setRange({ from: selected.from, to: selected.to })
        }
        endMonth={new Date(new Date().getFullYear() + 5, 0)}
        captionLayout="dropdown"
        numberOfMonths={1}
        disabled={(currentDates) =>
          isPast(currentDates) ||
          bookedDates.some((date) => isEqual(date, currentDates))
        }
      />

      <div className="bg-accent-500 text-primary-800 flex h-[72px] items-center justify-between px-8">
        <div className="flex items-baseline gap-6">
          <p className="flex items-baseline gap-2">
            {discount > 0 ? (
              <>
                <span className="text-2xl">${regularPrice - discount}</span>
                <span className="text-primary-700 font-semibold line-through">
                  ${regularPrice}
                </span>
              </>
            ) : (
              <span className="text-2xl">${regularPrice}</span>
            )}
            <span className="">/night</span>
          </p>
          {numNights ? (
            <>
              <p className="bg-accent-600 px-3 py-2 text-2xl">
                <span>&times;</span> <span>{numNights}</span>
              </p>
              <p>
                <span className="text-lg font-bold uppercase">Total</span>
                <span className="text-2xl font-semibold">${cabinPrice}</span>
              </p>
            </>
          ) : null}
        </div>

        {range.from || range.to ? (
          <button
            className="border-primary-800 cursor-pointer border px-4 py-2 text-sm font-semibold"
            onClick={() => resetRange()}
          >
            Clear
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default DateSelector;
