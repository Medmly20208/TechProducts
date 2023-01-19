let productNameElement = document.querySelector("span");
let productContainer = document.querySelector(".container");
let productImgElement = document.createElement("img");
let productDescriptionElement = document.querySelector(".desc");
let headPhonesImg = "HeadPhones.jpg",
  airPodsImg = "AirPods.jpg",
  iphoneImg = "Iphone13.jpg",
  watchImage = "Watch.jpg",
  macbookImage = "MacBook.jpg";

let watchDescription =
    "Apple Watch is a wearable smartwatch that allows users to accomplish a variety of tasks, including making phone calls, sending text messages and reading email. ... In addition to using a Bluetooth connection, the watch can also connect with an iPhone if it is on the same Wi-Fi network.",
  HeadPhoneDescription =
    "They are wireless earbud-style headphones with microphones, dual accelerometers, IR sensors used to pause music if they are not in the user's ears, and motion touch sensors that are used to activate controls.",
  IphoneDescription =
    "The iPhone 13 has a 6.1-inch screen, and the iPhone 13 mini has a 5.4-inch screen. They both use Apple's Ceramic Shield cover glass, which adds improved drop protection. The Super Retina XDR display is 28% brighter up to 800 nits for regular content, 1200 nits for HDR.",
  airPodsDescription =
    "The new AirPods — complete with Wireless Charging Case — deliver the wireless headphone experience, reimagined. Just pull them out of the case and they're ready to use with your iPhone, Apple Watch, iPad, or Mac. After a simple one-tap setup, AirPods work like magic. They're automatically on and always connected",
  macBookDescription =
    "ntroducing the sleek and powerful MacBook. With a stunning Retina display, the latest Apple M1 chip, and all-day battery life, this laptop is designed for both work and play. With its lightweight and durable design, it's easy to take with you wherever you go";
let productsData = [
  ["headphones", headPhonesImg, HeadPhoneDescription],
  ["AirPods", airPodsImg, airPodsDescription],
  ["Iphone13", iphoneImg, IphoneDescription],
  ["Apple Watch", watchImage, watchDescription],
  ["Mac Book", macbookImage, macBookDescription],
];

let productsDataIndex = 0;
setInterval(function () {
  generateProduct(
    productsData[productsDataIndex][0],
    productsData[productsDataIndex][1],
    productsData[productsDataIndex][2]
  );
  productsDataIndex += 1;
  if (productsDataIndex > productsData.length - 1) {
    productsDataIndex = 0;
  }
}, 3000);

function generateProduct(productName, productImage, productDescription) {
  productImgElement.setAttribute("src", productImage);
  productContainer.appendChild(productImgElement);

  productDescriptionElement.textContent = productDescription;
  var i = 0;
  var y = productName.length - 1;
  var pa = setInterval(() => {
    productNameElement.textContent += productName[i];
    i += 1;
    if (i > y) {
      clearInterval(pa);
    }
  }, 100);
  productNameElement.textContent = "";
}
