import { UsersIcon } from "@heroicons/react/24/solid";
import { getCabin } from "../_lib/data-service";
import ShowMore from "./ShowMore";

async function CabinDetails({ params }) {
  const { cabinId } = await params;
  const cabin = await getCabin(cabinId);

  const { name, maxCapacity, description } = cabin;

  return (
    <>
      <h3 className="text-accent-100 bg-primary-950 mb-5 w-[150%] translate-x-[-254px] p-6 pb-1 text-7xl font-black">
        Cabin {name}
      </h3>

      <ShowMore line={3}>{description}</ShowMore>

      <ul className="mb-7 flex flex-col gap-4">
        <li className="flex items-center gap-3">
          <UsersIcon className="text-primary-600 h-5 w-5" />
          <span className="text-lg">
            For up to <span className="font-bold">{maxCapacity}</span> guests
          </span>
        </li>
      </ul>
    </>
  );
}

export default CabinDetails;
