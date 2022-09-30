pastry_EL = document.querySelector("#pastry_img");
pastry_num_EL = document.querySelector("#pastry_num");
hand_EL = document.querySelector("#hand_img");
hand_num_EL = document.querySelector("#hand_num");

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
cafe_price = 550;
decor_price = 850;
chef_price = 1050;
packer_price = 2000;
deliver_price = 4500;
custom_price = 6000;


function pastry_click(){
    pastry++;
}
function buy_hand(){
    if (pastry > 50){
        hands++;
        pastry -= 50
        //hands_price += hands_price;
    }
    
}

pastry_EL.addEventListener("click", pastry_click); // når vi klikker på cookie
hand_EL.addEventListener("click", buy_hand)


var timer = setInterval(myTimer, 60); // kjører funksjonen myTimer 1 gang i sekundet
function myTimer(){ 
    pastry += hands;
    pastry_num_EL.innerHTML = pastry;
    hand_num_EL.innerHTML = hands;
    
}