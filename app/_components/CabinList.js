import { getCabins } from "../_lib/data-service";
import CabinCard from "./CabinCard";
import Filter from "./Filter";

async function CabinList({ filter }) {
  const cabins = await getCabins();
  let filteredCabins;

  if (cabins.length === 0) return null;

  if (filter === "all") {
    filteredCabins = cabins;
  } else if (filter === "small") {
    filteredCabins = cabins.filter((cabin) => cabin.maxCapacity <= 3);
  } else if (filter === "medium") {
    filteredCabins = cabins.filter(
      (cabin) => cabin.maxCapacity >= 4 && cabin.maxCapacity <= 7,
    );
  } else if (filter === "large") {
    filteredCabins = cabins.filter((cabin) => cabin.maxCapacity >= 8);
  }

  return (
    <>
      <Filter />
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:gap-12 xl:gap-14">
        {filteredCabins.map((cabin) => (
          <CabinCard cabin={cabin} key={cabin.id} />
        ))}
      </div>
    </>
  );
}

export default CabinList;
