import { UsersIcon } from "@heroicons/react/24/solid";
import { getCabin } from "../_lib/data-service";

async function CabinDetails({ params }) {
  const { cabinId } = await params;
  const cabin = await getCabin(cabinId);
  console.log(cabin);
  const { name, maxCapacity, description } = cabin;

  return (
    <>
      <h3 className="text-accent-100 font-black text-7xl mb-5 translate-x-[-254px] bg-primary-950 p-6 pb-1 w-[150%]">
        Cabin {name}
      </h3>

      <p className="text-lg text-primary-300 mb-10">{description}</p>

      <ul className="flex flex-col gap-4 mb-7">
        <li className="flex gap-3 items-center">
          <UsersIcon className="h-5 w-5 text-primary-600" />
          <span className="text-lg">
            For up to <span className="font-bold">{maxCapacity}</span> guests
          </span>
        </li>
      </ul>
    </>
  );
}

export default CabinDetails;
