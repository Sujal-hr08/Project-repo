let arr = ["https://modesens.com/banner/13927/getimg/?img=%2Fbanner%2F20221107-modesens-Double11-1140x400-EN_1667706245.jpg",
    "https://modesens.com/banner/13917/getimg/?img=%2Fbanner%2F20221107-modesens-Italist-1140x400-F-EN.jpg",
    "https://modesens.com/banner/13985/getimg/?img=%2Fbanner%2F20221108-modesens-FurTrim-1140x400-F_1667875747.jpg",
    "https://modesens.com/banner/13975/getimg/?img=%2Fbanner%2F20221107-modesens-lululemon-1140x400-F_1667788631.jpg",

];

function carousel() {
    let silde = document.getElementById("slide");
    let i = 0;
    let image = document.createElement("img");
    if (i == 0) {
        image.src = arr[0];
        silde.append(image)
    }

    setInterval(function () {
        if (i == 0) {
            image.src = arr[i];
            silde.append(image)
        }
        if (i == 1) {
            image.src = arr[i];
            silde.append(image)
        }
        if (i == 2) {
            image.src = arr[i];
            silde.append(image)
        }
        if (i == 3) {
            image.src = arr[i];
            silde.append(image)
        }
        image.src = arr[i];
        silde.append(image);
        i++;
        console.log(i);
        if (i == 4) {
            i = 0;
        }
    }, 5000)

}
// carousel();

let heading1 = document.createElement("h1");
heading1.innerText = "Featured Partners"
document.querySelector("#brandName").append(heading1);

let heading2 = document.createElement("h2");
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
    }, 2000)

}
carousel1();

let offerarr = ["https://cdn.modesens.com/availability/56726207?w=400","https://cdn.modesens.com/availability/57094864?w=400","https://assets.bombas.com/image/fetch/c_fit,h_1518,w_1012/b_rgb:FFFFFF,c_scale,w_720/f_auto,q_auto/https://images.ctfassets.net/82yv1oo3vsdy/4tlSSfML4eeDLDhwAEbMl7/daae5e09809990f80a45fad9f0d8f303/Kids_YouthMerino.jpg","https://data.bernardellistores.com/images/galleries/46782/ezgif-3-79cb86e3e6.jpg","https://www.wallis.co.uk/dw/image/v2/BFCZ_PRD/on/demandware.static/-/Library-Sites-wallis-content-global/default/dwf82b05f0/images/global/megamenu/_Top%20Navigation%20Image%20RefreshSUMMER_web.jpg?sw=448&q=65","https://media.vogue.co.uk/photos/5e690a90948e4d0008f62220/2:3/w_1280,c_limit/UK%20train%20travel%20default.jpg"]

let heading3 = document.createElement("h1");
heading3.innerText = "Special Offers";
document.querySelector("#offer").append(heading3);

function community() {
    let div=document.createElement("div")
    let h1=document.createElement("h1");
    h1.innerText="Community Posts";
    div.append(h1);

    let div1=document.createElement("div");
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
    div6.append(btn);

    div1.append(div2,div3,div4,div5);
    document.getElementById("communitypost").append(div,div1,div6);
}
community();

function SpecialOffer() {
    let div=document.createElement("div");
    let offimg1=document.createElement("img");
    let offimg2=document.createElement("img");
    let offimg3=document.createElement("img");
    div.append(offimg1,offimg2,offimg3)
    document.querySelector("#offer").append(div);
    let i=0;
    if(i==0){
        offimg1.src=offerarr[0]
        offimg2.src=offerarr[1]
        offimg3.src=offerarr[2]
    }
    i++;
    setInterval(function(){
        if(i==0){
            offimg1.src=offerarr[0]
            offimg2.src=offerarr[1]
            offimg3.src=offerarr[2]
        }
        if(i==1){
            offimg1.src=offerarr[3]
            offimg2.src=offerarr[4]
            offimg3.src=offerarr[5]
        }
        i++;
        if(i==2){
            i=0;
        }
    },3000)
}

SpecialOffer();

