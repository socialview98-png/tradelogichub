function calculateRR(){

let entry = Number(document.getElementById("entry").value);
let stop = Number(document.getElementById("stoploss").value);
let target = Number(document.getElementById("target").value);
let quantity = Number(document.getElementById("quantity").value);


let risk = entry - stop;
let reward = target - entry;


let riskAmount = risk * quantity;
let rewardAmount = reward * quantity;


let ratio = reward / risk;


document.getElementById("risk").innerHTML =
"Risk Per Share: $" + risk.toFixed(2);


document.getElementById("reward").innerHTML =
"Reward Per Share: $" + reward.toFixed(2);


document.getElementById("ratio").innerHTML =
"Risk Reward Ratio: 1 : " + ratio.toFixed(2);


document.getElementById("amount").innerHTML =
"Risk Amount: $" + riskAmount.toFixed(2) +
"<br>Reward Amount: $" + rewardAmount.toFixed(2);

}
