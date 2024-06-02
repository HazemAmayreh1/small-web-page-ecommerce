document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("id");

  const products = {
    1: {
      img: "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
      title: "Men's Sweatshirt",
      price: "90.00$",
      description: "Comfortable cotton blend fabric, perfect for casual wear.",
    },
    2: {
      img: "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/2060340/2017/9/14/11505387708574-Puma-Men-Black-Solid-Sporty-Jacket-371505387708496-1.jpg",
      title: "Black Solid Sporty Jacket",
      price: "65.99$",
      description: "Ideal for outdoor activities, durable and stylish.",
    },
    3: {
      img: "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/productimage/2018/9/19/b1373b00-37d4-41a0-a908-5d742a68d3661537343756229-1.jpg",
      title: "Designer Shirt",
      price: "140.00$",
      description: "Perfect for formal events, crafted with premium materials.",
    },
    4: {
      img: "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/3854721/2018/3/12/11520844673915-BARESKIN-Women-Black-Solid-Lightweight-Leather-Jacket-7761520844673718-1.jpg",
      title: "Women's Leather Jacket",
      price: "45.00$",
      description: "Elegant and comfortable, suitable for all seasons.",
    },
    5: {
      img: "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/5649908/2018/5/10/6bfe80cd-2f55-42bc-aa7f-e0d6c9e2ac531525936414747-SASSAFRAS-Women-Blue-Solid-Shirt-Dress-3831525936414532-1.jpg",
      title: "Blue Solid Shirt Dress",
      price: "50.00$",
      description:
        "Casual yet chic, ideal for both daywear and evening outings.",
    },
    6: {
      img: "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/9803247/2019/5/27/624dac60-4c42-4902-bba1-30a51cc7f43c1558948536543-Apple-Unisex-Smart-Watches-1441558948536225-1.jpg",
      title: "Unisex Silver-Toned Series 3 Smart Watch",
      price: "120.00$",
      description:
        "Advanced health monitoring, fitness tracking, and connectivity in a luxurious silver-tone finish.",
    },
    7: {
      img: "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/productimage/2019/2/23/dc05b5e5-aa82-493e-bf0b-0c309baf21021550920383101-1.jpg",
      title: "Unisex Black & Green Reflex 2.0 Smart Band",
      price: "320.00$",
      description:
        "Stay fit and connected with the Reflex 2.0, featuring fitness tracking, sleep monitoring, and phone notifications.",
    },
    8: {
      img: "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/10122083/2019/6/24/e533a691-3908-41b0-8307-1928a37d4ec41561362162650-Samsung-Galaxy-Fit-4801561362161527-1.jpg",
      title: "Unisex Black Galaxy Fit Fitness Band",
      price: "605.00$",
      description:
        "Your perfect fitness partner with heart rate monitor, daily activity tracker, and a sleek, comfortable design.",
    },
    9: {
      img: "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/9803279/2019/5/27/6661d579-12ae-456b-b8f2-e78e5256a99c1558948436173-Apple-AirPods-with-Charging-Case-2nd-Gen-White-3831558948435-1.jpg",
      title: "White 2nd Gen AirPods With Charging Case",
      price: "72.00$",
      description:
        "Experience the magic of AirPods with effortless wireless listening and all-day battery life.",
    },
    10: {
      img: "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/8593217/2019/4/9/de2c21f3-6731-4c29-9369-692a486a1b8c1554802772926-Samsung-Gear-IconX-Black-Cord-free-Fitness-Earbuds-256155480-1.jpg",
      title: "Gear IconX Black Cord-Free Fitness Earbuds",
      price: "40.00$",
      description:
        "Go truly wireless with these high-performance earbuds, designed for a secure and comfortable fit during your workout.",
    },
    11: {
      img: "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/productimage/2019/2/23/dc05b5e5-aa82-493e-bf0b-0c309baf21021550920383101-1.jpg",
      title: "Unisex Black & Green Reflex 2.0 Smart Band",
      price: "59.99$",
      description:
        "Featuring a customizable interface, this smart band tracks your fitness goals and keeps you connected.",
    },
  };

  const product = products[productId];

  if (product) {
    const container = document.getElementById("product-info-container");
    container.innerHTML = `
            <div class="product-info">
                <div class="product-img">
                    <img src="${product.img}" alt="Product Image">
                </div>
                <div class="product-details">
                    <div class="product-title">${product.title}</div>
                    <div class="product-price">${product.price}</div>
                    <div class="product-description">${product.description}</div>
                    <button class="add-to-cart-button">Add to Cart</button>
                </div>
            </div>
        `;
  }
});
