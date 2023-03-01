
import { marked } from "marked";

// Recursively fetches README from tier list of sources
async function getREADME(e: any, s = 0): Promise<string> {
  let sources = [`/gantry/data/${e.id}/README.md`];
  const gh_sources = [
    `https://raw.githubusercontent.com/${e.plugins?.github}/main/README.md`,
    `https://raw.githubusercontent.com/${e.plugins?.github}/main/.github/README.md`,
    `https://raw.githubusercontent.com/${e.plugins?.github}/master/README.md`,
  ];
  sources = e.plugins?.github ? sources.concat(gh_sources) : sources;

  if (s >= sources.length) {
    return "# No README.md found\n---\n\nWe couldn't find a file for this project.";
  }

  const md_res = await fetch(sources[s]);
  if (!md_res.ok) return await getREADME(e, s + 1);
  return marked.parse(await md_res.text());
}

// Generates an RSS channel from an array of projects
export async function generateRSS(array: any[]) {
  let xml = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/">

<channel>
  <title>Ivy Direct</title>
  <image>
    <url>https://work.ivy.direct/feed.png</url>
    <title>Ivy Direct</title>
    <link>https://ivy.direct</link>
  </image>
  <link>https://ivy.direct</link>
  <description>The latest updates, work, and more from Ivy's engineering portfolio.</description>`;

  for (const item of array)
    xml += await generateRSSItem(item);

  xml += `</channel></rss>`;
  return xml.replaceAll(" & ", " &amp; ");
}

// Generates an RSS item from a project
// Will fetch README.md from local files or GitHub if available
async function generateRSSItem(item: any) {
  return `
<item>
  <title>${item.name}</title>
  <guid>${item.id}</guid>
  <link>https://work.ivy.direct/project/${item.id}</link>
  <source url="https://work.ivy.direct/project/${item.id}">Ivy Direct - ${item.name}</source>
  <description>${item.descriptionLong || item.description}</description>
  <content:encoded><![CDATA[${await getREADME(item)}]]></content:encoded>
  <pubDate>${item.upDate}</pubDate>
</item>`;
}