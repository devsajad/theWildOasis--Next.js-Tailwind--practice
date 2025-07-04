"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";

const filterData = [
  {
    name: "All Cabins",
    url: "all",
  },
  {
    name: "1-3 guests",
    url: "small",
  },
  {
    name: " 4-7 guests",
    url: "medium",
  },
  {
    name: "8-12 guests",
    url: "large",
  },
];

function Filter() {
  const searchParams = useSearchParams();
  const activeFilter = searchParams.get("capacity");

  const pathname = usePathname();
  const router = useRouter();

  function handleClick(filter) {
    // Create SearchParams
    const params = new URLSearchParams(searchParams);
    params.set("capacity", filter);
    
    // Programmatic navigation
    router.replace(`${pathname}?${params}`, { scroll: false });
  }

  return (
    <div className="my-6 flex justify-end">
      {filterData.map((filter, i) => (
        <button
          onClick={() => handleClick(filter.url)}
          key={i}
          className={`${activeFilter === filter.url ? "text-primary-50 bg-primary-700" : ""} hover:bg-primary-700 hover:text-primary-50 border-primary-800 min-w-28 cursor-pointer border-1 px-3 py-2 text-center text-sm transition-all duration-300`}
        >
          {filter.name}
        </button>
      ))}
    </div>
  );
}

export default Filter;
