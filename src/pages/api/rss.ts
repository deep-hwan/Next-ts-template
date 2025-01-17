import { siteDescription, siteTitle, siteUrl } from '@/libs/utils/site';
import { format } from 'date-fns';
import fs from 'fs';
import { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';

// Define a type for the dynamic URL items
interface DynamicUrlItem {
  title: string;
  description: string;
  url: string;
  image: string;
  datePublished: Date;
}

// Function to fetch dynamic URLs from multiple JSON files
async function fetchDynamicUrls(basePath: string): Promise<DynamicUrlItem[]> {
  const jsonFiles = [{ path: '', key: 'appName' }]; // << add json file and data

  let dynamicUrls: DynamicUrlItem[] = [];

  for (const { path: jsonPath, key } of jsonFiles) {
    try {
      const data: any[] = JSON.parse(fs.readFileSync(path.join(__dirname, jsonPath), 'utf-8'));
      const urls = data.map((item: any) => ({
        title: item.title || item[key] || 'No Title',
        description: item.description || 'No Description',
        url: `${siteUrl}${basePath}/${item[key]}`,
        image: `${siteUrl}/assets/favicons/favicon-512x512.png`,
        datePublished: new Date(),
      }));
      dynamicUrls = dynamicUrls.concat(urls);
    } catch (error) {
      console.error(`Error reading or parsing file ${jsonPath}:`, error);
    }
  }

  return dynamicUrls;
}

const generateRssFeed = async () => {
  const basePath = ''; // Since the service is only for Korean users, no need for locale handling

  // Fetch dynamic URLs from all JSON files
  const dynamicUrls = await fetchDynamicUrls(basePath);

  const rssItems = [
    ...dynamicUrls,
    // Add more items dynamically if needed
  ];

  const rssItemsXml = rssItems
    .map(item => {
      const date = format(new Date(item.datePublished), 'EEE, dd MMM yyyy HH:mm:ss O');
      return `
        <item>
          <title>${item.title}</title>
          <description><![CDATA[${item.description}]]></description>
          <link>${item.url}</link>
          <guid>${item.url}</guid>
          <pubDate>${date}</pubDate>
          <enclosure url="${item.image}" type="image/png" />
        </item>
      `;
    })
    .join('');

  const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
  <channel>
    <title>${siteTitle}</title>
    <link>${siteUrl}${basePath}</link>
    <description>${siteDescription}</description>
    <language>ko</language>
    <lastBuildDate>${format(new Date(), 'EEE, dd MMM yyyy HH:mm:ss O')}</lastBuildDate>
    ${rssItemsXml}
  </channel>
</rss>`;

  return rssFeed;
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const rssFeed = await generateRssFeed();

    res.setHeader('Content-Type', 'application/xml');
    res.write(rssFeed);
    res.end();
  } catch (error) {
    console.error('Error generating RSS feed:', error);
    res.status(500).send('Error generating RSS feed.');
  }
};
