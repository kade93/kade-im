import React from "react";
import { GetStaticProps, GetStaticPaths, NextPage } from "next";
import { NotionAPI } from "notion-client";
import { NotionRenderer } from "react-notion-x";
import { Code } from 'react-notion-x/build/third-party/code'
import { Collection } from 'react-notion-x/build/third-party/collection'
import { Modal } from 'react-notion-x/build/third-party/modal'
import Link from "next/link";
import TopNav from "@/app/topnav";
import '@/app/globals.css'       // Tailwind first
import "react-notion-x/src/styles.css";
import 'prismjs/themes/prism-tomorrow.css'

const notion = new NotionAPI();

interface NotionPageProps {
  recordMap: any;
}

const BlogNotionPage: NextPage<NotionPageProps> = ({ recordMap }) => {

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

      {/* Skeleton or Notion Content */}
      <NotionRenderer
        recordMap={recordMap}
        fullPage={true}
        darkMode={false}
        disableHeader
        components={{ Collection, Modal, Code }}
        mapPageUrl={(pageId) => `/blog/${pageId}`}
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
    revalidate: 30, 
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export default BlogNotionPage;
