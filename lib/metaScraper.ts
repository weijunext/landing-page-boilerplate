import { JSDOM } from 'jsdom';

interface ScraperOptions {
  timeout?: number;
  maxRedirects?: number;
  headers?: Record<string, string>;
}

interface UrlInput {
  url: string;
  title?: string;
  description?: string;
  logo?: string;
  og?: string;
}

interface ScrapedData {
  url: string;
  title: string;
  description: string;
  logo: string;
  og: string;
}

const defaultOptions: Required<ScraperOptions> = {
  timeout: 10000,
  maxRedirects: 5,
  headers: {
    'User-Agent': 'ModernMetaScraper/1.0 (+https://landingpage.weijunext.com/; weijunext@gmail.com)'
  },
};

export function createModernMetaScraper(options: ScraperOptions = {}) {
  const scrapeOptions: Required<ScraperOptions> = { ...defaultOptions, ...options };

  async function scrapeMultiple(inputs: UrlInput[]): Promise<ScrapedData[]> {
    return Promise.all(inputs.map(input => scrapeOrUseProvided(input)));
  }

  async function scrapeOrUseProvided(input: UrlInput): Promise<ScrapedData> {
    const { url, title, description, logo, og } = input;
    const needsScraping = !title || !description || !logo || !og;

    if (!needsScraping) {
      return { url, title, description, logo, og } as ScrapedData;
    }

    const scrapedData = await scrape(url);

    return {
      url,
      title: title || scrapedData.title,
      description: description || scrapedData.description,
      logo: logo || scrapedData.logo,
      og: og || scrapedData.og,
    };
  }

  async function scrape(url: string): Promise<ScrapedData> {
    let normalizedUrl;
    try {
      normalizedUrl = await normalizeUrl(url);
    } catch (error) {
      console.error(`Error normalizing URL ${url}: ${(error as Error).message}`);
      throw error;
    }

    try {
      const response = await fetch(normalizedUrl, {
        method: 'GET',
        headers: scrapeOptions.headers,
        redirect: 'follow',
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const html = await response.text();
      const dom = new JSDOM(html);
      const document = dom.window.document;
      // console.log(console.log(document.documentElement.outerHTML));

      return {
        url: normalizedUrl,
        title: extractTitle(document),
        description: extractDescription(document),
        logo: extractLogo(document, normalizedUrl),
        og: extractOgImage(document, normalizedUrl),
      };
    } catch (error) {
      console.error(`Error scraping ${normalizedUrl}: ${(error as Error).message}`);
      throw error;
    }
  }

  return {
    scrapeMultiple,
    scrape,
  };
}

function normalizeUrl(url: string): string {
  // 匹配有效的URL格式
  const urlPattern = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/i;

  if (!urlPattern.test(url)) {
    throw new Error("Invalid URL format");
  }

  // 如果URL没有协议,添加 'https://'
  if (!url.startsWith('http://') && !url.startsWith('https://')) {
    url = 'http://' + url;
  }

  return url;
}

function extractTitle(document: Document): string {
  return document.querySelector('title')?.textContent ||
    document.querySelector('meta[property="og:title"]')?.getAttribute('content') ||
    document.querySelector('meta[name="twitter:title"]')?.getAttribute('content') ||
    document.querySelector('h1')?.textContent ||
    '';
}

function extractDescription(document: Document): string {
  return document.querySelector('meta[name="description"]')?.getAttribute('content') ||
    document.querySelector('meta[property="og:description"]')?.getAttribute('content') ||
    document.querySelector('meta[name="twitter:description"]')?.getAttribute('content') ||
    document.querySelector('p')?.textContent ||
    '';
}

function extractLogo(document: Document, baseUrl: string): string {
  const logoUrl = document.querySelector('link[rel="icon"]')?.getAttribute('href') ||
    document.querySelector('link[rel="shortcut icon"]')?.getAttribute('href') ||
    document.querySelector('meta[property="og:image"]')?.getAttribute('content') ||
    '/favicon.ico';

  return new URL(logoUrl, baseUrl).href;
}

function extractOgImage(document: Document, baseUrl: string): string {
  const ogImage = document.querySelector('meta[property="og:image"]')?.getAttribute('content') ||
    document.querySelector('meta[name="twitter:image"]')?.getAttribute('content') ||
    '';

  return ogImage ? new URL(ogImage, baseUrl).href : '';
}

export type ModernMetaScraper = ReturnType<typeof createModernMetaScraper>;