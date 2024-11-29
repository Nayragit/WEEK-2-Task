const sectionData = {
    perPage: 1,
    blocks: [
        {
            type: "slide",
            preHeading: "Gold Luxury",
            heading: "Exquisite Watches",
            imageUrl: "/image/Watches.png",
            description: `Discover the Perfect Watch for Every Occasion 
                          and Elevate Your Style with Timeless Elegance 
                          and Precision Craftsmanship - watch`,
            price: "$499.00",
            buttonLink: "#",
            contentAlign: "left-start",
            textAlign: "left",
            "backgroundColor":{from:"#fac291",to:'fac291'},
        },
        {
            type: "slide",
            preHeading: "Silver Luxury",
            heading: "Dainty Timepieces",
            imageUrl: "/image/Group 5.png",
            description: `Explore the Ideal Timepiece for Any Moment 
                          and Enhance Your Style with Timeless Sophistication 
                          and Impeccable Craftsmanship - timepiece`,
            price: "$469.00",
            buttonLink: "#",
            contentAlign: "left-start",
            textAlign: "left",
            "backgroundColor":{from:"#fac291",to:'#d1d1d1'}
},

        {
            type: "slide",
            preHeading: "Elegant Style",
            heading: "Elegant Timepieces",
            imageUrl: "/image/Group 6.png",
            description: `Discover the Perfect Watch for Every Occasion 
                          and Elevate Your Style with Timeless Elegance 
                          and Precision Craftsmanship - watch`,
            price: "$529.00",
            buttonLink: "#",
            contentAlign: "left-start",
            textAlign: "left",
            "backgroundColor":{from:"#fac291",to:'#d1d1d1'}


        },
        {
            type: "slide",
            preHeading: "Luxury Redefined",
            heading: "Refined Timepieces",
            imageUrl: "/image/Group 7.png",
            description: `Discover the Perfect Watch for Every Occasion 
                          and Elevate Your Style with Timeless Elegance 
                          and Precision Craftsmanship - watch`,
            price: "$599.00",
            buttonLink: "#",
            contentAlign: "left-start",
            textAlign: "left",
            "backgroundColor":{from:"#fac291",to:'#63d489'}

        },
    ],
};

document.addEventListener("DOMContentLoaded", function () {
    const splideList = document.querySelector(".splide__list");

    sectionData.blocks.forEach((block) => {
        const slide = document.createElement("li");
        slide.classList.add("splide__slide");

        slide.innerHTML = `
            <div class="container">
                <div class="left-container" style="text-align: ${block.textAlign};">
                    <h1>${block.heading}</h1>
                    <h2>${block.preHeading}, <span>Choose Us</span></h2>
                    <p>${block.description}</p>
                    <h1>${block.price}</h1>
                    <img src="Frame 6.png" alt="dtrfghj">
                </div>
                <div class="right-container">
                    <img src="${block.imageUrl}" alt="${block.heading}">
                </div>
            </div>
        `;

        splideList.appendChild(slide);
    });

    var splide = new Splide(".splide", {
        type: "fade",
        perPage: sectionData.perPage,
        interval: 3000,
        pauseOnHover: true,
        speed: 800,
        arrows: true,
        pagination: true,
    });
    splide.mount();
});


