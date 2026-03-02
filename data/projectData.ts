export type Project = {
  id: number;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  content: string;
  duration: {
    startDate: string;
    endDate: string;
  };
  status: "completed" | "in-progress" | "archived";

  category: "fullstack" | "frontend" | "backend";

  thumbnail: string;
  images: {
    title: string;
    src: string;
    alt: string;
  }[];

  links: {
    live?: string;
    demo?: string;
    github?: string;
  };

  techStack: string[];
  features: string[];
};
export const majorProjects: Project[] = [
  {
    id: 1,
    slug: "flashcard-generator",
    title: "Flashcard Generator",
    tagline: "Interactive flashcard creation app",
    description:
      "A React-based flashcard generator application that allows users to create, manage, download, and print flashcards with validation and local storage support.",
    content: `
    <p>The project addressed the need for a user-friendly application to simplify the creation and management of flashcards efficiently. It was developed using a combination of technologies such as <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, <strong>React</strong>, <strong>Tailwind CSS</strong>, <strong>Redux Toolkit</strong>, <strong>Formik</strong>, <strong>jspdf</strong>, <strong>yup</strong>, and <strong>react-router-dom</strong> to ensure robust functionality.</p>

    <p>The application facilitates intuitive creation and access to flashcards, supporting features such as text and image card creation, sharing options, download capabilities, deletion functionality, and print support for enhanced usability.</p>

    <p>To further enhance project efficiency, <strong>Agile methodology</strong> was employed, with <strong>React</strong>, <strong>React-Redux</strong>, and <strong>localStorage</strong> used for data management, <strong>React Router</strong> for routing, and <strong>Tailwind CSS</strong> for responsive component development. Input validation with <strong>Formik.js</strong> helped streamline user interactions, ensuring a smooth and reliable user experience.</p>
  `,
    duration: {
      startDate: "5 Jul 2023",
      endDate: "27 Oct 2023",
    },

    status: "completed",
    category: "frontend",

    thumbnail: "/project-images/flashcard/flashcard-dashboard.webp",

    images: [
      {
        title: "Flashcard Dashboard",
        src: "/project-images/flashcard/flashcard-dashboard.webp",
        alt: "Flashcard dashboard page with option to create new flashcards",
      },
      {
        title: "My Flashcards",
        src: "/project-images/flashcard/my-flashcards.webp",
        alt: "List view showing all created flashcards",
      },
      {
        title: "Empty Flashcards State",
        src: "/project-images/flashcard/flashcards-empty-state.webp",
        alt: "Empty state screen displayed when no flashcards are available",
      },
      {
        title: "Delete Confirmation Modal",
        src: "/project-images/flashcard/delete-flashcard-modal.webp",
        alt: "Confirmation modal prompting user to delete a flashcard",
      },
      {
        title: "Flashcard Detail View",
        src: "/project-images/flashcard/flashcard-detail-view.webp",
        alt: "Flashcard detail page displaying term and definition cards",
      },
      {
        title: "Shared Flashcard View",
        src: "/project-images/flashcard/shared-flashcard-view.webp",
        alt: "Public shared flashcard page accessible via URL",
      },
    ],

    links: {
      live: "https://flashcardgenerator4.netlify.app/",
      github: "https://github.com/Ashvary1996/flashcardgenerator",
    },

    techStack: [
      "react",
      "tailwind",
      "redux-toolkit",
      "html",
      "css",
      "js",
      "formik",
      "netlify",
    ],

    features: [
      "Create text and image flashcards",
      "Download as PDF",
      "Print support",
      "Form validation using Formik & Yup",
      "Local storage persistence",
    ],
  },

  {
    id: 2,
    slug: "red-bus",
    title: "Red Bus",
    tagline: "Bus ticket booking web application",
    description:
      "A full-stack bus ticket booking application that allows users to search buses, select seats, and securely book tickets using Stripe payment integration.",

    duration: {
      startDate: "23 March 2024",
      endDate: "26 April 2024",
    },

    status: "completed",
    category: "fullstack",

    thumbnail: "/project-images/red-bus/redbus-home.webp",

    images: [
      {
        title: "RedBus Home Page",
        src: "/project-images/red-bus/redbus-home.webp",
        alt: "RedBus homepage with bus search form and location inputs",
      },
      {
        title: "Bus Search Results",
        src: "/project-images/red-bus/bus-search-results.webp",
        alt: "Bus listing page showing available buses with filter options",
      },
      {
        title: "Seat Selection",
        src: "/project-images/red-bus/seat-selection.webp",
        alt: "Bus seat selection layout with available and booked seats",
      },
      {
        title: "Traveller Details",
        src: "/project-images/red-bus/traveller-details.webp",
        alt: "Traveller details form page for entering passenger information",
      },
      {
        title: "Payment Gateway",
        src: "/project-images/red-bus/payment-gateway.webp",
        alt: "Secure payment gateway page for completing ticket booking",
      },
      {
        title: "Booking Confirmed",
        src: "/project-images/red-bus/booking-confirmed.webp",
        alt: "Booking confirmation page displaying successful ticket reservation",
      },
      {
        title: "Booking Ticket View",
        src: "/project-images/red-bus/booking-ticket-view.webp",
        alt: "Final ticket view page showing booking details and seat information",
      },
    ],

    links: {
      live: "https://red-bus-by-ashvary.netlify.app/",
      github: "https://github.com/Ashvary1996/RedBus",
    },

    techStack: [
      "react",
      "tailwind",
      "redux",
      "node-js",
      "express",
      "mongo-db",
      "stripe",
      "netlify",
      "render",
      "postman",
    ],

    features: [
      "Bus search functionality",
      "Seat selection system",
      "Secure Stripe payment integration",
      "Ticket generation after booking",
    ],
    content: `
        <p>The Red Bus app is a user-friendly platform designed to simplify bus ticketing. Users can easily search, book, and manage tickets. The app was developed using an agile methodology for efficient design and development.</p>
        
        <p>The frontend is built with <strong>ReactJS</strong> and <strong>Tailwind CSS</strong> for a sleek, responsive interface, while <strong>React-Redux</strong> ensures smooth state management.</p>
        
        <p>On the backend, <strong>Node.js</strong> and <strong>MongoDB</strong> provide a scalable infrastructure, with <strong>Stripe</strong> integrated for secure payment processing.</p>
    
        <h3 class="text-xl font-semibold mt-4">Key Features:</h3>
        <ul class="list-disc pl-5">
          <li><strong>Bus Search & Booking:</strong> Easily search for buses and select seats.</li>
          <li><strong>Payment Integration:</strong> Secure payments via <strong>Stripe</strong>.</li>
          <li><strong>Ticket Generation:</strong> Immediate digital tickets after payment.</li>
        </ul>
      `,
  },
  {
    id: 3,
    slug: "e-com-app",
    title: "E-Commerce App",
    tagline: "Full-stack e-commerce platform with admin dashboard",
    description:
      "A full-stack e-commerce web application with authentication, product management, cart system, and Razorpay payment integration. Includes a multi-step checkout process and an admin dashboard for managing products, users, and orders.",
    content: `
    <p>The project addressed the demand for a user-friendly e-commerce application by streamlining the browsing, purchasing, and management of products to enhance the shopping experience. Developed using <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, <strong>React</strong>, <strong>Tailwind CSS</strong>, <strong>Redux Toolkit</strong>, <strong>NodeMailer</strong>, <strong>React-Router</strong>, <strong>Formik</strong>, and <strong>Yup</strong>, the platform offers a comprehensive solution for customers. It features easy navigation, secure transactions, and efficient product management.</p>

    <p>The platform includes advanced functionalities such as product search, cart management, order placement, and a seamless checkout process to ensure user satisfaction. Additionally, a responsive user interface was crafted to ensure optimal performance and visual appeal across various devices, prioritizing accessibility and ease of use for all customers. The application was designed to handle both the customer and admin sides of the platform efficiently.</p>

    <p>On the frontend, the application is powered by <strong>React</strong>, providing a dynamic, responsive interface, while <strong>Tailwind CSS</strong> is used for sleek and responsive styling. For state management, <strong>Redux Toolkit</strong> ensures smooth and efficient navigation across the app. On the backend, secure transactions are facilitated through the integration of <strong>NodeMailer</strong>, while user authentication is handled using <strong>JWT (JSON Web Tokens)</strong>. Additionally, <strong>Razorpay</strong> has been integrated as the payment gateway for secure, seamless transactions.</p>

    <p>The platform also offers essential user management features, including <strong>user registration</strong>, <strong>login</strong>, and <strong>password reset</strong> functionalities. Users can easily register an account, log in securely, and reset their passwords whenever needed, ensuring a smooth user experience throughout the platform.</p>

    <p>In the administrative dashboard, the platform provides admins with the ability to manage products, monitor orders, and moderate user reviews. Admins can easily add new products, update existing listings, and keep track of customer feedback. With this robust feature set, the application aims to deliver a comprehensive, secure, and user-friendly e-commerce experience.</p>
  `,
    duration: {
      startDate: "26 Feb 2024",
      endDate: "28 May 2024",
    },

    status: "completed",
    category: "fullstack",

    thumbnail: "/project-images/e-com/home-page.webp",

    images: [
      {
        title: "Home Page",
        src: "/project-images/e-com/home-page.webp",
        alt: "E-commerce homepage showing featured products and navigation menu",
      },
      {
        title: "User Registration",
        src: "/project-images/e-com/user-registration.webp",
        alt: "User sign up page with registration form fields",
      },
      {
        title: "User Login",
        src: "/project-images/e-com/user-login.webp",
        alt: "Login page with email and password input fields",
      },
      {
        title: "Forgot Password",
        src: "/project-images/e-com/forgot-password.webp",
        alt: "Forgot password form to request reset email",
      },
      {
        title: "Reset Password",
        src: "/project-images/e-com/reset-password.webp",
        alt: "Password reset page to create a new secure password",
      },
      {
        title: "Product Details Page",
        src: "/project-images/e-com/product-details.webp",
        alt: "Product details page with description, price and add to cart button",
      },
      {
        title: "Product Image Preview",
        src: "/project-images/e-com/product-image-preview.webp",
        alt: "Expanded product image preview inside e-commerce application",
      },
      {
        title: "Product Reviews",
        src: "/project-images/e-com/product-reviews.webp",
        alt: "Customer product reviews and rating section",
      },
      {
        title: "Shopping Cart",
        src: "/project-images/e-com/shopping-cart.webp",
        alt: "Shopping cart page displaying selected products and total price",
      },
      {
        title: "Edit Profile",
        src: "/project-images/e-com/edit-profile.webp",
        alt: "User profile edit page with personal information form",
      },
      {
        title: "Order Details",
        src: "/project-images/e-com/order-details.webp",
        alt: "User order details page showing purchased items and status",
      },
      // {
      //   title: "Checkout - Payment Form",
      //   src: "/project-images/e-com/payment-form.webp",
      //   alt: "Checkout page with payment form for card details",
      // },
      {
        title: "Confirm Details",
        src: "/project-images/e-com/confirm-details.webp",
        alt: "Order confirmation page",
      },
      {
        title: "Order Success",
        src: "/project-images/e-com/order-success.webp",
        alt: "Successful order confirmation screen with thank you message",
      },
      {
        title: "Admin Dashboard",
        src: "/project-images/e-com/admin-dashboard.webp",
        alt: "Admin dashboard overview with product and order statistics",
      },
      {
        title: "Add Product",
        src: "/project-images/e-com/add-product.webp",
        alt: "Admin panel page to add a new product",
      },
      {
        title: "Edit Product",
        src: "/project-images/e-com/edit-product.webp",
        alt: "Admin product management page to update product details",
      },
      {
        title: "Update Order Status",
        src: "/project-images/e-com/update-order-status.webp",
        alt: "Admin page to update order delivery status",
      },
      {
        title: "Manage Users",
        src: "/project-images/e-com/manage-users.webp",
        alt: "Admin panel page to view, update, or delete registered users",
      },
    ],

    links: {
      live: "https://ecom-app-by-ashvary.netlify.app/",
      // demo: "https://ecom-app-by-ashvary.netlify.app/",
      github: "https://github.com/Ashvary1996/e-com-app",
    },

    techStack: [
      "react",
      "tailwind",
      "redux-toolkit",
      "node-js",
      "express",
      "mongo-db",
      "monog-db-atlas",
      "jwt",
      "razorpay",
      "nodemailer",
      "postman",
      "netlify",
      "render",
      "github",
      "rest-api",
    ],

    features: [
      "User authentication (JWT)",
      "Product search & filtering",
      "Add to cart",
      "Multi-step checkout",
      "Razorpay payment integration",
      "Admin dashboard",
      "Password reset functionality",
    ],
  },
  {
    id: 4,
    slug: "tripzy-ai",
    title: "Tripzy-AI",
    tagline: "AI-Powered Trip Planner with 3D Globe & Chatbot",
    description:
      "Tripzy-AI is an AI-powered travel planning web application that allows users to generate personalized trip itineraries through a natural conversational chatbot. Powered by Ai, it provides hotel recommendations, day-by-day travel plans, Google Maps integration, and an interactive 3D globe visualization. Users can securely manage and store trips in the cloud with Clerk authentication and MongoDB.",
    content: `
  <p>Tripzy-AI is an AI-powered travel planning web application designed to simplify and automate the process of organizing trips through natural conversation. Instead of manually searching for destinations, hotels, and activities, users can interact with an intelligent travel assistant powered by <strong>Google Gemini  </strong> and <strong>LangChain</strong> to generate personalized travel plans within seconds.</p>

  <p>The application provides complete end-to-end trip planning, including destination suggestions, curated hotel recommendations based on budget and group size, and fully structured day-by-day itineraries. By leveraging conversational AI, Tripzy-AI transforms complex travel planning into a seamless chat-based experience.</p>

  <p>On the frontend, the platform is built using <strong>Next.js </strong>, <strong>React</strong>, and <strong>TypeScript</strong> to ensure scalability and type safety. The UI is styled using <strong>Tailwind CSS</strong>, <strong>Shadcn UI</strong>, and <strong>Aceternity UI</strong>, delivering a modern, responsive, and dark-mode-enabled interface optimized for all devices.</p>

  <p>
  To enhance user engagement, an interactive <strong>3D globe visualization</strong> was implemented using <strong>Aceternity UI</strong>, allowing users to interact with it while generating their trip.
</p> Additionally, hotel recommendations include detailed information with <strong>Google Maps integration</strong> and direct location access.</p>

  <p>On the backend, <strong>Next.js API Routes</strong> handle AI communication and trip processing. Trip data is securely stored in <strong>MongoDB</strong> using <strong>Mongoose</strong>, enabling users to save, manage, and revisit their travel plans. Secure authentication and session management are implemented using <strong>Clerk</strong>, ensuring protected access to user-specific trip data.</p>

  <p>To maintain production-level reliability, <strong>Arcjet</strong> was integrated for rate limiting to prevent abuse of AI endpoints. The entire application is deployed on <strong>Vercel</strong>, providing optimized performance and global availability.</p>

  <p>Overall, Tripzy-AI demonstrates the integration of modern web technologies, AI orchestration, secure authentication, database management, and interactive 3D graphics into a cohesive, production-ready travel planning platform.</p>
`,
    duration: {
      startDate: "28 Aug 2025",
      endDate: "25 Sep 2025",
    },

    status: "completed",
    category: "fullstack",

    thumbnail: "/project-images/tripzy/tripzy-home.webp",

    images: [
      {
        title: "Tripzy AI Home",
        src: "/project-images/tripzy/tripzy-home.webp",
        alt: "Tripzy AI homepage with trip planning introduction and call to action",
      },
      {
        title: "AI Chatbox Interface",
        src: "/project-images/tripzy/tripzy-chatbox.webp",
        alt: "Conversational AI chat interface used to generate personalized trip plans",
      },
      {
        title: "Final Trip Side Panel",
        src: "/project-images/tripzy/final-trip-side-panel.webp",
        alt: "Scrollable side panel beside AI chatbox displaying hotel details and day-by-day itinerary activities",
      },
      {
        title: "Trip Details View",
        src: "/project-images/tripzy/trip-details-view.webp",
        alt: "Detailed trip overview page showing destination information and itinerary summary",
      },
      {
        title: "Day Activity View",
        src: "/project-images/tripzy/trip-day-activity.webp",
        alt: "Day-wise activity breakdown with locations and scheduled plans",
      },

      {
        title: "My Trips Dashboard",
        src: "/project-images/tripzy/my-trips-dashboard.webp",
        alt: "User dashboard displaying saved and previously created trips",
      },
      {
        title: "Mobile Responsive View",
        src: "/project-images/tripzy/tripzy-mobile-view.webp",
        alt: "Responsive mobile layout of Tripzy AI application",
      },
    ],

    links: {
      live: "https://tripzy-ai.vercel.app/",
      github: "https://github.com/Ashvary1996/TripzyAi",
      // demo: "https://github.com/Ashvary1996/TripzyAi",
    },

    techStack: [
      "next-js",
      "react",
      "typescript",
      "tailwind",
      "shadcn",
      "aceternity",
      "mongo-db",
      "mongoose",
      "clerk",
      "langChain",
      "gemini",
      "arcjet",
      "vercel",
    ],

    features: [
      "AI-powered trip planning using Google Gemini",
      "Interactive conversational chatbot",
      "Personalized hotel recommendations",
      "Day-by-day itinerary generation",
      "Google Maps Location",
      "Secure authentication with Clerk",
      "Trip storage & management in MongoDB",
      "Rate limiting with Arcjet",
      "Dark mode & fully responsive design",
    ],
  },
];

export const miniProjects = [
  {
    title: "Todo-App",
    image: "/project-images/mini-project/todo.webp",
    liveLink: "https://mytodoapp-v2.netlify.app/",
    gitHubLink: "https://github.com/Ashvary1996/todo_app",
    techStackUsed: ["html", "css", "js", "react", "gitHub", "netlify", "redux"],
    description: `"Never forget a task again! This web app lets you create and manage your to-dos, and even saves them when you close your browser."`,
  },
  {
    title: "Movie-Finder",
    image: "/project-images/mini-project/movies.webp",
    liveLink: "https://movies-finder-app-v2.netlify.app/",
    gitHubLink: "https://github.com/Ashvary1996/movie_finder",
    techStackUsed: ["html", "css", "js", "react", "gitHub", "netlify", "axios"],
    description: `"Can't decide what to watch? Search for movies and explore options with this handy web app."`,
  },
  {
    title: "Weather-App",
    image: "/project-images/mini-project/weather.webp",
    liveLink: "https://weather-app-ashvary.netlify.app/",
    gitHubLink: "https://github.com/Ashvary1996/weather_app",
    techStackUsed: [
      "html",
      "css",
      "js",
      "react",
      "gitHub",
      "netlify",
      "react-spinners",
      "axios",
    ],
    description: `"This weather app lets you search for the current conditions and 3-day forecast for any location. Plan your outfits, pack for your trip, or simply check on friends and family – all with a few clicks."`,
  },
];

const archievedProjects: Project[] = [
  {
    id: 5,
    slug: "book-my-show",
    title: "BookMyShow",
    tagline: "Movie ticket booking application",
    description:
      "A full-stack movie ticket booking application that allows users to select movies, choose time slots, and book seats. Connects frontend, backend, and MongoDB database for persistent booking storage.",
    content: `
    <p>BookMyShow is a simple, user-friendly web application that allows users to book movie tickets. It lets users easily select a movie, time slot, and seats from the available options. The main goal of this project was to connect the frontend, backend, and database to create a smooth user experience.</p>

    <p>The frontend provides an intuitive interface for booking, while the backend handles the booking logic and stores data. We use <strong>localStorage</strong> for temporary data storage and <strong>MongoDB</strong> for permanent storage of bookings. This project helped me understand the flow between the frontend, backend, and database in a real-world application.</p>
  `,
    duration: {
      startDate: "26 Feb 2024",
      endDate: "28 May 2024",
    },

    status: "completed",
    category: "fullstack",

    thumbnail: "/project_Images/bookmyshow/bookMyShowHome.png",

    images: [],

    links: {
      live: "https://bookmyshow-3.netlify.app/",
      github: "https://github.com/Ashvary1996/bookmyshow",
    },

    techStack: [
      "React",
      "Bootstrap",
      "Node.js",
      "Express",
      "MongoDB",
      "Axios",
      "Netlify",
      "Render",
    ],

    features: [
      "Movie selection",
      "Time slot booking",
      "Seat selection",
      "Booking storage in MongoDB",
      "Local storage support",
    ],
  },
];
const hero = `I build modern and responsive web applications using clean, maintainable code.

Skilled in developing end-to-end projects, I work on both frontend and backend development — designing intuitive user interfaces, building REST APIs, and managing databases to ensure smooth integration and reliable functionality.

I focus on writing structured and efficient code, improving application performance, and creating seamless digital experiences that prioritize usability and clarity.

Through hands-on project development, I have gained practical experience in building real-world applications, understanding application flow, state management, routing, and data handling across the stack. 

I am committed to continuous learning, refining my technical skills, and adapting to modern development standards.

As a developer, my goal is to contribute to impactful projects, collaborate effectively within teams, and grow into a well-rounded software developer in a professional environment.`;
