import React from "react";
import { GetStaticProps, GetStaticPaths, NextPage } from "next";
import { NotionAPI } from "notion-client";
import { NotionRenderer } from "react-notion-x";
import { Code } from 'react-notion-x/build/third-party/code'
import { Collection } from 'react-notion-x/build/third-party/collection'
import { Modal } from 'react-notion-x/build/third-party/modal'
import "react-notion-x/src/styles.css";
import Link from "next/link";
import TopNav from "@/app/topnav";
import '@/app/globals.css'       // Tailwind first
// used for code syntax highlighting (optional)
import 'prismjs/themes/prism-tomorrow.css'

const notion = new NotionAPI();

interface NotionPageProps {
  recordMap: any;
}

const ProjectNotionPage: NextPage<NotionPageProps> = ({ recordMap }) => {
  return (
    <div className="relative">
      {/* Navigation Links */}
      <header className="sticky inset-x-0 top-0 z-10 backdrop-blur-smooth flex items-center justify-between h-14 px-2 sm:px-4 text-xs sm:text-sm bg-white border-b border-gray-100 dark:bg-gray-950 dark:border-gray-850">
          <Link className="flex items-center gap-1 sm:gap-2 text-xs sm:font-semibold" href="/">
            kade.im
          </Link>
          <TopNav>
          </TopNav>
      </header>

      <NotionRenderer
        recordMap={recordMap}
        fullPage={true}
        darkMode={false}
        disableHeader
        components={{ Collection, Modal, Code }}
        mapPageUrl={(pageId) => `/projects/${pageId}`}
        isImageZoomable
      />
      </div>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const pageId = context.params?.id as string;
  const recordMap = await notion.getPage(pageId);
  
  return {
    props: {
      recordMap,
    },
    revalidate: 30, // 10초마다 페이지를 재생성합니다.
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  // 여기서는 예시로 빈 배열을 사용하고 있지만,
  // 실제 프로젝트에서는 Notion API를 사용하여 모든 페이지의 ID를 가져와야 합니다.
  return {
    paths: [],
    fallback: true,
  };
};

export default ProjectNotionPage;
