let arr = ["https://modesens.com/banner/13927/getimg/?img=%2Fbanner%2F20221107-modesens-Double11-1140x400-EN_1667706245.jpg",
    "https://modesens.com/banner/13917/getimg/?img=%2Fbanner%2F20221107-modesens-Italist-1140x400-F-EN.jpg",
    "https://modesens.com/banner/13985/getimg/?img=%2Fbanner%2F20221108-modesens-FurTrim-1140x400-F_1667875747.jpg",
    "https://modesens.com/banner/13975/getimg/?img=%2Fbanner%2F20221107-modesens-lululemon-1140x400-F_1667788631.jpg",

];

function carousel() {
    let image = document.createElement("img");
    let i = 0;
    if (i == 0) {
        image.src = arr[i]
        document.querySelector("#slide").append(image)
    }

    i++;
    setInterval(function (){
        if (i == 0) {
            image.src = arr[0];
            document.querySelector("#slide").append(image);
        }
        if (i == 1) {
            image.src = arr[1];
            document.querySelector("#slide").append(image);
        }
        if (i == 2) {
            image.src = arr[2];
            document.querySelector("#slide").append(image);
        }
        if (i == 3) {
            image.src = arr[3];
            document.querySelector("#slide").append(image);
        }
        i++;
        if (i == 4) {
            i = 0;
        }
    }, 3000)
}

carousel();

    

let heading1 = document.createElement("h1");
heading1.innerText = "Featured Partners"
document.querySelector("#brandName").append(heading1);

let heading2 = document.createElement("p");
heading2.innerText = "Compare across our 500+ partner stores to find the products you want at the best price.";
document.querySelector("#brandName").append(heading2);


let brandnamearr1 = ["https://cdn.modesens.com/banner/20211014-GUCCI-logo.png", "https://cdn.modesens.com/banner/20211014-PRADA-logo.png",
    "https://cdn.modesens.com/banner/20211014-SAINT-LAURENT-logo.png", "https://cdn.modesens.com/banner/20211014-BOTTEGA-VENETA-logo.png",
    "https://cdn.modesens.com/banner/20211014-BURBERRY-logo.png",
    "https://cdn.modesens.com/banner/20211014-VERSACE-logo.png",
    "https://cdn.modesens.com/banner/20211014-BALENCIAGA-logo.png",
    "https://cdn.modesens.com/banner/20211014-GIVENCHY-logo.png",
    "https://cdn.modesens.com/banner/20211014-LOEWE-logo.png",
    "https://cdn.modesens.com/banner/20211014-OFF-WHITE-logo.png"]

let brandnamearr2 = ["https://cdn.modesens.com/banner/20220708-BLUEMERCURY-logo.png",
    "https://cdn.modesens.com/merchant/woolrich__logo.jpg?w=400",
    "https://cdn.modesens.com/merchant/visualmood-logo.png?w=400",
    "https://cdn.modesens.com/banner/20220708-MONTBLANC-logo.png",
    "https://cdn.modesens.com/banner/20220708-DR-MARTENS-logo.png",
    "https://cdn.modesens.com/banner/20220708-NOBLEMARS-logo.png",
    "https://cdn.modesens.com/banner/20220708-ERNO-LASZLO-logo.png",
    "https://cdn.modesens.com/banner/20220708-D1MILANO-logo.png",
    "https://cdn.modesens.com/banner/20220708-LAPOINTE-logo.png",
    "https://cdn.modesens.com/banner/20220708-MONNALISA-logo.png"]

let brandnamearr3 = ["https://cdn.modesens.com/banner/20220708-SSENSE-logo.png",
    "https://cdn.modesens.com/banner/20220708-NET-A-PORTER-logo.png",
    "https://cdn.modesens.com/banner/20220708-FARFETCH-logo.png",
    "https://cdn.modesens.com/banner/20220708-NORDSTROM-logo.png",
    "https://cdn.modesens.com/banner/20220708-MATCHESFASHION-logo.png",
    "https://cdn.modesens.com/banner/20220708-MYTHERESA-logo.png",
    "https://cdn.modesens.com/banner/20220708-SHOPBOP-logo.png",
    "https://cdn.modesens.com/banner/20220708-ITALIST-logo.png",
    "https://cdn.modesens.com/banner/20220708-CETTIRE-logo.png",
    "https://cdn.modesens.com/banner/20220708-LUISAVIAROMA-logo.png"]


function carousel1() {
    let div1 = document.createElement("div");
    let image1 = document.createElement("img");
    let image2 = document.createElement("img");
    let image3 = document.createElement("img");
    let image4 = document.createElement("img");
    let image5 = document.createElement("img");
    let image6 = document.createElement("img");
    let image7 = document.createElement("img");
    let image8 = document.createElement("img");
    let image9 = document.createElement("img");
    let image10 = document.createElement("img");
    div1.append(image1, image2, image3, image4, image5, image6, image7, image7, image8, image9, image10)
    document.querySelector("#brandName").append(div1);
    let i = 0;
    if (i == 0) {
        image1.src = brandnamearr1[0]
        image2.src = brandnamearr1[1]
        image3.src = brandnamearr1[2]
        image4.src = brandnamearr1[3]
        image5.src = brandnamearr1[4]
        image6.src = brandnamearr1[5]
        image7.src = brandnamearr1[6]
        image8.src = brandnamearr1[7]
        image9.src = brandnamearr1[8]
        image10.src = brandnamearr1[9]
    }
    i++;
    setInterval(function () {
        if (i == 0) {
            image1.src = brandnamearr1[0]
            image2.src = brandnamearr1[1]
            image3.src = brandnamearr1[2]
            image4.src = brandnamearr1[3]
            image5.src = brandnamearr1[4]
            image6.src = brandnamearr1[5]
            image7.src = brandnamearr1[6]
            image8.src = brandnamearr1[7]
            image9.src = brandnamearr1[8]
            image10.src = brandnamearr1[9]
        }
        if (i == 1) {
            image1.src = brandnamearr2[0]
            image2.src = brandnamearr2[1]
            image3.src = brandnamearr2[2]
            image4.src = brandnamearr2[3]
            image5.src = brandnamearr2[4]
            image6.src = brandnamearr2[5]
            image7.src = brandnamearr2[6]
            image8.src = brandnamearr2[7]
            image9.src = brandnamearr2[8]
            image10.src = brandnamearr2[9]
        }
        if (i == 2) {
            image1.src = brandnamearr3[0]
            image2.src = brandnamearr3[1]
            image3.src = brandnamearr3[2]
            image4.src = brandnamearr3[3]
            image5.src = brandnamearr3[4]
            image6.src = brandnamearr3[5]
            image7.src = brandnamearr3[6]
            image8.src = brandnamearr3[7]
            image9.src = brandnamearr3[8]
            image10.src = brandnamearr3[9]
        }
        i++
        if (i == 3) {
            i = 0;
        }
    }, 5000)

}
carousel1();

let heading3 = document.createElement("h1");
heading3.innerText = "Special Offers";
document.querySelector("#offer").append(heading3);

function community() {
    let div = document.createElement("div")
    let h1 = document.createElement("h1");
    h1.innerText = "Community Posts";
    div.append(h1);

    let div1 = document.createElement("div");
    let div2 = document.createElement("div");
    let img1 = document.createElement("img");
    img1.src = "https://cdn.modesens.com/umedia/1675265s?w=400";
    div2.append(img1)

    let div3 = document.createElement("div");
    let img2 = document.createElement("img");
    img2.src = "https://cdn.modesens.com/umedia/1678873s?w=400";
    div3.append(img2)

    let div4 = document.createElement("div");
    let img3 = document.createElement("img");
    img3.src = "https://cdn.modesens.com/umedia/1678893s?w=400";
    div4.append(img3)

    let div5 = document.createElement("div");
    let img4 = document.createElement("img");
    img4.src = "https://cdn.modesens.com/umedia/1676374s?w=400"
    div5.append(img4)

    let div6 = document.createElement("div");
    let btn = document.createElement("button")
    btn.innerText = "VIEW ALL";
    btn.addEventListener("click", function () {
        window.open("https://modesens.com/community/");
    })
    div6.append(btn);

    div1.append(div2, div3, div4, div5);
    document.getElementById("communitypost").append(div, div1, div6);
}
community();

function trendNow() {
    let maindiv1 = document.createElement("div");
    let h1 = document.createElement("h1");
    h1.innerText = "Trending Now";
    maindiv1.append(h1);

    let maindiv2 = document.createElement("div");
    let div1 = document.createElement("div");
    let img1 = document.createElement("img");
    img1.src = "https://cdn.modesens.com/product/24969443_44?w=400"
    let h2 = document.createElement("h3");
    h2.innerText = "JW ANDERSON";
    let p1 = document.createElement("p");
    p1.innerText = "Chain-embellished Leather Slides In";
    let h3 = document.createElement("h3");
    h3.innerText = "$253 (50% OFF) -$595";
    let p2 = document.createElement("p")
    p2.innerText = "Compare 12 stores";

    let div2 = document.createElement("div");
    let img2 = document.createElement("img");
    img2.src = "https://cdn.modesens.com/availability/54374604?w=400"
    let h4 = document.createElement("h3");
    h4.innerText = "ETRO";
    let p3 = document.createElement("p");
    p3.innerText = "Embroidered Striped Wool-blend Poncho";
    let h5 = document.createElement("h3");
    h5.innerText = "$465 (38% OFF) -$1380";
    let p4 = document.createElement("p")
    p4.innerText = "Compare 19 stores"

    let div3 = document.createElement("div");
    let img3 = document.createElement("img");
    img3.src = "https://cdn.modesens.com/product/17815153_42?w=400"
    let h6 = document.createElement("h3");
    h6.innerText = "MM6 MAISON MARGIELA";
    let p5 = document.createElement("p");
    p5.innerText = "Women's Pleated Faux Leather Midi-skirt";
    let h7 = document.createElement("h3");
    h7.innerText = "$322 (41% OFF) -$605";
    let p6 = document.createElement("p")
    p6.innerText = "Compare 0 stores";

    let div4 = document.createElement("div");
    let img4 = document.createElement("img");
    img4.src = "https://cdn.modesens.com/product/45454045_6?w=400"
    let h8 = document.createElement("h3");
    h8.innerText = "ETRO";
    let p7 = document.createElement("p");
    p7.innerText = "Comet Floral-jacquard Wool-blend";
    let h9 = document.createElement("h3");
    h9.innerText = "$1093 (26% OFF) -$2780";
    let p8 = document.createElement("p")
    p8.innerText = "Compare 16 stores";

    div1.append(img1, h2, p1, h3, p2);
    div2.append(img2, h4, p3, h5, p4);
    div3.append(img3, h6, p5, h7, p6);
    div4.append(img4, h8, p7, h9, p8);
    maindiv2.append(div1,div2,div3,div4);

    let maindiv3 = document.createElement("div");
    let btn = document.createElement("button");
    btn.innerText = "SHOP MORE";
    btn.addEventListener("click",function(){
        window.open="https://modesens.com/shop-women/";
    })
    maindiv3.append(btn);


    document.querySelector("#trendingNow").append(maindiv1, maindiv2, maindiv3)

}

trendNow();

let offerarr = ["https://cdn.modesens.com/availability/56726207?w=400", "https://cdn.modesens.com/availability/57094864?w=400", "https://assets.bombas.com/image/fetch/c_fit,h_1518,w_1012/b_rgb:FFFFFF,c_scale,w_720/f_auto,q_auto/https://images.ctfassets.net/82yv1oo3vsdy/4tlSSfML4eeDLDhwAEbMl7/daae5e09809990f80a45fad9f0d8f303/Kids_YouthMerino.jpg", "https://data.bernardellistores.com/images/galleries/46782/ezgif-3-79cb86e3e6.jpg", "https://www.wallis.co.uk/dw/image/v2/BFCZ_PRD/on/demandware.static/-/Library-Sites-wallis-content-global/default/dwf82b05f0/images/global/megamenu/_Top%20Navigation%20Image%20RefreshSUMMER_web.jpg?sw=448&q=65", "https://media.vogue.co.uk/photos/5e690a90948e4d0008f62220/2:3/w_1280,c_limit/UK%20train%20travel%20default.jpg"]

function SpecialOffer() {
    let div = document.createElement("div");


    let div1 = document.createElement("div")
    let offimg1 = document.createElement("img");
    let hding1 = document.createElement("h2");
    let p1 = document.createElement("p");
    let btn1 = document.createElement("button");
    div1.append(offimg1, hding1, p1, btn1);

    let div2 = document.createElement("div")
    let offimg2 = document.createElement("img");
    let hding2 = document.createElement("h2");
    let p2 = document.createElement("p");
    let btn2 = document.createElement("button");
    div2.append(offimg2, hding2, p2, btn2);

    let div3 = document.createElement("div")
    let offimg3 = document.createElement("img");
    let hding3 = document.createElement("h2");
    let p3 = document.createElement("p");
    let btn3 = document.createElement("button");
    div3.append(offimg3, hding3, p3, btn3);

    div.append(div1, div2, div3)
    document.querySelector("#offer").append(div);

    let i = 0;
    if (i == 0) {
        offimg1.src = offerarr[0]
        offimg2.src = offerarr[1]
        offimg3.src = offerarr[2]
        hding1.innerText = "Super-Cool Capsules"
        hding2.innerText = "Step into Holidays with Bomas"
        hding3.innerText = "Intoducing 2022"
        p1.innerText = "Bernardelli"
        p2.innerText = "20% Off with code Modesens";
        p3.innerText = "Blog by TORY BURCH"
        btn1.innerText = "Shop Now"
        btn1.addEventListener("click", function () {
            window.open("https://www.bernardellistores.com/en/women-new-arrival?utm_source=rakuten&utm_medium=affiliate&utm_campaign=3261841&utm_content=10&ranMID=49199&ranEAID=z1KL9yrNyf4&ranSiteID=z1KL9yrNyf4-UbtwaKA7D7wL.oZhUboq7A#modesens=1");
        })
        btn2.innerText = "Shop Now"
        btn2.addEventListener("click", function () {
            window.open("https://bombas.com/pages/holiday-gift-guide?utm_source=pepperjam&utm_medium=affiliate&utm_campaign=171498&utm_content=8-11047&clickId=4164045182&utm_term=cf_acq-bt_core-cp_mixed-ca_core#modesens=1")
        })
        btn3.innerText = "Shop Now"
        btn3.addEventListener("click", function () {
            window.open("https://modesens.com/list/modesens-sky-high-platforms-4303279/?refinfo=u2")
        })
    }
    i++;
    setInterval(function () {
        if (i == 0) {
            offimg1.src = offerarr[0]
            offimg2.src = offerarr[1]
            offimg3.src = offerarr[2]
            hding1.innerText = "Super-Cool Capsules"
            hding2.innerText = "Step into Holidays with Bomas"
            hding3.innerText = "Intoducing 2022"
            p1.innerText = "Bernardelli"
            p2.innerText = "20% Off with code Modesens";
            p3.innerText = "Blog by TORY BURCH"
            btn1.innerText = "Shop Now"
            btn1.addEventListener("click", function () {
                window.open("https://www.bernardellistores.com/en/women-new-arrival?utm_source=rakuten&utm_medium=affiliate&utm_campaign=3261841&utm_content=10&ranMID=49199&ranEAID=z1KL9yrNyf4&ranSiteID=z1KL9yrNyf4-UbtwaKA7D7wL.oZhUboq7A#modesens=1");
            })
            btn2.innerText = "Shop Now"
            btn2.addEventListener("click", function () {
                window.open("https://bombas.com/pages/holiday-gift-guide?utm_source=pepperjam&utm_medium=affiliate&utm_campaign=171498&utm_content=8-11047&clickId=4164045182&utm_term=cf_acq-bt_core-cp_mixed-ca_core#modesens=1")
            })
            btn3.innerText = "Shop Now"
            btn3.addEventListener("click", function () {
                window.open("https://modesens.com/list/modesens-sky-high-platforms-4303279/?refinfo=u2")
            })
        }
        if (i == 1) {
            offimg1.src = offerarr[3]
            offimg2.src = offerarr[4]
            offimg3.src = offerarr[5]
            hding1.innerText = "Super-Cool Capsules"
            hding2.innerText = "OMG!So Fresh!"
            hding3.innerText = "Intoducing 2022"
            p1.innerText = "Bernardelli"
            p2.innerText = "Shop New to Sale Now"
            p3.innerText = "Blog by TORY BURCH"
            btn1.innerText = "Shop Now"
            btn1.addEventListener("click", function () {
                window.open("https://modesens.com/shop-women-clothing/?refinfo=u2&subcategory=knitwear");
            })
            btn2.innerText = "Shop Now"
            btn2.addEventListener("click", function () {
                window.open("https://modesens.com/shop-women-sale/?orderby=-betterprice_time")
            })
            btn3.innerText = "Shop Now"
            btn3.addEventListener("click", function () {
                window.open("https://modesens.com/shop-women-clothing/?refinfo=u2&subcategory=knitwear")
            })
        }
        i++;
        if (i == 2) {
            i = 0;
        }
    }, 5000)
}

SpecialOffer();
