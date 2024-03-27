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
      <div className="relative overflow-hidden">
        <header className="sticky inset-x-0 top-0 z-10 backdrop-blur-smooth flex items-center justify-between h-14 px-4 text-sm bg-white border-b border-gray-100 dark:bg-gray-950 dark:border-gray-850">
          <Link className="flex items-center gap-2 font-semibold" href="/">
            kade.im
          </Link>
          <TopNav>
          </TopNav>
        </header>        
        <main className="min-h-screen py-6 flex flex-col items-center justify-center">
        <div className="welcome-section text-center py-6">
          <h2 className="text-2xl font-bold">Hi, Welcome! 안녕하세요 !</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link href={`/notion-page/${notionPageId}`} passHref>
              <div className="cursor-pointer overflow-hidden rounded-lg shadow-md bg-white hover:shadow-lg transition-shadow">
                <img
                  src="images/notion-x.png" // 썸네일 이미지 경로
                  alt="react-notion-x image"
                  className="w-60 h-60 object-cover"
                />
                <div className="p-4">
                    <h5 className="text-lg font-semibold text-center">Blog</h5>
                    <p className="text-sm text-gray-600 text-center">Notion Blog</p>
                </div>
              </div>
            </Link>
            <Link href="#" passHref>
              <div className="cursor-pointer overflow-hidden rounded-lg shadow-md bg-white hover:shadow-lg transition-shadow">
              <img
                  src="images/projects_p.png" // 썸네일 이미지 경로
                  alt="wip image"
                  className="w-60 h-60 object-cover"
                />
                <div className="p-4">
                  <h5 className="text-lg font-semibold text-center">Projects</h5>
                  <p className="text-sm text-gray-600 text-center">Side Projects</p>
                </div>
              </div>
            </Link>
            <Link href="#" passHref>
              <div className="cursor-pointer overflow-hidden rounded-lg shadow-md bg-white hover:shadow-lg transition-shadow">
              <img
                  src="images/prompt_chats.png" // 썸네일 이미지 경로
                  alt="prompt chatting image"
                  className="w-60 h-60 object-cover"
                />
                <div className="p-4">
                  <h5 className="text-lg font-semibold text-center">Chats</h5>
                  <p className="text-sm text-gray-600 text-center">Prompt Chat</p>
                </div>
              </div>
            </Link>
            <Link href="#" passHref>
              <div className="cursor-pointer overflow-hidden rounded-lg shadow-md bg-white hover:shadow-lg transition-shadow">
              <img
                  src="images/quests.png" // 썸네일 이미지 경로
                  alt="quest image"
                  className="w-60 h-60 object-cover"
                />
                <div className="p-4">
                  <h5 className="text-lg font-semibold text-center">Quests</h5>
                  <p className="text-sm text-gray-600 text-center">Ask and Request</p>
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
