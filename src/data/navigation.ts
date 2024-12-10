import socials from "./socials"

type NavLink = {
  title: string
  target: string
  external?: boolean
}





const header: NavLink[] = [
  {
    title: "Start",
    target: "/",
  },
  {
    title: "Leistungen",
    target: "/leistungen",
  },
  {
    title: "Unternehmen",
    target: "/unternehmen",
  },
  {
    title: "404",
    target: "/404"
  }
]





const footer: NavLink[] = [
  {
    title: "Start",
    target: "/",
  },
  {
    title: "Impressum",
    target: "/impressum",
  },
  {
    title: "Datenschutz",
    target: "/datenschutz",
  },
]





const social: NavLink[] = [
  {
    title: socials.linkedin.title,
    target: socials.linkedin.url,
    external: true,
  },
  {
    title: socials.bluesky.title,
    target: socials.bluesky.url,
    external: true,
  },
  {
    title: socials.github.title,
    target: socials.github.url,
    external: true,
  },
]





export { header, footer, social }
export type { NavLink }
