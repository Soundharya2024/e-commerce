const pdts = [
    {
        Img_path: "imgs/earbuds.jpg",
        Name: "True Wireless Bluetooth Earbuds",
        Description: "Experience crystal-clear sound with SonicWave's True Wireless Bluetooth Earbuds. These lightweight, water-resistant earbuds feature noise-canceling technology and a 24-hour battery life with the charging case.",
        Price: 5799,
        Features: "Noise-canceling, 24-hour battery life, IPX7 water-resistant, Bluetooth 5.0"
    },
    {
        Img_path: "imgs/water-bottle.jpg",
        Name: "Stainless Steel Water Bottle",
        Description: "Keep your drinks hot or cold for hours with the HydroMax insulated water bottle. Made from premium stainless steel, it’s perfect for outdoor adventures or daily use.",
        Price: 2499,
        Features: "32 oz capacity, double-walled insulation, BPA-free, sweat-proof design"
    },
    {
        Img_path: "imgs/cctv.jpg",
        Name: "1080p HD Smart Security Camera",
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
        Name: "Portable Charcoal BBQ Grill",
        Description: "Take your grilling on the go with the GrillMaster Portable Charcoal BBQ. Compact yet powerful, it's perfect for camping, tailgating, or backyard barbecues.",
        Price: 4999,
        Features: "Compact design, foldable legs, easy to clean, heat-resistant handles"
    },
    {
        Img_path: "imgs/wireless-charger.jpg",
        Name: "3-in-1 Wireless Charging Station",
        Description: "Charge all your devices at once with the PowerHub 3-in-1 Wireless Charging Station. Compatible with smartphones, smartwatches, and earbuds, it keeps your desk clutter-free.",
        Price: 4199,
        Features: "Fast charging, compatible with multiple devices, sleek design, LED indicator"
    },
    {
        Img_path: "imgs/headphone.jpg",
        Name: "Noise-Canceling Headphones",
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
        Name: "Reusable Bamboo Cutlery Set",
        Description: "Say goodbye to single-use plastic with the EcoCutter Bamboo Cutlery Set. Lightweight, durable, and eco-friendly, it's perfect for on-the-go meals.",
        Price: 1099,
        Features: "Includes fork, knife, spoon, and carrying case, sustainable bamboo, dishwasher safe"
    }
];

document.addEventListener("DOMContentLoaded", () => {
    const body_container = document.getElementById("body-container");
    generatePdtCards(body_container);
    addToCartClickAction();

    const cart_modal_body = document.querySelector("#cart-modal .modal-body");
    cart_modal_body.innerHTML = "<p data-initial>Cart is empty</p>";
});

const generatePdtCards = (body_container) => {
    const body_content = document.createElement("div");
    body_content.classList.add("row");
    body_content.style = "margin-top: 100px";
    pdts.map((pdt) => {
        const card_container = document.createElement("div");
        card_container.classList.add("col-lg-3", "col-md-3", "col-sm-4", "col-xs-12", "mb-3");
        card_container.innerHTML = `<div class="card">
                                        <div class="card-body">
                                            <h6 class="card-title pdt-details pdt-name" data-name="${pdt.Name}">${pdt.Name}</h6>
                                            <p class="card-text pdt-details pdt-features"><u>Features:</u> ${pdt.Features}</p>
                                            <h6 class="card-text pdt-details pdt-price text-end">₹${pdt.Price}</h6>
                                            <p class="pdt-details" data-qty="0"></p>
                                            <div class="card-footer text-center pb-0 bg-white">
                                                <button class="btn btn-primary cart-btn">Add to Cart</button>
                                            </div>
                                        </div>
                                    </div>`;
        body_content.appendChild(card_container);
    });
    body_container.appendChild(body_content);
}

const addToCartClickAction = () => {
    document.querySelectorAll("button.cart-btn").forEach((cart_btn) => {
        cart_btn.addEventListener("click", (e) => {
            const current_card = e.target.parentElement.parentElement;
            const current_pdt_details = current_card.getElementsByClassName("pdt-details");
            const cart_modal_body = document.querySelector("#cart-modal .modal-body");
    
            const qty = ++current_pdt_details[3].dataset.qty;
            const minus_btn_creation = (qty === 1) ? `<button class="btn btn-secondary bg-danger btn-minus eListener" disabled>-</button>` : `<button class="btn btn-secondary bg-danger btn-minus eListener">-</button>`;

            const card_container = document.createElement("div");
            card_container.classList.add("col-12", "mb-3");
            card_container.innerHTML = `<div class="card">
                                            <div class="card-body d-flex justify-content-between align-items-baseline">
                                                <h6 class="card-title pdt-name">${current_pdt_details[0].innerText}</h6>
                                                <p class="card-text pdt-price">${current_pdt_details[2].innerText}</p>
                                                <div class="d-flex justify-content-between align-items-baseline qty-container" style="width: 20%">     
                                                    ${minus_btn_creation}
                                                    <p class="qty">${qty}</p>
                                                    <button class="btn btn-secondary bg-success btn-plus eListener">+</button>
                                                </div>
                                            </div>
                                        </div>`;
            if(cart_modal_body.querySelector('p[data-initial]')){
                //First product added to the cart
                cart_modal_body.innerHTML = "";
                cart_modal_body.appendChild(card_container);
            }
            else {
                cart_modal_body.appendChild(card_container);
            }

            //To select the plus btns without event listeners
            const plus_btn = cart_modal_body.getElementsByClassName("btn-plus eListener")[0];

            //Button "+" working
            plus_btn.addEventListener("click", (event) => {
                //Updating qty in cart
                const curr_cart_qty_ele = event.target.parentElement.firstElementChild.nextElementSibling;
                ++curr_cart_qty_ele.textContent; //increment of quantity
                if(curr_cart_qty_ele.textContent === '2') {
                    curr_cart_qty_ele.previousElementSibling.removeAttribute("disabled"); //Enable "-" button
                }

                //Updating qty in product details
                const curr_pdt_name = event.target.parentElement.parentElement.firstElementChild.textContent;
                //Finding product on product page through pdt-name and its quantity
                const curr_pdt_qty_ele =  document.querySelector(`.pdt-details.pdt-name[data-name="${curr_pdt_name}"]`).parentElement.lastElementChild.previousElementSibling;
                ++curr_pdt_qty_ele.dataset.qty; //increment of quantity
            });    
            plus_btn.classList.remove("eListener");
            
            //To select the plus btns without event listeners
            const minus_btn = cart_modal_body.getElementsByClassName("btn-minus eListener")[0];

            //Button "-" working
            minus_btn.addEventListener("click", (event) => {
                //Updating qty in cart
                const curr_cart_qty_ele = event.target.parentElement.firstElementChild.nextElementSibling;
                --curr_cart_qty_ele.textContent; //decrement of quantity
                if(curr_cart_qty_ele.textContent === '1') {
                    curr_cart_qty_ele.previousElementSibling.setAttribute("disabled",""); //Stop decrement at quantity 1
                }
                
                //Updating qty in product details
                const curr_pdt_name = event.target.parentElement.parentElement.firstElementChild.textContent;
                //Finding product on product page through pdt-name and its quantity
                const curr_pdt_qty_ele =  document.querySelector(`.pdt-details.pdt-name[data-name="${curr_pdt_name}"]`).parentElement.lastElementChild.previousElementSibling;
                --curr_pdt_qty_ele.dataset.qty; //decrement of quantity
            }); 
            minus_btn.classList.remove("eListener");
            
            $("#addcart-alert-modal").modal("show");
        });
    });
}