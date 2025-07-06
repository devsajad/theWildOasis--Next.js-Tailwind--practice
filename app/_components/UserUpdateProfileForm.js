"use client";

import { useFormStatus } from "react-dom";
import { updateProfile } from "../_lib/actions";

function UserUpdateProfileForm({ children, guest }) {
  const { fullName, email, nationalID, countryFlag } = guest;

  return (
    <form
      className="bg-primary-900 flex flex-col gap-6 px-12 py-8 text-lg"
      action={updateProfile}
    >
      <div className="space-y-2">
        <label>Full name</label>
        <input
          value={fullName}
          disabled
          className="bg-primary-200 text-primary-800 w-full rounded-sm px-5 py-3 shadow-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
        />
      </div>

      <div className="space-y-2">
        <label>Email address</label>
        <input
          value={email}
          disabled
          className="bg-primary-200 text-primary-800 w-full rounded-sm px-5 py-3 shadow-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
        />
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label htmlFor="nationality">Where are you from?</label>
          <div className="relative">
            <img
              src={countryFlag}
              alt="Country flag"
              className="h-5 rounded-sm object-cover"
            />
          </div>
        </div>
        {children}
      </div>

      <div className="space-y-2">
        <label htmlFor="nationalID">National ID number</label>
        <input
          defaultValue={nationalID}
          name="nationalID"
          className="bg-primary-200 text-primary-800 w-full rounded-sm px-5 py-3 shadow-sm"
        />
      </div>

      <div className="flex items-center justify-end gap-6">
        <Button />
      </div>
    </form>
  );
}

function Button() {
  // Get the form status with useFormStatus hook
  // 2 rules to use this hook :
  // 1. Should use inside child component of a form
  // 2. Since it is hook we should use it in client component
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      className={`bg-accent-500 text-primary-800 hover:bg-accent-600 px-8 py-4 font-semibold transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300`}
    >
      {pending ? "Updating ...." : "Update profile"}
    </button>
  );
}

export default UserUpdateProfileForm;
