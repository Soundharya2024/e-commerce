const pdts = [
    {
        Img_path: "imgs/earbuds.jpg",
        Name: "SonicWave True Wireless Bluetooth Earbuds",
        Description: "Experience crystal-clear sound with SonicWave's True Wireless Bluetooth Earbuds. These lightweight, water-resistant earbuds feature noise-canceling technology and a 24-hour battery life with the charging case.",
        Price: 5799,
        Features: "Noise-canceling, 24-hour battery life, IPX7 water-resistant, Bluetooth 5.0"
    },
    {
        Img_path: "imgs/water-bottle.jpg",
        Name: "HydroMax Stainless Steel Insulated Water Bottle",
        Description: "Keep your drinks hot or cold for hours with the HydroMax insulated water bottle. Made from premium stainless steel, it’s perfect for outdoor adventures or daily use.",
        Price: 2499,
        Features: "32 oz capacity, double-walled insulation, BPA-free, sweat-proof design"
    },
    {
        Img_path: "imgs/cctv.jpg",
        Name: "SafeHome 1080p HD Smart Security Camera",
        Description: "Monitor your home with ease using the SafeHome Smart Security Camera. With 1080p HD video, night vision, and motion detection, you can keep an eye on everything from anywhere via the mobile app.",
        Price: 7499,
        Features: "1080p HD video, night vision, motion detection, mobile app integration"
    },
    {
        Img_path: "imgs/yoga-mat.jpg",
        Name: "EcoFlex Non-Toxic Yoga Mat",
        Description: "Practice your poses on the EcoFlex Yoga Mat, made from 100% recyclable, non-toxic materials. Its non-slip surface ensures stability during your workout.",
        Price: 3299,
        Features: "6mm thickness, non-slip surface, eco-friendly, available in multiple colors"
    },
    {
        Img_path: "imgs/LED-light-bulb.jpg",
        Name: "LumiGlow Smart LED Light Bulb",
        Description: "Illuminate your space with LumiGlow Smart LED Light Bulbs. Control the color, brightness, and schedule via your smartphone or voice assistant. Energy-efficient and long-lasting.",
        Price: 1599,
        Features: "16 million colors, voice control, energy-efficient, app-controlled"
    },
    {
        Img_path: "imgs/bbq-grill.jpg",
        Name: "GrillMaster Portable Charcoal BBQ Grill",
        Description: "Take your grilling on the go with the GrillMaster Portable Charcoal BBQ. Compact yet powerful, it's perfect for camping, tailgating, or backyard barbecues.",
        Price: 4999,
        Features: "Compact design, foldable legs, easy to clean, heat-resistant handles"
    },
    {
        Img_path: "imgs/wireless-charger.jpg",
        Name: "PowerHub 3-in-1 Wireless Charging Station",
        Description: "Charge all your devices at once with the PowerHub 3-in-1 Wireless Charging Station. Compatible with smartphones, smartwatches, and earbuds, it keeps your desk clutter-free.",
        Price: 4199,
        Features: "Fast charging, compatible with multiple devices, sleek design, LED indicator"
    },
    {
        Img_path: "imgs/headphone.jpg",
        Name: "QuietTone Active Noise-Canceling Headphones",
        Description: "Immerse yourself in music with QuietTone Headphones. Featuring active noise cancellation, these headphones offer high-fidelity sound and all-day comfort.",
        Price: 12499,
        Features: "Active noise cancellation, 30-hour battery life, Bluetooth 5.0, comfortable ear cushions"
    },
    {
        Img_path: "imgs/fitness-tracker.jpg",
        Name: "FitTrack Pro Smart Fitness Tracker",
        Description: "Track your fitness journey with the FitTrack Pro. Monitor your heart rate, steps, sleep, and more with this sleek, waterproof fitness tracker.",
        Price: 6699,
        Features: "Heart rate monitor, sleep tracking, waterproof, long battery life"
    },
    {
        Img_path: "imgs/bamboo-cutlery-set.jpg",
        Name: "EcoCutter Reusable Bamboo Cutlery Set",
        Description: "Say goodbye to single-use plastic with the EcoCutter Bamboo Cutlery Set. Lightweight, durable, and eco-friendly, it's perfect for on-the-go meals.",
        Price: 1099,
        Features: "Includes fork, knife, spoon, and carrying case, sustainable bamboo, dishwasher safe, lightweight design"
    }
];

document.addEventListener("DOMContentLoaded", () => {
    const body_container = document.getElementById("body-container");
    generatePdtCards(body_container);
});

const generatePdtCards = (body_container) => {
    const body_content = document.createElement("div");
    body_content.classList.add("container-fluid", "d-flex", "flex-wrap");
    pdts.map((pdt) => {
        const card = document.createElement("div");
        card.classList.add("card", "p-2", "m-2");
        card.style = "width: 24rem;";
        card.innerHTML = `<img src="${pdt.Img_path}" class="card-img-top w-100 h-25 object-fit-contain" alt="Product Image">
                        <div class="card-body">
                            <h6 class="card-title">${pdt.Name}</h6>
                            <p class="card-text" style="font-size:0.8rem"><u>Description:</u> ${pdt.Description}</p>
                            <p class="card-text" style="font-size:0.8rem"><u>Features:</u> ${pdt.Features}</p>
                            <h6 class="card-text">₹${pdt.Price}</h6>
                            <a href="#" class="btn btn-primary" style="font-size:0.8rem">Add to Cart</a>
                        </div>`;
        body_content.appendChild(card);
    });
    body_container.appendChild(body_content);
}