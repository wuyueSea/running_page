import logoPic from '@/static/logo_pic.jpg';

interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const data: ISiteMetadataResult = {
  siteTitle: 'Sea Running Page',
  siteUrl: 'https://github.com/wuyueSea/running_page/',
  logo: logoPic,
  description: 'Personal site and blog',
  navLinks: [
    {
      name: '高驰',
      url: 'https://www.coros.com/',
    },
    {
      name: '统计',
      url: 'summary',
    },
    {
      name: 'Github',
      url: 'https://github.com/wuyueSea/running_page',
    },
  ],
};

export default data;
