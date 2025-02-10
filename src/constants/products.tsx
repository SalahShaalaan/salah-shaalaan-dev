import properaThumb from "../../public/images/properaThumb.png";
import propera2 from "../../public/images/propera-seconed.png";
import propera3 from "../../public/images/propera-third.png";
import producThumb from "../../public/images/healthcare-thumb.png";
import healthcare1 from "../../public/images/healthcare-1.png";
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
export const products = [
  {
    href: "https://propera-agency-production-4bb4.up.railway.app",
    title: "Propera Real Estate Agency",
    description:
      "This is a Full Stack Application for Propera Real Estate Agency. Propera Is an agency works in real estate business and provides services to their clients to buy, sell or rent properties",
    thumbnail: properaThumb,
    images: [properaThumb, propera2, propera3],
    stack: [
      "MongoDB",
      "Node.js",
      "Express.js",
      "Next.js",
      "Mongoose",
      "Jest",
      "React Testing Library",
      "Tailwind CSS",
      "Motion",
    ],
    slug: "Agency",
    content: (
      <div>
        <p>
          Propera Agency is a full-stack application enabling property owners to
          list and sell their real estate assets efficiently. The platform
          features a robust property listing system where sellers can showcase
          their properties with detailed information, high-quality images, and
          pricing details. Potential buyers can browse listings, view
          comprehensive property details, and directly contact sellers through
          the integrated messaging system.
        </p>
        <p className="mt-6">
          Built with performance and security in mind, the application delivers
          lightning-fast page loads and seamless navigation across all devices.
          The responsive design ensures an optimal viewing experience on both
          desktop and mobile devices. Advanced features include property
          filtering, secure user authentication, and real-time updates. The
          platform streamlines the entire property buying process while
          maintaining data security and user privacy throughout all
          transactions.
        </p>
      </div>
    ),
  },
  {
    href: "https://healthier-agency.netlify.app/",
    title: "Healthier Agency",
    description: "healthcare business ,that provides a healthcare services",
    thumbnail: healthcare1,
    images: [healthcare1, producThumb, healthcare2],
    stack: ["Nextjs", "TypeScript", "Tailwindcss", "Framer Motion"],
    slug: "healthier",
    content: (
      <div>
        <p>
          Healthier Agency serves as a modern healthcare platform connecting
          patients with medical professionals and services. The website features
          an intuitive interface where users can explore various healthcare
          services, book appointments, and access medical resources. The
          platform streamlines the healthcare journey by providing detailed
          information about available treatments, specialist profiles, and
          facility locations.
        </p>
        <p className="mt-6">
          The website showcases a responsive design powered by Next.js and
          TypeScript, ensuring smooth navigation and optimal performance across
          all devices. Interactive elements built with Framer Motion create
          engaging user experiences, while Tailwind CSS enables a clean,
          professional aesthetic. Users can easily browse service categories,
          read patient testimonials, and contact healthcare providers through
          multiple channels. The platform emphasizes accessibility and
          user-friendly interactions throughout the entire healthcare service
          discovery process.
        </p>
      </div>
    ),
  },
  {
    href: "https://exams-management-dashboard.netlify.app/",
    title: "Exams Management Dashboard",
    description:
      "dashboard for Admin and Super Admin users, designed for managing student information, upcoming exams, and displaying exam results across various subjects",
    thumbnail: dashboardHome,
    images: [dashboardHome, dashboard2, dashboard3],
    stack: ["React", "JavaScript", "Vite", "Tailwind CSS", "Localization"],
    slug: "Dashboard",
    content: (
      <div>
        <p>
          This project is a comprehensive dashboard for Admin and Super Admin
          users, designed for managing student information, upcoming exams, and
          displaying exam results across various subjects. Users can download
          PDF and Excel files for specific students or all students. This
          Dashboard is Role-Based Access Control, which means that Admin And
          Super Admin has different access to the dashboard.
        </p>
        <p className="mt-6">
          Admin Access: Limited dashboard access Cannot view Admins page Cannot
          add new Admins Super Admin Access: Full dashboard access Access to all
          features, including: Admins page Adding new Admins All management
          features
        </p>
      </div>
    ),
  },
  {
    href: "https://portfolio-web-dev-modern.netlify.app/",
    title: "Developer Portfolio",
    description:
      "This portfolio is a collection of personal projects, showcasing skills, experience, and passion for web development and design.",
    thumbnail: portfolioThumb,
    images: [portfolioThumb, portfolio2, portfolio3],
    stack: ["Nextjs", "TypeScript", "Tailwindcss", "Framer Motion"],
    slug: "Portfolio",
    content: (
      <div>
        <p>
          This modern developer portfolio showcases a collection of professional
          projects and technical expertise through an elegant, interactive
          interface. Built with Next.js and TypeScript, the portfolio
          demonstrates advanced web development capabilities while maintaining
          clean code architecture. The responsive design adapts seamlessly
          across all devices, ensuring visitors can explore the showcased work
          effortlessly on any screen size.
        </p>
        <p className="mt-6">
          Leveraging Framer Motion animations and Tailwind CSS styling, the
          portfolio creates engaging user experiences through smooth transitions
          and polished visual elements. Each project section features detailed
          descriptions, live demos, and technical specifications, highlighting
          problem-solving approaches and implementation strategies. The
          portfolio serves as a comprehensive demonstration of full-stack
          development skills, creative design thinking, and attention to
          performance optimization.
        </p>
      </div>
    ),
  },
  {
    href: "https://dashboard-app-beta-ten.vercel.app",
    title: "Admin Dashboard",
    description:
      "This is A Static Admin Dashboard that manages business operations and show data in a clear and concise manner.",
    thumbnail: dashStackThumb,
    images: [dashStackThumb, dashStack2, dashStack3],
    stack: ["Nextjs", "TypeScript", "Tailwindcss", "Framer Motion", "Chart.js"],
    slug: "Admin",
    content: (
      <div>
        <p>
          This dynamic admin dashboard delivers comprehensive business analytics
          and data visualization through an intuitive interface. Built with
          modern technologies, it provides real-time insights into key
          performance metrics, user activities, and business operations. The
          dashboard features interactive charts, customizable widgets, and
          detailed reporting tools that enable informed decision-making and
          efficient business management.
        </p>
        <p className="mt-6">
          The application leverages Chart.js for data visualization, presenting
          complex information through clear and engaging graphics. Users can
          easily monitor trends, analyze patterns, and generate detailed reports
          with just a few clicks. The responsive layout, powered by Tailwind CSS
          and Framer Motion, ensures smooth navigation and optimal viewing
          across all devices. Advanced features include data filtering, export
          capabilities, and customizable dashboard layouts for enhanced user
          experience.
        </p>
      </div>
    ),
  },
];
