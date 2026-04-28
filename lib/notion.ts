import { Client } from '@notionhq/client';
import { NotionToMarkdown } from 'notion-to-md';

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

const n2m = new NotionToMarkdown({ notionClient: notion });

export async function getPageMarkdown(pageId: string) {
  const mdblocks = await n2m.pageToMarkdown(pageId);
  const content = mdString.parent || '';
  return content.replace(/Untitled/gi, '').replace(/Loading Project\.\.\./gi, '');
}

export async function getPageInfo(pageId: string) {
  const response = await notion.pages.retrieve({ page_id: pageId });
  return response;
}
