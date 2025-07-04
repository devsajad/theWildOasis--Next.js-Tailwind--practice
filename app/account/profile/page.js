import SelectCountry from "@/app/_components/SelectCountry";
import UserUpdateProfileForm from "@/app/_components/UserUpdateProfileForm";
import Image from "next/image";

export default function Page() {
  const nationality = "/portugal";

  return (
    <div>
      <h2 className="text-accent-400 mb-4 text-2xl font-semibold">
        Update your guest profile
      </h2>

      <p className="text-primary-200 mb-8 text-lg">
        Providing the following information will make your check-in process
        faster and smoother. See you soon!
      </p>

      <UserUpdateProfileForm>
        <SelectCountry
          name="nationality"
          id="nationality"
          className="bg-primary-200 text-primary-800 w-full rounded-sm px-5 py-3 shadow-sm"
          defaultCountry={nationality}
        />
      </UserUpdateProfileForm>
    </div>
  );
}
