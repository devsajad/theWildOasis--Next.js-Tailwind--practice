import Link from "next/link";
import { auth } from "../_lib/auth";
import Image from "next/image";

export default async function Navigation() {
  const session = await auth();

  const userName = session?.user?.name;
  const userImage = session?.user?.image;

  return (
    <nav className="z-10 text-xl">
      <ul className="flex items-center gap-16">
        <li>
          <Link
            href="/cabins"
            className="hover:text-accent-400 transition-colors"
          >
            Cabins
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="hover:text-accent-400 transition-colors"
          >
            About
          </Link>
        </li>

        {userImage ? (
          <li className="flex flex-row-reverse items-center gap-4">
            <Link
              href="/account"
              className="hover:text-accent-400 transition-colors"
            >
              Guest area
            </Link>
            <Image
              className="rounded-full"
              src={userImage}
              alt={`${userName} profile picture`}
              width={30}
              height={30}
            />
          </li>
        ) : (
          <li>
            <Link
              href="/account"
              className="hover:text-accent-400 transition-colors"
            >
              Guest area
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
