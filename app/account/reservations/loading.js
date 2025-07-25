import Spinner from "@/app/_components/Spinner";

function loading() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Spinner />
      <p>Loading ....</p>
    </div>
  );
}

export default loading;
