function heading() {
    let head = document.getElementById("heading");
    let h1 = document.createElement("h2");
    let p = document.createElement("p");
    h1.innerText = "Men's Fashion & Designer Products"
    p.innerText = "Shop men's fashion with price comparison across 500+ stores in one place. Discover the latest designer fashion for men at ModeSens."
    head.append(h1, p);
  }
  
  heading();

  const getData=async()=>{
    try{
      let res=await fetch ("https://fakestoreapi.com/products");
      let data= await res.json();
      console.log(data)
      Products(data)
    
    }catch(err){
      console.log(err)
    }
    }
    
    getData()
    
    let cartitem=JSON.parse(localStorage.getItem("cartpage"))||[];  
    
    function Products(data){
      let maindiv=document.createElement("div");
      data.forEach(function (ele){    
      
      let div=document.createElement("div");
      let name=document.createElement("h2");
        name.innerText=ele.title;
      let image=document.createElement("img");
      image.src=ele.image;
      let prodDesc=document.createElement("p");
      prodDesc.innerText=ele.description;
      let price=document.createElement("h3");
      price.innerText=ele.price;
      let btn=document.createElement("button");
      btn.innerText="Add to cart";
        
      div.append(image,name,prodDesc,price,btn)
      btn.addEventListener("click",function(){
        cartitem.push(ele)
        localStorage.setItem("cartpage",JSON.stringify(cartitem));
      })
      maindiv.append(div)
      document.querySelector("#product").append(maindiv) 
      });

    }
