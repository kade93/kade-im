import React from 'react';
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/F2ZzH6GzbeM
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import Footer from './footer';
import { Button } from "@/components/ui/button"
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import TopNav from './topnav';
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

const notionPageId = "Kade-s-Tech-Blog-fda966d9131542b1a4ecd1f8531664cd";

export default function Component() {
  return (
    <>
      <div className="relative overflow-hidden min-h-screen">
        <header className="sticky inset-x-0 top-0 z-10 backdrop-blur-smooth flex items-center justify-between h-14 px-2 sm:px-4 text-xs sm:text-sm bg-white border-b border-gray-100 dark:bg-gray-950 dark:border-gray-850">
          <Link className="flex items-center gap-1 sm:gap-2 text-xs sm:font-semibold" href="/">
            kade.im
          </Link>
          <TopNav>
          </TopNav>
        </header>
        <main className="py-20 flex flex-col items-center justify-center">
          <div className="welcome-section text-center py-4">
            <h2 className="text-2xl font-bold">Hi, Welcome! 안녕하세요 !</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <Link href={`/blog/${notionPageId}`} passHref>
              <div className="cursor-pointer overflow-hidden rounded-lg shadow-md bg-white hover:shadow-lg transition-shadow p-4 sm:p-6r" > {/* Smaller padding on mobile */}
                <div className="flex flex-col items-center"> {/* Additional div for centering */}
                  <img
                    src="images/blog.png"
                    alt="blog"
                    className="w-32 h-32 sm:w-40 sm:h-40 object-cover thumbnail" // Image size
                  />
                  <div className="p-2">
                    <h5 className="text-lg sm:text-lg font-semibold text-center text-gray-900 dark:text-gray-900">Blog</h5>
                  </div>
                </div>
              </div>
            </Link>
            <Link href="#" passHref>
              <div className="cursor-pointer overflow-hidden rounded-lg shadow-md bg-white hover:shadow-lg transition-shadow p-4 sm:p-6r" > {/* Smaller padding on mobile */}
                <div className="flex flex-col items-center"> {/* Additional div for centering */}
                  <img
                    src="images/project.png" // 썸네일 이미지 경로
                    alt="project"
                    className="w-32 h-32 sm:w-40 sm:h-40 object-cover thumbnail" // Image size
                  />
                  <div className="p-2">
                    <h5 className="text-lg sm:text-lg font-semibold text-center text-gray-900 dark:text-gray-900">Projects</h5>
                  </div>
                </div>
              </div>
            </Link>
            <Link href="#" passHref>
              <div className="cursor-pointer overflow-hidden rounded-lg shadow-md bg-white hover:shadow-lg transition-shadow p-4 sm:p-6r" > {/* Smaller padding on mobile */}
                <div className="flex flex-col items-center"> {/* Additional div for centering */}
                  <img
                    src="images/chat.png" // 썸네일 이미지 경로
                    alt="prompt chatting"
                    className="w-32 h-32 sm:w-40 sm:h-40 object-cover thumbnail" // Image size
                  />
                  <div className="p-2">
                    <h5 className="text-lg sm:text-lg font-semibold text-center text-gray-900 dark:text-gray-900">Chats</h5>
                  </div>
                </div>
              </div>
            </Link>
            <Link href="#" passHref>
              <div className="cursor-pointer overflow-hidden rounded-lg shadow-md bg-white hover:shadow-lg transition-shadow p-4 sm:p-6r" > {/* Smaller padding on mobile */}
                <div className="flex flex-col items-center"> {/* Additional div for centering */}
                  <img
                    src="images/quest.png" // 썸네일 이미지 경로
                    alt="quests"
                    className="w-32 h-32 sm:w-40 sm:h-40 object-cover thumbnail" // Image size
                  />
                  <div className="p-2">
                    <h5 className="text-lg sm:text-lg font-semibold text-center text-gray-900 dark:text-gray-900">Quests</h5>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </main>
      </div>
      <Footer>
      </Footer>
    </>
  )
}
