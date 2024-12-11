// topnav.tsx

import Link from "next/link"
import QuestModal from "@/components/quests/QuestModal";
const BlogNotionPageId = "Kade-s-Tech-Blog-fda966d9131542b1a4ecd1f8531664cd";
const ProjectNotionPageId = "Kade-s-Projects-15471659327480208914f8d2f85b89a1"

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
    href={`/blog/${BlogNotionPageId}`}
  >
    Blog
  </Link>
  <Link
    className="flex items-center gap-1.5 font-medium text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
    href={`/projects/${ProjectNotionPageId}`}
  >
    Projects
  </Link>
  <Link
    className="flex items-center gap-1.5 font-medium text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
    href="/chat"
  >
    Chat
  </Link>
  </nav>
);
}

export default TopNav;