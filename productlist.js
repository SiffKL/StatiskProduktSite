fetch("https://kea-alt-del.dk/t7/api/products")
  .then((res) => res.json())
  //.then((data) => showProducts(data));
  //samme som
  .then(showProducts);

function showProducts(products) {
  //looper og kalder swhoProduct
  //products.forEach((product) => showProduct(product));
  //samme som
  products.forEach(showProduct);
}

function showProduct(product) {
  console.log(product);
  //fange template
  const template = document.querySelector("#smallProductTemplate").content;
  //lav en kopi
  const copy = template.cloneNode(true);
  //ændre indhold
  copy.querySelector("h2").textContent = product.productdisplayname;
  //udsolgt produkt
  if (product.soldout) {
    copy.querySelector("section").classList.add("overlay");
  }
  //ændre brandname
  copy.querySelector(".brandname").textContent = "Brand: " + product.brandname;
  //ændre gender
  copy.querySelector(".gender").textContent = "Gender: " + product.gender;
  //ændre price
  copy.querySelector(".price").textContent = product.price + " DKK";
  //hvis udsalg
  if (product.discount) {
    copy.querySelector("section").classList.add(".sale");
    copy.querySelector(".salep").textContent = "-" + product.discount + "%";
  }
  //skift billede ???
  copy.querySelector(
    ".zindex0"
  ).src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;

  //appende hvor den skal være i DOM
  document.querySelector("main").appendChild(copy);
}

// <section class="bluetshirt">
// <div class="fleximg">
//   <div class="sale"><p class="salep">-58 %</p></div>
//   <img
//     class="zindex0"
//     src="https://kea-alt-del.dk/t7/images/webp/1000/1164.webp"
//     alt="Jersey"
//   />
//   <h2>Blue T20 Indian Cricket Jersey</h2>
// </div>

// <div>
//   <h3>Product information</h3>
//   <p>NOW 945 DKK</p>
//   <p class="prevprice">1.595 DKK</p>

//   <div class=""></div>
//   <p>Brand name: Nike</p>
//   <p>Gender: Men</p>
// </div>

/*
articletype: "Tshirts"
​
brandname: "Nike"
​
category: "Apparel"
​
discount: 45
​
gender: "Men"
​
id: 1165
​
price: 2495
​
productdisplayname: "Mean Team India Cricket Jersey"
​
productionyear: 2013
​
season: "Summer"
​
soldout: 0
​
subcategory: "Topwear"
​
usagetype: "Sports"
*/
