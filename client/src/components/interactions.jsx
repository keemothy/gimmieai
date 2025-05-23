import { useState, useRef } from "react";

import { sendInteraction } from "../services/api";

import Products from "./products";

import Navbar from "./navbar";

// Structure --> Interaction --> Products
// Interaction.jsx handles user interactions and sends to backend (clicks, hovers, searches)
// Products.jsx handles displaying products for users to interact with (CSS --> images, buttons, searchbars)

function Interactions() {
  // state vars. to track user interactions (clicks, hovers, searches)
  // add more if needed
  const [clicks, setClicks] = useState(0);
  const [hovers, setHovers] = useState(0);
  const [searches, setSearches] = useState("");

  // logs user clicks and sends to backend
  function handleClick(product) {
    setClicks(clicks + 1);
    sendInteraction("click", product);
  }

  // logs user clicks and sends to backend
  function handleHover(product) {
    setHovers(hovers + 1);
    sendInteraction("hover", product);
  }

  // logs user searches queries and sends to backend --> make sure to check for empty/invalid queries
  function handleSearch(query) {
    query.preventDefault();

    if (searches.trim() === "") {
      alert("Search cannot be empty");
      return;
    } else {
      sendInteraction("search", "Search FORM ELEMENT: " + searches.trim());
      setSearches("");
    }
  }

  // sample products to display (use api to fetch live data in the future)
  // maybe add use effect hook later

  const imageList = [
    "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/airpods-pro-2-hero-select-202409_FMT_WHH?wid=750&hei=556&fmt=jpeg&qlt=90&.v=1724041668836",
    "https://static.independent.co.uk/2024/11/07/11/Macbook-pro-m4-review-hero-indybest.jpg",
    "https://www.cellcom.com/sites/default/files/styles/max_650x650/public/2024-09/iPhone_16_Pro_Black_Titanium_1.jpg?itok=OtQNqWUT",
    "https://i5.walmartimages.com/seo/2022-Apple-10-9-inch-iPad-Air-Wi-Fi-64GB-Space-Gray-5th-Generation_39899977-9fe3-418e-a514-7772a48130f2.4e83a69bb20e612dee3e23f58b5e77b8.jpeg",
    "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-compare-series10-202409_FMT_WHH?wid=236&hei=278&fmt=jpeg&qlt=90&.v=eEpjZGlsbzI4YmtuR2pKQXNDTzZ5NksyNll6YVpDWW5Sb2NQeVhEb2c4YnRYMGFMeUFmeGdOTW9BOFNQQTNYbW5OR2k0VGM3MGhVSUIyTU84S2s0S3JvTjVtTkZYU2oxSWxVMzJ2TGNPV0pFc2N2TkZPbGlIYklGV3NtYzBUVXg",
    "https://m.media-amazon.com/images/I/71tGix67QML._AC_UY1000_.jpg",
    "https://m.media-amazon.com/images/I/710exCeNPJL._AC_UF894,1000_QL80_.jpg",
    "https://m.media-amazon.com/images/I/61UgZSYRllL.jpg",
    "https://m.media-amazon.com/images/I/51ySu55JzAL.jpg",
    "https://mobileimages.lowes.com/productimages/21450016-3c7c-42cd-a0fd-53dff0522bb6/61776841.jpg",
    "https://images.philips.com/is/image/philipsconsumer/b9803f34eb74494582e9b014012a3fa6?$pnglarge$&wid=960",
    "https://target.scene7.com/is/image/Target/GUEST_9be1ce6e-81c7-4415-ba9f-58e4569ae0c0?wid=300&hei=300&fmt=pjpeg",
  ];

  const productList = [
    { id: 1, item: "Airpods Pro", price: 249, image: imageList[0] },
    { id: 2, item: "Macbook Pro", price: 1999, image: imageList[1] },
    { id: 3, item: "iPhone 16 Pro", price: 700, image: imageList[2] },
    { id: 4, item: "iPad Air 5", price: 300, image: imageList[3] },
    { id: 5, item: "Apple Watch Series 10", price: 200, image: imageList[4] },
    { id: 6, item: "Stephen Curry Jersey", price: 120, image: imageList[5] },
    { id: 7, item: "Amazon Echo", price: 100, image: imageList[6] },
    { id: 8, item: "Sony XM4 Headphones", price: 240, image: imageList[7] },
    { id: 9, item: "Logitech G Pro Mouse", price: 120, image: imageList[8] },
    { id: 10, item: "Leather Office Chair", price: 134, image: imageList[9] },
    { id: 11, item: "Phillips LCD Monitor", price: 120, image: imageList[10] },
    { id: 12, item: "Ring Doorbell 1080p", price: 85, image: imageList[11] },
  ];

  return (
    // TODO:
    // also try to work on some sample data to test the interactions like a image for a product to see if user hovers over it or to see if user clicks on it
    // maybe try adding a search bar to see if user queries for something <-- concept model rather than integration of real data <-- log these things to the backend
    // use map to loop thru elements above into products

    <div>
      <Navbar
        searches={searches}
        handleSearch={handleSearch}
        setSearches={setSearches}
      />
      <div className="card-grid">
        {productList.map((productItem) => (
          <Products
            key={productItem.id}
            item={productItem.item}
            price={productItem.price}
            img={productItem.image}
            clicks={clicks}
            handleClick={handleClick}
            hovers={hovers}
            handleHover={handleHover}
          />
        ))}
      </div>
    </div>
  );
}

export default Interactions;
