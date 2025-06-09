import Spinner from "@/starter/components/Spinner";

function loading() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Spinner />
      <p>Cabins Loadin ....</p>
    </div>
  );
}

export default loading;
