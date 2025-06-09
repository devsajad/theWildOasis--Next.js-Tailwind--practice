import CabinDetails from "@/app/_components/CabinDetails";
import CabinImage from "@/app/_components/CabinImage";
import SkeletonCard from "@/app/_components/SkeletonCard";
import { getCabin, getCabins } from "@/app/_lib/data-service";
import Spinner from "@/starter/components/Spinner";
import SpinnerMini from "@/starter/components/SpinnerMini";
import { EyeSlashIcon, MapPinIcon, UsersIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { Suspense } from "react";

export async function generateMetadata({ params }) {
  const { cabinId } = await params;
  const { name } = await getCabin(cabinId);

  return { title: `cabin ${name}` };
}

// Make This page Static by defining all possible params :

// export async function generateStaticParams() {
//   const cabins = await getCabins();

//   const params = cabins.map((cabin) => {
//     return { cabinId: String(cabin.id) };
//   });

//   return params;
// }

export default async function Page({ params }) {
  return (
    <div className="max-w-6xl mx-auto mt-8">
      <div className="grid grid-cols-[3fr_4fr] gap-20 border border-primary-800 py-3 px-10 mb-24">
        <CabinImage params={params} />

        <div>
          <CabinDetails params={params} />

          <ul className="flex flex-col gap-4 mb-7">
            <li className="flex gap-3 items-center">
              <MapPinIcon className="h-5 w-5 text-primary-600" />
              <span className="text-lg">
                Located in the heart of the{" "}
                <span className="font-bold">Dolomites</span> (Italy)
              </span>
            </li>
            <li className="flex gap-3 items-center">
              <EyeSlashIcon className="h-5 w-5 text-primary-600" />
              <span className="text-lg">
                Privacy <span className="font-bold">100%</span> guaranteed
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-5xl font-semibold text-center">
          Reserve today. Pay on arrival.
        </h2>
      </div>
    </div>
  );
}
