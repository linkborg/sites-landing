import { Hono } from 'hono'

const app = new Hono()

app.get("/", (c) => {

  const url = new URL(c.req.url);
  const username = url.hostname.split(".")[0];

  const dummyData = {
    user: {
        name: "Alice Smith",
        email: "alice@example.com",
        bio: "Passionate about technology and innovation.",
        image: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    description: "Welcome to my personal website!",
    subdomain: "alice",
    customDomain: null,
    image: "https://img.freepik.com/free-photo/pink-sky-background-with-crescent-moon_53876-129048.jpg",
    ackee_tracking_id: "dummy_ackee_tracking_id",
    analytics_code: "dummy_analytics_code",
    layout: "grid",
    blocks: [
        {
            title: "Blogs",
            description: "Read my latest blogs.",
            type: "link",
            slug: "blogs",
            image: "https://via.placeholder.com/800x400",
            hidden: false,
            order: 1,
        },
        {
          title: "Tweets",
          description: "Latest Tweets",
          type: "link",
          slug: "tweets",
          image: "https://via.placeholder.com/800x400",
          hidden: false,
          order: 2,
      },
        // Add more block objects as needed
    ],
  };

  const user = dummyData.user;

  const blocksHTML = dummyData.blocks
    .filter((block) => !block.hidden) // Filter out hidden blocks
    .sort((a, b) => a.order - b.order) // Sort blocks by order
    .map((block) => {
      return `
      <div class="bg-gray-800 rounded-lg p-4 mx-4 mt-4 link">
        <div class="flex justify-between items-center mb-2">
          <i class="fas fa-link text-gray-400"></i>
          <span class="text-gray-400 text-sm">${block.description}</span>
        </div>
        <a
          href="/${block.slug}"
          class="block bg-gray-700 rounded-lg p-4 text-white hover:bg-gray-600 transition-colors duration-300"
        >
          ${block.title}
        </a>
      </div>`;
    })
    .join('');

  const htmlContent = `
  <!DOCTYPE html>
  <html lang="en" class="dark">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>LinkTree Alternative</title>
      <script src="https://cdn.tailwindcss.com"></script>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      />
  
      <script>
        tailwind.config = {
          darkMode: "class",
        };
      </script>
      <style>
        body {
          background-color: #000;
          color: #fff;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
        }
  
        .canvas {
          background-color: #000;
          border-radius: 2rem;
          overflow: hidden;
          max-width: 400px;
          width: 100%;
          box-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
          position: relative;
        }
  
        .banner {
          background-image: url("https://via.placeholder.com/800x400");
          height: 150px;
          width: 100%;
          position: relative;
          background-size: cover;
          background-position: center;
          position: unset;
          z-index: -1;
        }
  
        .dark-mode-toggle {
          position: absolute;
          top: 10px;
          right: 10px;
          background-color: rgba(0, 0, 0, 0.5);
          color: white;
          padding: 12px 12px;
          width: auto;
          border-radius: 20px;
          font-size: 14px;
          cursor: pointer;
        }
  
        .share-button {
          background-color: #7c3aed;
          color: white;
          padding: 8px 12px;
          border-radius: 20px;
          font-size: 14px;
          cursor: pointer;
          display: inline-block;
          margin-top: 10px;
        }
  
        .link {
          transition: background-color 0.3s ease;
        }
  
        .link:hover {
          background-color: rgba(255, 255, 255, 0.2);
        }
  
        @media (max-width: 640px) {
          .canvas {
            border-radius: 0;
            max-width: 100%;
          }
        }
      </style>
    </head>
    <body>
      <div class="canvas">
        <div class="banner ">
        <img src="${dummyData.image}" alt="Banner" class="w-full h-full object-cover" />
          <div class="dark-mode-toggle w-fit h-fit" id="darkModeToggle">
            <i class="fas fa-moon"></i>
          </div>
        </div>
        <div class="text-center mb-8 -mt-16">
          <img
            src="${user.image}"
            alt="Avatar"
            class="rounded-full bg-blue-500 w-32 h-32 mx-auto mb-4 m-2"
          />
          <h1 class="text-2xl font-bold mt-4">${user.name}</h1>
          <p class="text-gray-400 ">
            ${user.bio}
          </p>
          <div
            class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 m-7 focus:ring-blue-300 font-medium rounded-md text-sm py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <i class="share-btn"></i> Share
          </div>
          <div class="flex justify-center space-x-4 mb-4">
            <a href="#" class="text-gray-400 hover:text-white">
              <i class="fab fa-github fa-lg"></i>
            </a>
            <a href="#" class="text-gray-400 hover:text-white">
              <i class="fab fa-stack-overflow fa-lg"></i>
            </a>
            <a href="#" class="text-gray-400 hover:text-white">
              <i class="fab fa-codepen fa-lg"></i>
            </a>
          </div>
          <div class="flex justify-center space-x-4">
            <a href="#" class="text-gray-400 hover:text-white">
              <i class="fab fa-facebook fa-lg"></i>
            </a>
            <a href="#" class="text-gray-400 hover:text-white">
              <i class="fab fa-twitter fa-lg"></i>
            </a>
            <a href="#" class="text-gray-400 hover:text-white">
              <i class="fab fa-instagram fa-lg"></i>
            </a>
            <a href="#" class="text-gray-400 hover:text-white">
              <i class="fab fa-linkedin fa-lg"></i>
            </a>
          </div>
        </div>
        ${blocksHTML}
        <p class="text-gray-400 mt-8 mb-4 text-center">© linkborg</p>
      </div>
  
      <script>
        const darkModeToggle = document.getElementById("darkModeToggle");
        const html = document.querySelector("html");
  
        darkModeToggle.addEventListener("click", () => {
          if (html.classList.contains("dark")) {
            html.classList.remove("dark");
            darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
          } else {
            html.classList.add("dark");
            darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
          }
        });
      </script>
    </body>
  </html>
  `;

  return c.html(htmlContent);
})

export default app
