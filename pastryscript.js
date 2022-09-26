pastry_EL = document.querySelector("#pastry");
pastry_num_EL = document.querySelector("#pastry_num");
hand_EL = document.querySelector("#hand_img");
hand_num_EL = document.querySelector("#hand_num");

console.log(pastry_num_EL);

pastries = 0;
clickers = 0;

function pastry_click (){
    pastry++;
}

function buy_hand(){
    if(pastry > 50){
        hands++;
        pastry -= 50;
    }
}


pastry_EL.addEventlistener("click", pastry_click); //Når vi klikker på pastry
hand_EL.addEventlistener("click", buy_hand)


var timer = setInterval(myTimer, 10); //Kjører funksjonen myTimer 1 gang i sekundet
function myTimer(){
    pastry += clickers;
    pastry_num_EL = pastry;
}