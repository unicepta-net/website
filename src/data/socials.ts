type SocialLink = {
  title: string;
  url: string;
  handle?: string;
}
type LinkList = {
  [key: string]: SocialLink;
}





const socials: LinkList = {
  linkedin: {
    title: 'LinkedIn',
    url: 'https://www.linkedin.com/company/unicepta-krisenkommunikation-und-akzeptanzmanagement/',
  },
  bluesky: {
    title: 'Bluesky',
    url: 'https://bsky.app/profile/unicepta.net',
    handle: '@unicepta.net',
  },
  github: {
    title: 'GitHub',
    url: 'https://github.com/unicepta-net',
  },
}





export default socials
export type { SocialLink }
