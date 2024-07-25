const NEXT_PUBLIC_SHOWCASE_LIST = process.env.NEXT_PUBLIC_SHOWCASE_LIST

const ENV_SHOWCASE_LIST = NEXT_PUBLIC_SHOWCASE_LIST && NEXT_PUBLIC_SHOWCASE_LIST.split(',').map(i => {
  return {
    url: i
  }
}) || []

export const showcases = [
  {
    // title: 'Landing Page Boilerplate',
    // description: 'A free, open-source, and powerful landing page boilerplate, ideal for various projects, enabling you to create a landing page in under an hour.',
    url: 'https://landingpage.weijunext.com',
    // logo: '',
    // og: 'https://landingpage.weijunext.com/og.png'
  },
  {
    url: 'https://PHCopilot.ai/'
  },
  {
    url: 'https://regeai.com/'
  },
].concat(ENV_SHOWCASE_LIST)