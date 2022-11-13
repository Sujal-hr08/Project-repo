// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json))


function heading() {
  let head = document.getElementById("heading");
  let h1 = document.createElement("h2");
  let p = document.createElement("p");
  h1.innerText = "Designer Beauty"
  p.innerText = "Shop designer beauty with price comparison across 500+ stores in one place. Discover the latest designer beauty at ModeSens."
  head.append(h1, p);
}

heading();

const getData=async()=>{
try{
  let res=await fetch ("http://makeup-api.herokuapp.com/api/v1/products.json?brand=covergirl&product_type=eyeliner");
  let data= await res.json();
  console.log(data)
  Products(data)

}catch(err){
  console.log(err)
}
}

getData()

function Products(data){
  let maindiv=document.createElement("div");
  data.forEach(function (ele){    
    
  let div=document.createElement("div");
  let name=document.createElement("h2");
    name.innerText=ele.name;
  let image=document.createElement("img");
  image.src=ele.image_link;
  let prodDesc=document.createElement("p");
  prodDesc.innerText=ele.category
  let price=document.createElement("h3");
  price.innerText=ele.price;
  let btn=document.createElement("button");
  btn.innerText="Add to cart"
  btn.addEventListener(function(){
    localStorage.setItem("name",JSON.stringify(name));
    localStorage.setItem("name",JSON.stringify(image));
    localStorage.setItem("name",JSON.stringify(prodDesc));
    localStorage.setItem("name",JSON.stringify(price));
  })
  div.append(image,name,prodDesc,price,btn)
  maindiv.append(div)
  document.querySelector("#product").append(maindiv) 

  });
  
  
}
