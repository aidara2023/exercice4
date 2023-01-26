 const products =[
{
  id: 1,
  name : "Melange original 200g",
  price: 500,
},
{
  id: 2,
  name :"Melange original 500g",
  price:900 ,
},
{
  id: 3,
  name :"Melange special 200g",
  price: 700,
},
{
  id: 4,
  name :"Melange special 500g",
  price: 1200,
},
]
const priceElement = document.getElementById("product");
const numberElement = document.getElementById("number");
let purchases = [];

function add() {
  const targetId = parseInt(priceElement.value);
  const product = products.find(item => item.id == targetId);
  const number = numberElement.value;

  let purchase = {
    product: product,
    number: parseInt(number),
  };

  const newPurchase = purchases.findIndex((item) => item.product.id === purchase.product.id)
  if (purchases.length < 1 || newPurchase === -1) {
    purchases.push(purchase)
  } else {
    purchases[newPurchase].number += purchase.number
  }

  window.alert(`${display()}\n Le sous total est :${subtotal()}yens`);
  priceElement.value = "";
  numberElement.value = "";
}
function display() {
  return purchases.map(purchase => {
    return `${purchase.product.name} ${purchase.product.price}yens:${purchase.number}produits\n`;
  }).join("")
};

function subtotal() {
    return purchases.reduce((prev, purchase) => {
      return prev + purchase.product.price * purchase.number;
    }, 0)
  }

  function calc() {
    const sum = subtotal();
    const postage = calcPostageFromPurchase(sum);
    window.alert(`${display()}\nLe sous total est:${sum}yens\nles frais d'expeditions sont:${postage}yens\n le total est${sum + postage}yens`);
    purchases = [];
    priceElement.value = "";
    numberElement.value = "";
  }

function calcPostageFromPurchase(sum) {
  if (sum == 0 || sum >= 3000) {
    return 0;
  } else if (sum < 2000){
   return 500;
  } else {
   return 250;
  }
}