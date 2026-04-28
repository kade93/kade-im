import React from "react";
import { GetStaticProps, GetStaticPaths, NextPage } from "next";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { getPageMarkdown, getPageInfo } from "../../lib/notion";

interface NotionPageProps {
  mdString: string;
  pageTitle: string;
}

const NotionPage: NextPage<NotionPageProps> = ({ mdString, pageTitle }) => {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
      {pageTitle && (
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 mb-8">
          {pageTitle}
        </h1>
      )}
      <div className="prose prose-blue dark:prose-invert max-w-none">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
          components={{
            img: ({ node, ...props }) => (
              <img className="max-w-full rounded-lg shadow-sm my-4" {...props} />
            ),
            a: ({ node, ...props }) => (
              <a className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer" {...props} />
            ),
          }}
        >
          {mdString}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const pageId = context.params?.id as string;
  try {
    const mdString = await getPageMarkdown(pageId);
    const pageInfo = await getPageInfo(pageId) as any;
    
    // Attempt to extract the title if it's a standard Notion page
    let pageTitle = "";
    if (pageInfo.properties && pageInfo.properties.title && pageInfo.properties.title.title[0]) {
      pageTitle = pageInfo.properties.title.title[0].plain_text;
    } else if (pageInfo.properties && pageInfo.properties.Name && pageInfo.properties.Name.title[0]) {
      pageTitle = pageInfo.properties.Name.title[0].plain_text;
    }

    return {
      props: {
        mdString,
        pageTitle,
      },
      revalidate: 60, // Optional: useful if standalone mode is used instead of export
    };
  } catch (error) {
    console.error("Error fetching Notion page:", error);
    return { notFound: true };
  }
};

export const getStaticPaths: GetStaticPaths = async () => {
  const defaultPageId = process.env.NOTION_PAGE_ID || "Kade-s-Tech-Blog-fda966d9131542b1a4ecd1f8531664cd";
  return {
    paths: [
      { params: { id: defaultPageId } }
    ],
    fallback: "blocking",
  };
};

export default NotionPage;
