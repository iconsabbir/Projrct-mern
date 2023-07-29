
let cartIcon = document.querySelector("#card-icon");
let card = document.querySelector(".cart");
let cardRemove = document.querySelector("#close-bar");


cartIcon.onclick = () =>{
    card.classList.add("active");
};
cardRemove.onclick = () =>{
    card.classList.remove("active");
};


// Cart js

if(document.readyState == "loading"){
    document.addEventListener("DOMContentLoaded", ready);

}else{
    ready();
}


// Function making


function ready(){
    var removeCartButtons = document.getElementsByClassName("cart-remove");
    // console.log(removeCartButtons);
    // var removeCartButtons = document.getElementsByClassName("cart-remove")
    for (var i = 0; i < removeCartButtons.length; i++) {
        var button = removeCartButtons[i];
        button.addEventListener('click', removeCartItem);
    }
    var quntityInputs = document.getElementsByClassName("cart-quntaty")
    for (var i = 0; i < quntityInputs.length; i++){
        var input = quntityInputs[i];
        input.addEventListener("change", quntityChanged);
    }
    var addCart = document.getElementsByClassName("add-card");
    for (var i = 0; i < addCart.length; i++){
        var button = addCart[i];
        button.addEventListener("click", addClicked);
    }


}
function removeCartItem(event){
    var buttonClicked = event.target
    buttonClicked.parentElement.remove();
    updatetotal();
}

function quntityChanged(event) {
    var input = event.target;
    if(isNaN(input.value) || input.value <= 0){
        input.value = 1;
    }
    updatetotal();
}

function addClicked(event){
    var button = event.target;
    var shopProdects = button.parentElement;
    var title = shopProdects.getElementsByClassName("products-title")[0].innerText;
    var price = shopProdects.getElementsByClassName("price")[0].innerText;
    var prodectImg = shopProdects.getElementsByClassName("product-img")[0].src;
    addProdectCart(title,price,prodectImg);
    updatetotal();
}
function addProdectCart(title,price,prodectImg) {
    var cartShopBox = document.createElement("div");
    cartShopBox.classList.add("cart-box");
    var cartItems = document.getElementsByClassName("cart-contend")[0];
    var cartItemsNames = cartItems.getElementsByClassName("cart-product-titel");
    for (var i = 0; i < cartItemsNames.length; i++){
    if(cartItemsNames[i].innerText == title){
        alert("You have alredy add this item");
        return;
    }
    

    }
    var cartBoxContent = `
                <img src="${prodectImg}" alt="" class="cart-img">
                 <div class="cart-detels">
                 <div class="cart-product-titel">${title}</div>
                 <div class="cart-price">${price}</div>
                 <input type="number" min="1" value="1" class="cart-quntaty">
                </div>
                <!-- remove item -->
                <i class="fas fa-trash cart-remove"></i> `;


cartShopBox .innerHTML = cartBoxContent;
cartItems.append(cartShopBox);
cartShopBox.getElementsByClassName("cart-remove")[0].addEventListener("click", removeCartItem);
cartShopBox.getElementsByClassName("cart-quntaty")[0].addEventListener("change", quntityChanged);

}



// total price

function updatetotal(){
    var cartcontent = document.getElementsByClassName("cart-contend")[0];
    var cartBoxs = cartcontent.getElementsByClassName("cart-box");
    var total = 0;
    for (var i = 0; i < cartBoxs.length; i++){
       var cartBox = cartBoxs[i];
       var priceElement = cartBox.getElementsByClassName("cart-price")[0];
       var querytityElement = cartBox.getElementsByClassName("cart-quntaty")[0];

       var price = parseFloat(priceElement.innerText.replace("$", ""));
        var querytity = querytityElement.value;
        total += (price * querytity);


        total = Math.round(total * 100) /100;
        document.getElementsByClassName("total-price")[0].innerText = "$" + total;


        
    }
}