import React from 'react';

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/F2ZzH6GzbeM
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"

const notionPageId = process.env.NOTION_PAGE_ID;

export default function Component() {
  return (
    <>
      <div className="relative overflow-hidden">
        <header className="sticky inset-x-0 top-0 z-10 backdrop-blur-smooth flex items-center justify-between h-14 px-4 text-sm bg-white border-b border-gray-100 dark:bg-gray-950 dark:border-gray-850">
          <Link className="flex items-center gap-2 font-semibold" href="#">
            kade.im
          </Link>
          <nav className="flex items-center gap-4">
            <Link
              className="flex items-center gap-1.5 font-medium text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="#"
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
              href="/notion-page/}"
            >
              Profile
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
          </nav>
        </header>
        <main className="min-h-screen py-6 flex flex-col items-center justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* 카드 예시 */}
            <Link href={`/notion-page/${notionPageId}`} passHref>
              <div className="cursor-pointer overflow-hidden rounded-lg shadow-md bg-white hover:shadow-lg transition-shadow">
                <img
                  src="images/wip.png" // 썸네일 이미지 경로
                  alt="wip image"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                    <h5 className="text-lg font-semibold">Blog</h5>
                    <p className="text-sm text-gray-600">Kade&apos;s Tech Notion Blog</p>
                </div>
              </div>
            </Link>
            <Link href="#" passHref>
              <div className="cursor-pointer overflow-hidden rounded-lg shadow-md bg-white hover:shadow-lg transition-shadow">
              <img
                  src="images/wip.png" // 썸네일 이미지 경로
                  alt="wip image"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h5 className="text-lg font-semibold">Profile</h5>
                  <p className="text-sm text-gray-600">Go to Korean Profile - Surfit </p>
                </div>
              </div>
            </Link>
            <Link href="#" passHref>
              <div className="cursor-pointer overflow-hidden rounded-lg shadow-md bg-white hover:shadow-lg transition-shadow">
              <img
                  src="images/wip.png" // 썸네일 이미지 경로
                  alt="wip image"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h5 className="text-lg font-semibold">Projects</h5>
                  <p className="text-sm text-gray-600">Look some Side Projects (WIP)</p>
                </div>
              </div>
            </Link>
            <Link href="#" passHref>
              <div className="cursor-pointer overflow-hidden rounded-lg shadow-md bg-white hover:shadow-lg transition-shadow">
              <img
                  src="images/wip.png" // 썸네일 이미지 경로
                  alt="wip image"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h5 className="text-lg font-semibold">Chats</h5>
                  <p className="text-sm text-gray-600">Ask Anything to Me</p>
                </div>
              </div>
            </Link>
            {/* 다른 카드들... */}
          </div>
        </main>
      </div>
    </>
  )
}
