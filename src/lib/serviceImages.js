// Agency-style images (Unsplash) for service pages and home - consistent, professional look
const U = (id, w = 800) => `https://images.unsplash.com/photo-${id}?w=${w}&q=80`;

// Home page: hero (tech/future), about section (team/services)
export const homeImages = {
  hero: U("1498050108643-0a68279426f2", 900),      // laptop/code - empowering tech
  aboutSection: U("1522071820081-009f0129c71c", 900), // team collaboration
};

export const serviceImages = {
  web: [
    U("1498050108643-0a68279426f2"), // laptop code
    U("1460925891217-b8aae8c2e468"), // dev team
    U("1504384308090-c894fdcc538d"), // workspace
    U("1555066931-4365d14bab8c"),   // coding
    U("1517694712202-14dd9538aa97"), // laptop
  ],
  app: [
    U("1512941937669-90a1b58e7e9c"), // mobile
    U("1627390286158-3b1f50d276c5"), // app dev
    U("1551650975-685de94c1cde"),   // smartphone
  ],
  ai: [
    U("1677442136019-3e9c045a6596"), // AI/tech
    U("1620712943543-b6d35c59b8d6"), // data
    U("1558494949-ef010b88c51e"),   // server/tech
  ],
  cloud: [
    U("1451187580459-43490279c0fa"), // network
    U("1558494949-ef010b88c51e"),   // server
  ],
  cyber: [
    U("1550751827-4bd374c3f58b"),   // security
    U("1563986768609-322b13218c"),   // lock/security
  ],
  video: [
    U("1574717024653-61fd2cf4d44d"), // video production
    U("1611162616475-46b2072da2f9"), // editing
  ],
  game: [
    U("1542751371-adc38448a05c"),   // gaming
    U("1538481192882-7f3bf6b1a5ee"), // game dev
  ],
  graphic: [
    U("1561070791-2526d31a1f44"),   // design
    U("1558655146-d09347e92766"),   // creative
  ],
  digital: [
    U("1611162616305-e2be4c2e2a"),  // marketing
    U("1557804506-669a67965ba3"),   // business
  ],
  ebook: [
    U("1455390582262-044cdead277a"), // writing
    U("1507003211169-0a1dd7228f2d"), // content
    U("1512820790803-83ca734da794"), // books
  ],
};
