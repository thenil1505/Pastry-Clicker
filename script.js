pastry_EL = document.querySelector("#pastry_img");
pastry_num_EL = document.querySelector("#pastry_num");
hand_EL = document.querySelector("#hand_img");
hand_num_EL = document.querySelector("#hand_num");
hand_price_EL = document.querySelector("#hand_price");

console.log(pastry_num_EL);

//Pastries
pastry = 0;
cakes = 0;
biscuits = 0;
pies = 0;
bread = 0;
cupcakes = 0;

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
function buy_hand(){
    if (pastry >= hands_price){
        hands++;
        pastry -= hands_price;
        hands_price += 50;
        hand_num_EL.innerHTML = hands;
        hand_price_EL.innerHTML = hands_price;
    }
    
}

pastry_EL.addEventListener("click", pastry_click); // når vi klikker på pastry
hand_EL.addEventListener("click", buy_hand)


var timer = setInterval(myTimer, 60); // kjører funksjonen myTimer 1 gang i sekundet
function myTimer(){ 
    pastry += hands;
    pastry_num_EL.innerHTML = pastry;
    
    
}