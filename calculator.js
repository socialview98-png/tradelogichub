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

let lossPercent = (riskPerShare / entry) * 100;

let profitPercent = (rewardPerShare / entry) * 100;


document.getElementById("lossPercent").innerHTML =
"Maximum Loss: " + lossPercent.toFixed(2) + "%";


document.getElementById("profitPercent").innerHTML =
"Potential Profit: " + profitPercent.toFixed(2) + "%";



let riskWidth = 100 / (ratio + 1);
let rewardWidth = 100 - riskWidth;


document.getElementById("riskBar").style.width =
riskWidth + "%";


document.getElementById("rewardBar").style.width =
rewardWidth + "%";
