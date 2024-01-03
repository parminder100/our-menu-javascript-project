const menuData = [
    {
        id: 1,
        MenuImage: 'img/item-1.jpeg',
        MenuName: 'buttermilk pancakes',
        MenuPrice: '$15.99',
        MenuDesc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed`,
        category: "breakfast"
    },
    {
        id: 2,
        MenuImage: 'img/item-2.jpeg',
        MenuName: 'diner double',
        MenuPrice: '$13.99',
        MenuDesc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats`,
        category: "lunch"
    },
    {
        id: 3,
        MenuImage: 'img/item-3.jpeg',
        MenuName: 'godzilla milkshake',
        MenuPrice: '$6.99',
        MenuDesc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
        category: "shakes"
    },
    {
        id: 4,
        MenuImage: 'img/item-4.jpeg',
        MenuName: 'country delight',
        MenuPrice: '$20.99',
        MenuDesc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut.`,
        category: "breakfast"
    },
    {
        id: 5,
        MenuImage: 'img/item-5.jpeg',
        MenuName: 'egg attack',
        MenuPrice: '$22.99',
        MenuDesc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up`,
        category: "lunch"
    },
    {
        id: 6,
        MenuImage: 'img/item-6.jpeg',
        MenuName: 'oreo dream',
        MenuPrice: '$18.99',
        MenuDesc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
        category: "shakes"
    },
    {
        id: 7,
        MenuImage: 'img/item-7.jpeg',
        MenuName: 'bacon overflow',
        MenuPrice: '$8.99',
        MenuDesc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird`,
        category: "breakfast"
    },
    {
        id: 8,
        MenuImage: 'img/item-8.jpeg',
        MenuName: 'american classic',
        MenuPrice: '$12.99',
        MenuDesc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut`,
        category: "lunch"
    },
    {
        id: 9,
        MenuImage: 'img/item-9.jpeg',
        MenuName: 'quarantine buddy',
        MenuPrice: '$16.99',
        MenuDesc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing`,
        category: "shakes"
    },
    {
        id: 10,
        MenuImage: 'img/item-10.jpeg',
        MenuName: 'steak dinner',
        MenuPrice: '$39.99',
        MenuDesc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
        category: "dinner"
    },
]


const renderMenuItem = () =>{
    const menuContainer = document.querySelector(".menu__row");

    menuContainer.innerHTML = menuData.map((menu)=>(
        `
        <div class="col-12, col-sm-12 col-lg-6 col-xl-6 menu__item__card">
            <div class="menu__items__list">
                <img src=${menu.MenuImage} alt="item-1">
                <div>
                    <div class="menu__name__price">
                        <p>${menu.MenuName}</p>
                        <p class="price">${menu.MenuPrice}</p>
                    </div>
                    <p class="menu__desc">
                        ${menu.MenuDesc}
                    </p>
                </div>
            </div>
        </div>
        `
    )).join('');
}
renderMenuItem();

const menuBtn = document.querySelectorAll(".btn");
const handleMenuButton = (event) =>{
    const menuContainer = document.querySelector(".menu__row");
    menuBtn.forEach((otherBtn)=>{
        if(event.target !== otherBtn){
            otherBtn.classList.remove("btn--active");
        }
    })
    
    menuBtn.forEach((btn)=>{
        if(event.target === btn){
            btn.classList.add("btn--active");
        }
    })

    if(event.target.innerText.trim().toLowerCase() === "all"){
        renderMenuItem();
    }
    else{

        const filteredMenu = menuData.filter((menuFilter)=>{
            return(
                event.target.innerText.trim().toLowerCase() === menuFilter.category.trim().toLowerCase()
            )
        })
        menuContainer.innerHTML = filteredMenu.map((menu)=>{
            return`
            <div class="col-12 col-sm-12 col-lg-6 col-xl-6 menu__item__card">
                <div class="menu__items__list">
                    <img src=${menu.MenuImage} alt="item-1">
                    <div>
                        <div class="menu__name__price">
                            <p>${menu.MenuName}</p>
                            <p class="price">${menu.MenuPrice}</p>
                        </div>
                        <p class="menu__desc">
                            ${menu.MenuDesc}
                        </p>
                    </div>
                </div>
            </div>
            `
        }).join('')
    }
}