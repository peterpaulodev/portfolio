import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
  return rss({
    title: 'Peterson Almeida | Portfólio',
    description: 'Um template moderno e minimalista criado para desenvolvedores e criativos digitais.',
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>pt</language>`,
  });
}