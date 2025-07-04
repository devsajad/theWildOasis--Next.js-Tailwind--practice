import { getBookedDatesByCabinId, getCabin } from "@/app/_lib/data-service";

export async function GET(req, { params }) {
  const { cabinId } = await params;

  try {
    const [cabin, bookedDate] = await Promise.all([
      getCabin(cabinId),
      getBookedDatesByCabinId(cabinId),
    ]);
    return Response.json({ ...cabin,bookedDate });
  } catch (error) {
    return Response.json({ Error: "Cabin Not Found" });
  }
}
