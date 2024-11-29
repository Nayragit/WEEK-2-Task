const sectionData = {
    perPage: 1,
    blocks: [
        {
            type: "slide",
            preHeading: "Gold Luxury,",
            heading: "Exquisite Watches",
            imageUrl: "/image/Watches.png",
            description: `Discover the Perfect Watch for Every Occasion 
                          and Elevate Your Style with Timeless Elegance 
                          and Precision Craftsmanship - watch`,
            price: "$499.00",
            buttonLink: "#",
            contentAlign: "left-start",
            textAlign: "left",
            bgColor: "#F6B174"
        },
        {
            type: "slide",
            preHeading: "Silver Luxury,",
            heading: "Dainty Timepieces",
            imageUrl: "/image/Group 5.png",
            description: `Explore the Ideal Timepiece for Any Moment 
                          and Enhance Your Style with Timeless Sophistication 
                          and Impeccable Craftsmanship - timepiece`,
            price: "$469.00",
            buttonLink: "#",
            contentAlign: "left-start",
            textAlign: "left",
            bgColor: "#B2B5B5"
        },
        {
            type: "slide",
            preHeading: "Elegant Style,",
            heading: "Elegant Timepieces",
            imageUrl: "/image/Group 6.png",
            description: `Discover the Perfect Watch for Every Occasion 
                          and Elevate Your Style with Timeless Elegance 
                          and Precision Craftsmanship - watch`,
            price: "$529.00",
            buttonLink: "#",
            contentAlign: "left-start",
            textAlign: "left",
            bgColor: "#41B165"
        },
        {
            type: "slide",
            preHeading: "Luxury Redefined,",
            heading: "Refined Timepieces",
            imageUrl: "/image/Group 7.png",
            description: `Discover the Perfect Watch for Every Occasion 
                          and Elevate Your Style with Timeless Elegance 
                          and Precision Craftsmanship - watch`,
            price: "$599.00",
            buttonLink: "#",
            contentAlign: "left-start",
            textAlign: "left",
            bgColor: "#F55956"
        },
    ],
  };
  
  const productTitle = document.getElementById("product-title");
  const productTitle2 = document.getElementById("product-title-2");
  const description = document.getElementById("description");
  const price = document.getElementById("price");
  const body = document.querySelector("body");
  
  
  document.addEventListener('DOMContentLoaded', function () {
    const slideList = document.querySelector(".splide__list");
    sectionData.blocks.forEach(data => {
      const slide = document.createElement("li");
      slide.classList.add("splide__slide");
      slide.innerHTML = `<img src="${data.imageUrl}" alt="image1">`
      slideList.appendChild(slide);
    })
    
    var splide = new Splide('.splide', {
        type: 'loop',
        perPage: sectionData.perPage,
        pagination: false
    });
    splide.mount();
  
    splide.on("move", (index) => {    
      updateContent(sectionData.blocks[index]);
    });
  });
  
  const updateContent = data => {
    productTitle.innerHTML = data.heading;
    productTitle2.innerHTML = data.preHeading;
    description.innerHTML = data.description;
    price.innerHTML = data.price;
    body.style.backgroundColor = data.bgColor;
  }


