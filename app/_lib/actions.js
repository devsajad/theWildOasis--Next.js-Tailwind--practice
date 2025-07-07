"use server";

import { revalidatePath } from "next/cache";
import { deleteBooking, getBookings, updateGuest } from "./data-service";

const { signIn, signOut, auth } = require("./auth");

export async function signInAction() {
  await signIn("google", { redirectTo: "/account" });
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}

export async function updateProfile(formData) {
  const session = await auth();
  // 1. Check authenticated user access to the API
  if (!session) throw new Error("You must be logged in");
  // don't use try/catch block in server actions just throw errors
  // => in this way error will catch by the error boundry

  // 2. Get data
  const nationalID = formData.get("nationalID");

  // 3. Input Validation => always treat inputs as unsafe
  if (!/^\d{6,12}$/.test(nationalID)) throw new Error("Invalid national ID");

  // 4. Database query and update
  const updatedFields = {
    nationalID: nationalID,
    nationality: "Anguilla",
    countryFlag: "https://flagcdn.com/ai.svg",
  };

  // 5.Revalidate path to get update UI
  revalidatePath("/account/profile");

  await updateGuest(session.user.guestId, updatedFields);
}

export async function deleteBookingAction(bookingId) {
  const session = await auth();
  if (!session) throw new Error("You must be logged in");

  // Check user own the booking that wants to delete
  const userBookings = await getBookings(session.user.guestId);
  const isUserOwnId = userBookings.some((booking) => booking.id === bookingId);

  if (!isUserOwnId)
    throw new Error("You are not allowed to delete this reservation");

  await deleteBooking(bookingId);

  revalidatePath("/account/reservations");
}
