//create products and store on local storage

let wrapper = document.querySelector("[recentProducts ]");
let products = JSON.parse(localStorage.getItem("products"))
  ? JSON.parse(localStorage.getItem("products"))
  : localStorage.setItem(
      "products",
      JSON.stringify([
        {
          id: 1,
          product: "dell latitude",
          category: "laptop",
          description:
            "dell latitude e5450 i3 5th gen 1 for business. RAM: 8GB",
          amount: 20000,
          image_url:
            "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSJncxZlLcqrLGKCNqiDmppJXksg9LMCWPi0z9M1awpCnCUANXP-TF7x5sCMW2EnKvxkcTl5QP3Rw8HByk65OinJ21MBwCAOdWtxuVbQS8&usqp=CAc",
        },
        {
          id: 2,
          product: "dell latitude",
          category: "laptop",
          description:
            "dell latitude e5450 i3 5th gen 1 for business. RAM: 8GB",
          amount: 20000,
          image_url:
            "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSJncxZlLcqrLGKCNqiDmppJXksg9LMCWPi0z9M1awpCnCUANXP-TF7x5sCMW2EnKvxkcTl5QP3Rw8HByk65OinJ21MBwCAOdWtxuVbQS8&usqp=CAc",
        },
        {
          id: 3,
          product: "dell latitude",
          category: "laptop",
          description:
            "dell latitude e5450 i3 5th gen 1 for business. RAM: 8GB",
          amount: 20000,
          image_url:
            "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSJncxZlLcqrLGKCNqiDmppJXksg9LMCWPi0z9M1awpCnCUANXP-TF7x5sCMW2EnKvxkcTl5QP3Rw8HByk65OinJ21MBwCAOdWtxuVbQS8&usqp=CAc",
        },
        {
          id: 4,
          product: "dell latitude",
          category: "laptop",
          description:
            "dell latitude e5450 i3 5th gen 1 for business. RAM: 8GB",
          amount: 20000,
          image_url:
            "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSJncxZlLcqrLGKCNqiDmppJXksg9LMCWPi0z9M1awpCnCUANXP-TF7x5sCMW2EnKvxkcTl5QP3Rw8HByk65OinJ21MBwCAOdWtxuVbQS8&usqp=CAc",
        },
        {
          id: 5,
          product: "dell latitude",
          category: "laptop",
          description:
            "dell latitude e5450 i3 5th gen 1 for business. RAM: 8GB",
          amount: 20000,
          image_url:
            "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSJncxZlLcqrLGKCNqiDmppJXksg9LMCWPi0z9M1awpCnCUANXP-TF7x5sCMW2EnKvxkcTl5QP3Rw8HByk65OinJ21MBwCAOdWtxuVbQS8&usqp=CAc",
        },
      ])
    );

function recentProducts() {
  let arrSize = products.length;
  let latestProducts = products.reverse().slice(0, arrSize >> 1);
  latestProducts.forEach((product) => {
    wrapper.innerHTML += `
    <div class="card" style="width: 18rem;">
    <img src="${product.image_url} class="card-img-top" alt="${product.productName}" loading= lazy>
    <div class="card-body">
      <h5 class="card-title"> ${product.productName}</h5>
      <p class="card-text">${product.description}</p> 
    </div>
  </div>`;
  });
}
recentProducts();
