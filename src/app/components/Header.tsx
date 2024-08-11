import { getUser } from "@workos-inc/authkit-nextjs";
import Link from "next/link";

const Header = async () => {
    const { user } = await getUser();

    return (
        <header>
          <div className="container flex items-center justify-between py-4 px-6 mx-auto my-4">
            <Link href={'/'} className="font-bold text-xl">
                Job Board
            </Link>
            <nav className="flex gap-4 *:py-2 *:px-4 *:rounded-md">
              <Link href={'/login'} className="bg-gray-200">Login</Link>
              <Link href={'/new-listing'} className="bg-blue-600 text-white">Post a job</Link>
            </nav>
          </div>
        </header> 
     );
}
 
export default Header;