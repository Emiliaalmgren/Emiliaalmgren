//ID att använda sig av = "addToCartButton" "removeFromCartButton" "cartAmount"
let addToCart = document.getElementById("addToCartButton");
addToCart.addEventListener("click", AddCartFunction);

let removeFromCart = document.getElementById("removeFromCartButton");
removeFromCart.addEventListener("click", RemoveCartFunction);

let currentAmount = 0;


function AddCartFunction(){
  let numberCart = document.getElementById("cartAmount");

    currentAmount++;
    numberCart.setAttribute("value", currentAmount)
    numberCart.value = currentAmount;

    if (currentAmount <= 0){
      removeFromCart.style.display="none";
    }
    else{
      removeFromCart.style.display="inline";
    }
}


function RemoveCartFunction(){
  let numberCart = document.getElementById("cartAmount");
  
  if (currentAmount > 0)
    currentAmount--;
  numberCart.setAttribute("value", currentAmount);
  numberCart.value = currentAmount;

  if (currentAmount <= 0){
    removeFromCart.style.display="none";
  }
  else{
    removeFromCart.style.display="inline";
  }
}
