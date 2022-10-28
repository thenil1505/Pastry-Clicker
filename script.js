pastry_EL = document.querySelector("#pastry_img");
pastry_num_EL = document.querySelector("#pastry_num");

hand_EL = document.querySelector("#hand_img");
hand_num_EL = document.querySelector("#hand_num");
hand_price_EL = document.querySelector("#hand_price");

cookie_buy = document.querySelector("#biscuit_price")
cookie_EL = document.querySelector("#choccy_img");

pie_buy = document.querySelector("#pie_price")
pie_EL = document.querySelector("#shopie_img");

bread_buy = document.querySelector("#bread_price")
bread_EL = document.querySelector("#bred_img");

cuppy_buy = document.querySelector("#cupcake_price")
cupcake_EL = document.querySelector("#cuppy_img")

bakery_EL = document.querySelector("#bakery");
bakery_num_EL = document.querySelector("#bakery_num");

//Pastries
pastry = 0;

biscuits = 1;
pies = 1;
bread = 1;
cupcakes = 1;

//Upgrades
hands = 0;

//Buildings
bakeries = 0;
cafes = 0;
decorators =0;
chefs = 0;
packers = 0;
delivery = 0;
customers = 0;

//Prices
hands_price = 50;
bakery_price = 250;
cafe_price = 1000;
decor_price = 5050;
chef_price = 15000;
packer_price = 20000;
deliver_price = 40500;
custom_price = 70000;


function pastry_click(){
    pastry++;
}

function click_cookie(){
    biscuits++;
}

function buy_cookie(){
    if (pastry >= biscuit_price){
        pastry -= biscuit_price;
    }
}

function click_pie(){
    pies++;
}

function buy_pie(){
    if (pastry >= pie_price){
        pastry -= pie_price;
    }
}

function click_bread(){
    bread++;
}

function buy_bread(){
    if (pastry >= bread_price){
        pastry -= bread_price;
    }
}

function click_cupcake(){
    cupcakes++;
}

function buy_cuppy(){
    if (pastry >= cupcake_price){
        pastry -= cupcake_price;
    }
}

function buy_hand(){
    if (pastry >= hands_price){
        hands++;
        pastry -= hands_price;
        hands_price += 50;
        hand_num_EL.innerHTML = hands;
        hand_price_EL.innerHTML = hands_price;
    } 
}

function buy_bake(){
    if (pastry >= bakery_price){
        bakeries++;
        pastry -= bakery_price;
        bakery_num_EL.innerHTML = bakeries;
        bakery_EL.innerHTML += "<img src='photos pastry/bakery.jpg' class='shop_bake_img' alt=''></img>";
   }
}

pastry_EL.addEventListener("click", pastry_click); // når vi klikker på pastry

cookie_buy.addEventListener("click", buy_cookie)
cookie_EL.addEventListener("click", click_cookie)

pie_buy.addEventListener("click", buy_pie)
pie_EL.addEventListener("click", click_pie)

bread_buy.addEventListener("click", buy_bread)
bread_EL.addEventListener("click", click_bread)

cuppy_buy.addEventListener("click", buy_cuppy)
cupcake_EL.addEventListener("click", click_cupcake)

hand_EL.addEventListener("click", buy_hand)

bakery_EL.addEventListener("click", buy_bake)


var timer = setInterval(myTimer, 60); // kjører funksjonen myTimer 1 gang i sekundet
function myTimer(){ 
    pastry += hands;
    pastry += bakeries;
    pastry_num_EL.innerHTML = pastry;
    

}