import Spinner from "../_components/Spinner";

function loading() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Spinner />
      <p>Cabins Loading ....</p>
    </div>
  );
}

export default loading;
