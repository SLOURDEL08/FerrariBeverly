// data/navData.js
export const navData = {
  topBar: {
    award: "2022 CAVALLINO AWARD WINNER",
    phone: "(888) 785-8829",
    address: "9372 Wilshire Blvd, Beverly Hills CA 90212"
  },
  dropdowns: {
    buy: {
      title: "Buy",
      items: [
        { title: "New Line Up", image: "NewLineUp.webp", showImage: true },
        { title: "Preowned", image: "Preowned.webp", showImage: true },
        { title: "Where to Find Us", image: "Wheretofindus.webp", showImage: true },
        { title: "Finance", image: "Finance.webp", showImage: true }
      ]
    },
    sell: {
      title: "Sell",
      items: [
        { title: "PRIVATE SELLERS", isHeader: true },
        { title: "Consign Your Vehicle", image: "sellfirst.png", showImage: true },
        { title: "Sell Your Vehicle", image: "sellsec.png", showImage: true }
      ]
    },
    service: {
      title: "Service",
      items: [
        { title: "Schedule Service", image: "service.webp", showImage: true },
        { title: "Parts", image: "parts.webp", showImage: true }
      ]
    },
    newsEvents: {
      title: "News & Events",
      items: [
        { title: "Latest News", showImage: false },
        { title: "Upcoming Events", showImage: false }
      ]
    },
    restoration: {
      title: "Restoration",
      items: [
        { title: "Services", showImage: false },
        { title: "Gallery", showImage: false }
      ]
    },
    racing: {
      title: "Racing",
      items: [
        { title: "Race Events", showImage: false },
        { title: "Track Days", showImage: false }
      ]
    }
  }
};