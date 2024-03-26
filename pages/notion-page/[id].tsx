import React from "react";
import { GetStaticProps, GetStaticPaths, NextPage } from "next";
import { NotionAPI } from "notion-client";
import { NotionRenderer } from "react-notion-x";
import { Code } from 'react-notion-x/build/third-party/code'
import { Collection } from 'react-notion-x/build/third-party/collection'
import { Equation } from 'react-notion-x/build/third-party/equation'
import { Modal } from 'react-notion-x/build/third-party/modal'
import { Pdf } from 'react-notion-x/build/third-party/pdf'
import "react-notion-x/src/styles.css";

const notion = new NotionAPI();

interface NotionPageProps {
  recordMap: any;
}

const NotionPage: NextPage<NotionPageProps> = ({ recordMap }) => {
  return (
    <div>
      <NotionRenderer
        recordMap={recordMap}
        fullPage={true}
        disableHeader
        components={{ Collection, Modal }}
        mapPageUrl={(pageId) => `/notion-page/${pageId}`}
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

export default NotionPage;
