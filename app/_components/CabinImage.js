import Image from "next/image";
import { getCabin } from "../_lib/data-service";

async function CabinImage({ params }) {
  const { cabinId } = await params;
  const { name, image } = await getCabin(cabinId);

  return (
    <div className="relative scale-[1.15] -translate-x-3">
      <Image
        priority
        fill
        src={image}
        alt={`Cabin ${name}`}
        className="object-cover"
      />
    </div>
  );
}

export default CabinImage;
