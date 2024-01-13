interface Link {
   name: string;
   submenu?: boolean;
   sublinks?: Sublink[];
   link?: string;
   hasFeatured?: boolean;
}

interface Sublink {
   Head?: string;
   headlink?: string;
   desc?: string;
   links: Link[];
}

export const links: Link[] = [
   {
      name: "How We Help",
      submenu: true,
      sublinks: [
         {
            Head: "Website Redesign",
            headlink: '#',
            desc: "Elevate your brand with website redesign services that take your website from “good enough” to your industry’s gold standard.",
            links: [
               { name: "Web Design", link: "#" },
               { name: "Web Development", link: "#" },
               { name: "Wordpress", link: "#" },
               { name: "Shopify", link: "#" },
            ],
         },
         {
            Head: "Website Support",
            desc: "Enhance and protect your existing site with dedicated website support that plans, executes, and measures improvements.",
            links: [
               { name: "CRO", link: "#" },
               { name: "Landing Pages", link: "#" },
               { name: "Website Analytics", link: "#" },
            ],
         },
      ],
   },
   { name: "Work" },
   { name: "About" },
   {
      name: "Resources",
      submenu: true,
      hasFeatured: true,
      sublinks: [
         {
            links: [
               { name: "Blog", link: "#" },
               { name: "Resources", link: "#" },
               { name: "Project Calculator", link: "#" },
               { name: "ROI Calculator", link: "#" },
            ],
         },
      ],
   },
   { name: "Contact Us" },
];