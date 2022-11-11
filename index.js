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
