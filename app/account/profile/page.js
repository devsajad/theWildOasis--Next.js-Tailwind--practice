import SelectCountry from "@/app/_components/SelectCountry";
import UserUpdateProfileForm from "@/app/_components/UserUpdateProfileForm";
import { auth } from "@/app/_lib/auth";
import { getGuest } from "@/app/_lib/data-service";

export default async function Page() {
  const {
    user: { email },
  } = await auth();

  const guest = await getGuest(email);

  return (
    <div>
      <h2 className="text-accent-400 mb-4 text-2xl font-semibold">
        Update your guest profile
      </h2>

      <p className="text-primary-200 mb-8 text-lg">
        Providing the following information will make your check-in process
        faster and smoother. See you soon!
      </p>

      <UserUpdateProfileForm guest={guest}>
        {/* <SelectCountry
          name="nationality"
          id="nationality"
          className="bg-primary-200 text-primary-800 w-full rounded-sm px-5 py-3 shadow-sm"
          defaultCountry={guest.nationality}
        /> */}
      </UserUpdateProfileForm>
    </div>
  );
}
