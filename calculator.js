function calculateTrade(){

  let capital = Number(document.getElementById("capital").value);
  let riskPercent = Number(document.getElementById("riskPercent").value);

  let entry = Number(document.getElementById("entry").value);
  let stoploss = Number(document.getElementById("stopLoss").value);
  let target = Number(document.getElementById("target").value);


  if(!capital || !riskPercent || !entry || !stopLoss || !target){

    alert("Please fill all details");

    return;
  }


  // Maximum money risk

  let riskAmount = capital * riskPercent / 100;


  // Risk per share

  let riskPerShare = entry - stopLoss;


  // Reward per share

  let rewardPerShare = target - entry;


  // Total reward

  let rewardAmount = rewardPerShare * (riskAmount / riskPerShare);



  // Risk Reward Ratio

  let ratio = rewardPerShare / riskPerShare;



  // Maximum quantity

  let quantity = Math.floor(riskAmount / riskPerShare);



  document.getElementById("riskAmount").innerHTML =
  "Risk Amount: ₹" + riskAmount.toFixed(2);


  document.getElementById("rewardAmount").innerHTML =
  "Reward Amount: ₹" + rewardAmount.toFixed(2);


  document.getElementById("ratio").innerHTML =
  "Risk Reward Ratio: 1:" + ratio.toFixed(2);


  document.getElementById("quantity").innerHTML =
  "Maximum Quantity: " + quantity + " shares";


}
