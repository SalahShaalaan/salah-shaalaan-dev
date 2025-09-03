import properaThumb from "../../public/images/properaThumb.png";
import propera2 from "../../public/images/propera-seconed.png";
import propera3 from "../../public/images/propera-third.png";
import blackCoffee from "../../public/images/black-coffee.png";
import blackCofffeeAr from "../../public/images/black-coffee-ar.png";
import blackCofffeeAr2 from "../../public/images/black-coffee-ar-2.png";
import blackCofffeeAr3 from "../../public/images/black-coffee-ar-3.png";
export const products = [
  {
    href: "https://coffee-market-v1.vercel.app",
    title: "Ecommerce Coffee Market Application",
    description:
      "MERN Stack Application for Coffee Market App. This Multi Langual application allows, users to browse and purchase coffee products online. With Dashboard to control products, orders and users.",
    thumbnail: blackCoffee,
    images: [blackCoffee, blackCofffeeAr, blackCofffeeAr2, blackCofffeeAr3],
    stack: [
      "Next.js",
      "Socket.io",
      "MongoDB",
      "Node.js",
      "Express.js",
      "Mongoose",
      "Jest",
      "Tailwind CSS",
      "i18next",
    ],
    slug: "Agency",
    content: (
      <div>
        <p>
          {" "}
          The Coffee Market Application is a full-featured MERN (MongoDB,
          Express.js, React.js, Node.js) web application designed to deliver a
          seamless and enjoyable online shopping experience for coffee
          enthusiasts. With an intuitive interface and modern design, users can
          easily browse a wide range of premium coffee products, view detailed
          product descriptions, add items to their cart, and securely complete
          purchases.{" "}
        </p>
        <p className="mt-6">
          {" "}
          The platform also includes a powerful admin dashboard that allows
          administrators to manage all aspects of the store efficiently. From
          adding and updating coffee products to tracking and fulfilling
          customer orders, the dashboard provides full control over operations.
          It also includes user management functionality, enabling admins to
          view, update, or remove users as needed. Additionally, real-time
          notifications alert the admin whenever a new order is placed, ensuring
          timely processing and improved customer satisfaction.{" "}
        </p>{" "}
        <p className="mt-6">
          {" "}
          Built with scalability and performance in mind, The Coffee Market
          Application uses a robust backend powered by Node.js and Express,
          while MongoDB handles data storage for products, users, and orders. On
          the front end, React provides a fast, responsive, and interactive
          experience for users. Whether you're a coffee shop owner looking to
          expand online or a coffee lover searching for your next favorite
          blend, this application delivers a professional and reliable solution.{" "}
        </p>
      </div>
    ),
  },
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
];
