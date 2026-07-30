// =====================================
// TradeLogicHub Premium Risk Reward Calculator
// =====================================


function calculateRiskReward(){


    let entry = Number(document.getElementById("entryPrice").value);
    let stop = Number(document.getElementById("stopLoss").value);
    let target = Number(document.getElementById("targetPrice").value);
    let quantity = Number(document.getElementById("quantity").value);



    if(entry <= 0 || stop <= 0 || target <= 0 || quantity <= 0){

        alert("Please enter all trade details");

        return;

    }



    // Calculate Risk & Reward

    let riskPerShare = Math.abs(entry - stop);

    let rewardPerShare = Math.abs(target - entry);



    let totalRisk = riskPerShare * quantity;

    let totalReward = rewardPerShare * quantity;



    // Risk Reward Ratio

    let ratio = totalReward / totalRisk;



    // Display Result


    document.getElementById("riskAmount").innerHTML =
    "₹" + totalRisk.toFixed(2);



    document.getElementById("rewardAmount").innerHTML =
    "₹" + totalReward.toFixed(2);



    document.getElementById("rrRatio").innerHTML =
    "1 : " + ratio.toFixed(2);

// Risk Reward Meter Update

let maxValue = Math.max(totalRisk, totalReward);


let riskWidth = (totalRisk / maxValue) * 100;

let rewardWidth = (totalReward / maxValue) * 100;



document.getElementById("riskBar").style.width =
riskWidth + "%";


document.getElementById("rewardBar").style.width =
rewardWidth + "%";



document.getElementById("riskMeterValue").innerHTML =
"₹" + totalRisk.toFixed(2);



document.getElementById("rewardMeterValue").innerHTML =
"₹" + totalReward.toFixed(2);



document.getElementById("meterRatio").innerHTML =
"1 : " + ratio.toFixed(2);




    // Trade Quality


    let status = document.getElementById("tradeStatus");



    if(ratio < 1){

        status.innerHTML = "Poor";

        status.style.color = "#dc2626";

    }


    else if(ratio >= 1 && ratio < 2){

        status.innerHTML = "Average";

        status.style.color = "#f59e0b";

    }


    else if(ratio >= 2 && ratio < 3){

        status.innerHTML = "Good";

        status.style.color = "#2563eb";

    }


    else{

        status.innerHTML = "Excellent";

        status.style.color = "#16a34a";

    }



}






// =====================================
// Capital Risk Calculator
// =====================================

function calculateCapitalRisk(){


    let capital = Number(document.getElementById("capitalAmount").value);

    let riskPercent = Number(document.getElementById("riskPercent").value);



    if(capital <= 0 || riskPercent <= 0){

        alert("Please enter valid capital and risk percentage");

        return;

    }



    // Maximum risk amount

    let maxRisk = (capital * riskPercent) / 100;



    // Safe position value

    let safePosition = capital - maxRisk;



    document.getElementById("maxRisk").innerHTML =
    "₹" + maxRisk.toFixed(2);



    document.getElementById("safePosition").innerHTML =
    "₹" + safePosition.toFixed(2);



}

// =====================================
// Position Size Calculator
// =====================================

function calculatePositionSize(){


    let riskAmount = Number(document.getElementById("riskAmountInput").value);

    let entryPrice = Number(document.getElementById("positionEntry").value);

    let stopPrice = Number(document.getElementById("positionStop").value);



    if(riskAmount <= 0 || entryPrice <= 0 || stopPrice <= 0){

        alert("Please enter valid details");

        return;

    }



    // Risk per share

    let riskPerShare = Math.abs(entryPrice - stopPrice);



    // Maximum quantity

    let maxQuantity = Math.floor(riskAmount / riskPerShare);



    // Total position value

    let positionValue = maxQuantity * entryPrice;



    // Display results


    document.getElementById("riskPerShare").innerHTML =
    "₹" + riskPerShare.toFixed(2);



    document.getElementById("maxQuantity").innerHTML =
    maxQuantity;



    document.getElementById("positionValue").innerHTML =
    "₹" + positionValue.toFixed(2);



}
