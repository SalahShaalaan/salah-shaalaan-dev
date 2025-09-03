import lamhaDashboard from "../../public/images/lamha-dashboard.png";
import lamhaDashboard2 from "../../public/images/lamha-dashboard-2.png";
import lamhaDashboard3 from "../../public/images/lamha-dashboard-3.png";
import ellySpa from "../../public/images/elly-spa.png";
import ellySpa2 from "../../public/images/elly-spa-2.png";
import ellySpa3 from "../../public/images/elly-spa-3.png";
import healthcare1 from "../../public/images/healthcare-1.png";
import producThumb from "../../public/images/healthcare-thumb.png";
import healthcare2 from "../../public/images/healthcare-2.png";
import dashboardHome from "../../public/images/dasboard-home.png";
import dashboard2 from "../../public/images/dashboard-2.png";
import dashboard3 from "../../public/images/dashboard-3.png";
import portfolioThumb from "../../public/images/portfolioThumb.png";
import portfolio2 from "../../public/images/portfolio-2.png";
import portfolio3 from "../../public/images/portfolio-3.png";
import dashStackThumb from "../../public/images/dash-stack-thumb.png";
import dashStack2 from "../../public/images/dash-stack-2.png";
import dashStack3 from "../../public/images/dash-stack-3.png";
import wecare from "../../public/images/we-care.png";
import wecare2 from "../../public/images/we-care-2.png";
import wecare3 from "../../public/images/we-care-3.png";

export const figmaProjects = [
  {
    href: "https://lamha-affiliate-system.vercel.app",
    title: "Lamha Affiliate System",
    description:
      "Turned a Figma design into a real working app. Clean, modern interface with smooth user experience.",
    thumbnail: lamhaDashboard,
    images: [lamhaDashboard, lamhaDashboard2, lamhaDashboard3],
    stack: ["React", "TypeScript", "Tailwind CSS", "Shadcn UI", "Figma"],
    slug: "lamha-affiliate",
    content: (
      <div>
        <p>
          Took a Figma design and turned it Pixel Perfect into a working app.
          Pretty cool how a static design becomes something you can actually
          click and use.
        </p>
        <p className="mt-6">
          Built with React and TypeScript - clean code, smooth animations, and
          it works great on mobile too.
        </p>
      </div>
    ),
  },
  {
    href: "https://elly-spa.vercel.app/",
    title: "ELLY SPA Dashboard",
    description:
      "Turned a Figma design into a real working app. Clean, modern interface with smooth user experience.",
    thumbnail: ellySpa,
    images: [ellySpa, ellySpa2, ellySpa3],
    stack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Figma"],
    slug: "elly-spa",
    content: (
      <div>
        <p>
          Took a Figma design and turned it Pixel Perfect into a working app.
          Pretty cool how a static design becomes something you can actually
          click and use.
        </p>
        <p className="mt-6">
          Built with React and TypeScript - clean code, and it works great on
          mobile too.
        </p>
      </div>
    ),
  },
  {
    href: "https://we-care-dashboard.vercel.app/",
    title: "We Care Dashboard",
    description:
      "Turned a Figma design into a real working app. Clean, modern interface with smooth user experience.",
    thumbnail: wecare,
    images: [wecare, wecare2, wecare3],
    stack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Figma"],
    slug: "elly-spa",
    content: (
      <div>
        <p>
          Took a Figma design and turned it Pixel Perfect into a working app.
          Pretty cool how a static design becomes something you can actually
          click and use.
        </p>
        <p className="mt-6">
          Built with React and TypeScript - clean code, and it works great on
          mobile too.
        </p>
      </div>
    ),
  },
  {
    href: "https://healthier-agency.netlify.app/",
    title: "Healthier Agency",
    description:
      "Turned a Figma design into a real working app. Clean, modern interface with smooth animations.",
    thumbnail: healthcare1,
    images: [healthcare1, producThumb, healthcare2],
    stack: ["Nextjs", "TypeScript", "Tailwindcss", "Framer Motion"],
    slug: "healthier",
    content: (
      <div>
        <p>
          Took a Figma design and turned it into a working app. Pretty cool how
          a static design becomes something you can actually click and use.
        </p>
        <p className="mt-6">
          Built with React and TypeScript - clean code, smooth animations, and
          it works great on mobile too.
        </p>
      </div>
    ),
  },
  {
    href: "https://exams-management-dashboard.netlify.app/",
    title: "Exams Management Dashboard",
    description:
      "Turned a Figma design into a real working app. Clean, modern interface with smooth animations.",
    thumbnail: dashboardHome,
    images: [dashboardHome, dashboard2, dashboard3],
    stack: ["React", "JavaScript", "Vite", "Tailwind CSS"],
    slug: "exams-dashboard",
    content: (
      <div>
        <p>
          Took a Figma design and turned it into a working app. Pretty cool how
          a static design becomes something you can actually click and use.
        </p>
        <p className="mt-6">
          Built with React and TypeScript - clean code, smooth animations, and
          it works great on mobile too.
        </p>
      </div>
    ),
  },
  {
    href: "https://portfolio-web-dev-modern.netlify.app/",
    title: "Developer Portfolio",
    description:
      "Turned a Figma design into a real working app. Clean, modern interface with smooth animations.",
    thumbnail: portfolioThumb,
    images: [portfolioThumb, portfolio2, portfolio3],
    stack: ["Nextjs", "TypeScript", "Tailwindcss", "Framer Motion"],
    slug: "developer-portfolio",
    content: (
      <div>
        <p>
          Took a Figma design and turned it into a working app. Pretty cool how
          a static design becomes something you can actually click and use.
        </p>
        <p className="mt-6">
          Built with React and TypeScript - clean code, smooth animations, and
          it works great on mobile too.
        </p>
      </div>
    ),
  },
  {
    href: "https://dashboard-app-beta-ten.vercel.app",
    title: "Admin Dashboard",
    description:
      "Turned a Figma design into a real working app. Clean, modern interface with smooth animations.",
    thumbnail: dashStackThumb,
    images: [dashStackThumb, dashStack2, dashStack3],
    stack: ["Nextjs", "TypeScript", "Tailwindcss", "Framer Motion", "Chart.js"],
    slug: "admin-dashboard",
    content: (
      <div>
        <p>
          Took a Figma design and turned it into a working app. Pretty cool how
          a static design becomes something you can actually click and use.
        </p>
        <p className="mt-6">
          Built with React and TypeScript - clean code, smooth animations, and
          it works great on mobile too.
        </p>
      </div>
    ),
  },
];
