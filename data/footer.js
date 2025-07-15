import { Behance, Facebook, Github, LinkedIn } from './svgImages'
export const FooterData = {
  logo: '/images/rbmims-logo.png',
  logoDark: '/images/rbmims-logo.png',
  footerText:
    'Get Started with RBMIMS Today. Join our mailing list or schedule a demo to explore platform capabilities.',
  copyright: `${new Date().getFullYear()} RBMIMS. All Rights Reserved`,
  email: 'info@rbmims.com',
  phone: '+919824353327',
  expolre: [
    {
      id: 1,
      name: 'About',
      link: '/about',
    },
    {
      id: 2,
      name: 'Services',
      link: '/services',
    },
    {
      id: 3,
      name: 'Career',
      link: '/career',
    },
    {
      id: 7,
      name: 'Contact Us',
      link: '/contact',
    },
  ],
  resources: [
    {
      id: 2,
      name: 'Team',
      link: '/team',
    },
    {
      id: 4,
      name: 'Blog',
      link: '/blog',
    },
  ],

  socialLinks: [
    {
      id: 1,
      name: <Facebook />,
      link: '#',
    },
    {
      id: 2,
      name: <Github />,
      link: '#',
    },
    {
      id: 3,
      name: <LinkedIn />,
      link: '#',
    },
    {
      id: 4,
      name: <Behance />,
      link: '#',
    },
  ],
}
