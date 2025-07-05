import { auth } from "../_lib/auth";

export const metadata = {
  title: "Accounts",
};

async function app() {
  const session = await auth();

  return (
    <h2 className="text-accent-400 mb-7 text-2xl font-semibold">
      Welcome {session.user.name}
    </h2>
  );
}

export default app;
