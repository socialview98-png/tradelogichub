function premiumRR(){

let entry = Number(document.getElementById("entry").value);
let stop = Number(document.getElementById("stop").value);
let target = Number(document.getElementById("target").value);
let quantity = Number(document.getElementById("quantity").value);


let riskPerShare = entry - stop;
let rewardPerShare = target - entry;


let riskAmount = riskPerShare * quantity;
let rewardAmount = rewardPerShare * quantity;


let ratio = rewardAmount / riskAmount;


document.getElementById("riskAmount").innerHTML =
"$" + riskAmount.toFixed(2);


document.getElementById("rewardAmount").innerHTML =
"$" + rewardAmount.toFixed(2);


document.getElementById("ratio").innerHTML =
"1 : " + ratio.toFixed(2);



let quality="";


if(ratio >= 3){

quality="Excellent Setup ⭐⭐⭐";

}
else if(ratio >= 2){

quality="Good Setup ⭐⭐";

}
else{

quality="Low Risk Reward Setup";

}


document.getElementById("quality").innerHTML=quality;


}
