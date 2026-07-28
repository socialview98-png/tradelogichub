// =====================================
// TradeLogicHub Premium Risk Reward Calculator
// =====================================


function calculateRiskReward(){


    const entry = Number(document.getElementById("entryPrice").value);
    const stop = Number(document.getElementById("stopLoss").value);
    const target = Number(document.getElementById("targetPrice").value);
    const quantity = Number(document.getElementById("quantity").value);



    if(entry <= 0 || stop <= 0 || target <= 0 || quantity <= 0){

        alert("Please enter valid trade details");

        return;

    }



    // Calculate per share risk & reward

    let riskPerShare = Math.abs(entry - stop);

    let rewardPerShare = Math.abs(target - entry);



    // Total trade amount

    let totalRisk = riskPerShare * quantity;

    let totalReward = rewardPerShare * quantity;



    // Risk Reward Ratio

    let ratio = totalReward / totalRisk;




    // Display Results


    document.getElementById("riskAmount").innerHTML =
    "₹" + totalRisk.toFixed(2);



    document.getElementById("rewardAmount").innerHTML =
    "₹" + totalReward.toFixed(2);



    document.getElementById("rrRatio").innerHTML =
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
