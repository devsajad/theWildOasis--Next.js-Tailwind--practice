import CabinDetails from "@/app/_components/CabinDetails";
import CabinImage from "@/app/_components/CabinImage";
// import SkeletonCard from "@/app/_components/SkeletonCard";
import { getCabin, getCabins } from "@/app/_lib/data-service";
// import Spinner from "@/starter/components/Spinner";
// import SpinnerMini from "@/starter/components/SpinnerMini";
import Reservation from "@/app/_components/Reservation";
import Spinner from "@/starter/components/Spinner";
import { EyeSlashIcon, MapPinIcon } from "@heroicons/react/24/solid";
import { Suspense } from "react";
// import Image from "next/image";
// import { Suspense } from "react";

// Make This page Static by defining all possible params :

export async function generateStaticParams() {
  const cabins = await getCabins();
  const ids = cabins.map((cabin) => ({ cabinId: String(cabin.id) }));
  return ids;
}

export async function generateMetadata({ params }) {
  const { cabinId } = await params;
  const { name: cabinName } = await getCabin(cabinId);

  return { title: `cabin ${cabinName}` };
}

export default async function Page({ params }) {
  const { cabinId } = await params;
  const { name: cabinName } = getCabin(cabinId);

  return (
    <div className="mx-auto mt-8 max-w-6xl">
      <div className="border-primary-800 mb-24 grid grid-cols-[3fr_4fr] gap-20 border px-10 py-3">
        <CabinImage params={params} />

        <div>
          <CabinDetails params={params} />

          <ul className="mb-7 flex flex-col gap-4">
            <li className="flex items-center gap-3">
              <MapPinIcon className="text-primary-600 h-5 w-5" />
              <span className="text-lg">
                Located in the heart of the{" "}
                <span className="font-bold">Dolomites</span> (Italy)
              </span>
            </li>
            <li className="flex items-center gap-3">
              <EyeSlashIcon className="text-primary-600 h-5 w-5" />
              <span className="text-lg">
                Privacy <span className="font-bold">100%</span> guaranteed
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-accent-400 mb-10 text-center text-5xl font-semibold">
          Reserve {cabinName} today. Pay on arrival.
        </h2>

        <Suspense fallback={<Spinner />}>
          <Reservation cabinId={cabinId} />
        </Suspense>
      </div>
    </div>
  );
}
