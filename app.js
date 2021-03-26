const barIcon = document.querySelector('.bar');
const nav = document.querySelector('.nav');
const navList = document.querySelector('.nav-list');
const closeIcon = document.querySelector('.nav-top i');
const title = document.querySelectorAll('.title');
const products= document.querySelector('.products-list');
barIcon.onclick = function(){
    document.querySelector('.blur').classList.add('active');
    nav.classList.add('open');
    
}

closeIcon.onclick = function(){
    nav.classList.remove('open');
    document.querySelector('.blur').classList.remove('active');
}



const productsList = [
    {
        name: "Apple iPhone X",
        trending: "1",
        special: "1",
        feature: "1",
        img: "./img/products/iPhone/iphone1.jpeg",
        cost: "$550"
    },
    {
        name: "Apple iPhone X5",
        trending: "0",
        special: "0",
        feature: "1",
        img: "./img/products/iPhone/iphone2.jpeg",
        cost: "$550"
    },
    {
        name: "Apple iPhone X2",
        trending: "0",
        special: "1",
        feature: "1",
        img: "./img/products/iPhone/iphone3.jpeg",
        cost: "$550"
    },
    {
        name: "Apple iPhone X1",
        trending: "1",
        special: "1",
        feature: "0",
        img: "./img/products/iPhone/iphone4.jpeg",
        cost: "$550"
    },
    {
        name: "Apple iPhone X0",
        trending: "0",
        special: "0",
        feature: "1",
        img: "./img/products/iPhone/iphone5.jpeg",
        cost: "$550"
    },
    {
        name: "Apple iPhone X4",
        trending: "0",
        special: "1",
        feature: "1",
        img: "./img/products/iPhone/iphone6.jpeg",
        cost: "$550"
    },
    {
        name: "Samsung 1",
        trending: "0",
        special: "0",
        feature: "1",
        img: "./img/products/samsung/samsung1.jpeg",
        cost: "$550"
    },
    {
        name: "Samsung 2",
        trending: "1",
        special: "1",
        feature: "1",
        img: "./img/products/samsung/samsung2.jpeg",
        cost: "$550"
    },
    {
        name: "Samsung 3",
        trending: "0",
        special: "1",
        feature: "0",
        img: "./img/products/samsung/samsung3.jpeg",
        cost: "$550"
    },
    {
        name: "Samsung 4",
        trending: "1",
        special: "0",
        feature: "1",
        img: "./img/products/samsung/samsung4.jpeg",
        cost: "$550"
    },
    {
        name: "Samsung 5",
        trending: "0",
        special: "1",
        feature: "1",
        img: "./img/products/samsung/samsung5.jpeg",
        cost: "$550"
    },
    {
        name: "Samsung 6",
        trending: "0",
        special: "0",
        feature: "0",
        img: "./img/products/samsung/samsung6.jpeg",
        cost: "$550"
    },
    {
        name: "Headphone 1",
        trending: "0",
        special: "1",
        feature: "1",
        img: "./img/products/headphone/headphone1.jpeg",
        cost: "$550"
    },
    {
        name: "Headphone 2",
        trending: "0",
        special: "1",
        feature: "1",
        img: "./img/products/headphone/headphone2.jpeg",
        cost: "$550"
    },
    {
        name: "Headphone 3",
        trending: "0",
        special: "0",
        feature: "1",
        img: "./img/products/headphone/headphone3.jpeg",
        cost: "$550"
    },
    {
        name: "Headphone 4",
        trending: "0",
        special: "0",
        feature: "0",
        img: "./img/products/headphone/headphone4.jpeg",
        cost: "$550"
    },
    {
        name: "Headphone 5",
        trending: "1",
        special: "0",
        feature: "0",
        img: "./img/products/headphone/headphone5.jpeg",
        cost: "$550"
    },
    {
        name: "Headphone 6",
        trending: "0",
        special: "0",
        feature: "0",
        img: "./img/products/headphone/headphone6.jpeg",
        cost: "$550"
    },
    {
        name: "Headphone 7",
        trending: "1",
        special: "0",
        feature: "1",
        img: "./img/products/headphone/headphone7.jpeg",
        cost: "$550"
    },
    {
        name: "Headphone 8",
        trending: "0",
        special: "0",
        feature: "0",
        img: "./img/products/headphone/headphone8.jpeg",
        cost: "$550"
    },
    {
        name: "Headphone 9",
        trending: "1",
        special: "1",
        feature: "1",
        img: "./img/products/headphone/headphone9.jpeg",
        cost: "$550"
    },
    {
        name: "Headphone 10",
        trending: "0",
        special: "1",
        feature: "0",
        img: "./img/products/headphone/headphone10.jpeg",
        cost: "$550"
    },
    {
        name: "Headphone 11",
        trending: "0",
        special: "1",
        feature: "1",
        img: "./img/products/headphone/headphone11.jpeg",
        cost: "$550"
    }
]

const htmls = productsList.map(product =>{
    return `
        <div class="product">
            <img src="${product.img}" alt="">
            <p>${product.name}</p>
            <div class="star">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
            </div>
            <span>${product.cost}</span>
            <button>ADD TO CART</button>
            <div class="quick-view">
                <div class="border">
                    <i class="fas fa-eye"></i>
                </div>
                <div class="border">
                    <i class="far fa-heart"></i>
                </div>
                <div class="border">
                    <i class="fas fa-redo"></i>
                </div>
            </div>
        </div>
    
    `
})
products.innerHTML = htmls.join('');

const trendingProduct = productsList.filter((product)=>product.trending==="1");
const htmlsTrending = trendingProduct.map(product =>{
    return `
        <div class="product">
            <img src="${product.img}" alt="">
            <p>${product.name}</p>
            <div class="star">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
            </div>
            <span>${product.cost}</span>
            <button>ADD TO CART</button>
            <div class="quick-view">
                <div class="border">
                    <i class="fas fa-eye"></i>
                </div>
                <div class="border">
                    <i class="far fa-heart"></i>
                </div>
                <div class="border">
                    <i class="fas fa-redo"></i>
                </div>
            </div>
        </div>
    
    `
})

const specialProduct = productsList.filter((product)=>product.special==="1");
const htmlsSpecial = specialProduct.map(product =>{
    return `
        <div class="product">
            <img src="${product.img}" alt="">
            <p>${product.name}</p>
            <div class="star">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
            </div>
            <span>${product.cost}</span>
            <button>ADD TO CART</button>
            <div class="quick-view">
                <div class="border">
                    <i class="fas fa-eye"></i>
                </div>
                <div class="border">
                    <i class="far fa-heart"></i>
                </div>
                <div class="border">
                    <i class="fas fa-redo"></i>
                </div>
            </div>
        </div>
    
    `
})

const featuredProduct = productsList.filter((product)=>product.feature==="1");
const htmlsFeatured = featuredProduct.map(product =>{
    return `
        <div class="product">
            <img src="${product.img}" alt="">
            <p>${product.name}</p>
            <div class="star">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
            </div>
            <span>${product.cost}</span>
            <button>ADD TO CART</button>
            <div class="quick-view">
                <div class="border">
                    <i class="fas fa-eye"></i>
                </div>
                <div class="border">
                    <i class="far fa-heart"></i>
                </div>
                <div class="border">
                    <i class="fas fa-redo"></i>
                </div>
            </div>
        </div>
    
    `
})

title[0].onclick = function(){
    this.style.opacity = "1";
    for(var j=0;j<title.length;j++){
        if(j===0){
            continue;
        }
        title[j].style.opacity ="0.6";
    }
    products.innerHTML = htmls.join('');
}

title[1].onclick = function(){
    this.style.opacity = "1";
    for(var j=0;j<title.length;j++){
        if(j===1){
            continue;
        }
        title[j].style.opacity ="0.6";
    }
    products.innerHTML = htmlsTrending.join('');
}

title[2].onclick = function(){
    this.style.opacity = "1";
    for(var j=0;j<title.length;j++){
        if(j===2){
            continue;
        }
        title[j].style.opacity ="0.6";
    }
    products.innerHTML = htmlsSpecial.join('');
}

title[3].onclick = function(){
    this.style.opacity = "1";
    for(var j=0;j<title.length;j++){
        if(j===3){
            continue;
        }
        title[j].style.opacity ="0.6";
    }
    products.innerHTML = htmlsFeatured.join('');
}


// const glide = document.querySelector('.glide')

const config ={
    type: 'carousel',
    startAt: 0,
    perView: 1,
    autoplay: 3000,
    animationDuration:800,
    animationTimingFunc:"linear",
    hoverpause : true
}
new Glide('.hero .glide',config).mount()
const config1 ={
    type: 'carousel',
    startAt: 0,
    perView: 4,
    // autoplay: 3000,
    rewin:false,
    animationDuration:800,
    animationTimingFunc:"linear",
    breakpoints: {
        768: {
            perView:2
        },
        568: {
            perView:1
        }
    }
}

new Glide('.latest .glide',config1).mount()

const config2 ={
    type: 'carousel',
    startAt: 0,
    perView: 1,
    // autoplay: 3000,
    rewin:false,
    animationDuration:800,
    animationTimingFunc:"linear",
    breakpoints: {
        768: {
            perView:1
        },
        568: {
            perView:1
        }
    }
}

new Glide('.quotes .glide',config2).mount()

const config3 ={
    type: 'carousel',
    startAt: 0,
    perView: 3,
    autoplay: 3000,
    rewin:false,
    animationDuration:800,
    animationTimingFunc:"linear",
    breakpoints: {
        768: {
            perView:2
        },
        568: {
            perView:1
        }
    }
}
new Glide('.phone-new .glide',config3).mount()

// aos
AOS.init();