// topnav.tsx

import Link from "next/link"
const notionPageId = "Kade-s-Tech-Blog-fda966d9131542b1a4ecd1f8531664cd";


const TopNav = () => {
return (
  <nav className="flex items-center gap-4">
  <Link
    className="flex items-center gap-1.5 font-medium text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
    href="/"
  >
    Main
  </Link>
  <Link
    className="flex items-center gap-1.5 font-medium text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
    href={`/notion-page/${notionPageId}`}
  >
    Blog
  </Link>
  <Link
    className="flex items-center gap-1.5 font-medium text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
    href="#"
  >
    Projects
  </Link>
  <Link
    className="flex items-center gap-1.5 font-medium text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
    href="#"
  >
    Chats
  </Link>
  <Link
    className="flex items-center gap-1.5 font-medium text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
    href="#"
  >
    Quests
  </Link>
  </nav>
);
}

export default TopNav;