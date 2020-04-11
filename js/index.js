const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", "../img/logo.png");

// Task 1: Create selectors to point your data into elements
// Create selectors by using any of the DOM element's methods

const navSelector = document.querySelector("nav");

const navLinks = document.querySelectorAll(".container header nav a");

const ctaSelector = document.getElementsByClassName("cta");

const ctaHeader = document.querySelector(".cta h1");

const ctaBtn = document.querySelector(".cta button");

const ctaImage = document.getElementById("cta-img");

const topHeading = document.querySelectorAll(".main-content .top-content h4");

const topText = document.querySelectorAll(".main-content .top-content p");

const bottomHeading = document.querySelectorAll(".main-content .bottom-content h4");

const bottomText = document.querySelectorAll(".main-content .bottom-content p");

const mainImage = document.getElementById("middle-img");

const contactHeading = document.querySelector(".contact h4");

const contactText = document.querySelectorAll(".contact p");

const footerSelector = document.querySelector("footer");

//Use the IDs to update src path content

ctaImage.setAttribute("src", "../img/header-img.png");

mainImage.setAttribute("src", "../img/mid-page-accent.jpg");

//Task 2: Update the HTML with the JSON data
// Using your selectors, update the content to match the example file.

let navIndex = 1;

navLinks.forEach(link => {
  link.textContent = siteContent["nav"][`nav-item-${navIndex}`];
  link.style.color = "green";
  navIndex++;
});

ctaHeader.textContent = "DOM Is Awesome";

ctaBtn.textContent = "Get Started";

//top content headers

topHeading[0].textContent = siteContent["main-content"]["features-h4"];

topHeading[1].textContent = siteContent["main-content"]["about-h4"];

//top content text

topText[0].textContent = siteContent["main-content"]["features-content"];

topText[1].textContent = siteContent["main-content"]["about-content"];


//bottom content headers

bottomHeading[0].textContent = siteContent["main-content"]["services-h4"];

bottomHeading[1].textContent = siteContent["main-content"]["product-h4"];

bottomHeading[2].textContent = siteContent["main-content"]["features-h4"];

//bottom content text

bottomText[0].textContent = siteContent["main-content"]["services-content"];

bottomText[1].textContent = siteContent["main-content"]["product-content"];

bottomText[2].textContent = siteContent["main-content"]["features-content"];

//contact

contactHeading.textContent = siteContent["contact"]["contact-h4"];

contactText[0].textContent = siteContent["contact"]["address"];

contactText[1].textContent = siteContent["contact"]["phone"];

contactText[2].textContent = siteContent["contact"]["email"];

//footer

footerSelector.textContent = siteContent["footer"]["copyright"];


//Task 3: Add new content
//Change the color of the navigation text to be green.

//added to for loop above 


//Utilize `.appendChild()` and `.prepend()` to add two new items to the navigation 


let append = document.createElement("a");

append.textContent = "App";

append.style.color = "green";

navSelector.appendChild(append);

let prepend = document.createElement("a");

prepend.textContent = "Home";

navSelector.prepend(prepend);

prepend.style.color = "green";


