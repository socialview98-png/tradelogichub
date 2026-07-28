// ===== Premium Risk Reward Calculator =====


function calculateRiskReward(){


    let entry = Number(document.getElementById("entryPrice").value);
    let stop = Number(document.getElementById("stopLoss").value);
    let target = Number(document.getElementById("targetPrice").value);
    let quantity = Number(document.getElementById("quantity").value);



    if(!entry || !stop || !target || !quantity){

        alert("Please fill all fields");

        return;

    }



    // Risk & Reward per share

    let riskPerShare = Math.abs(entry - stop);

    let rewardPerShare = Math.abs(target - entry);



    // Total amount

    let totalRisk = riskPerShare * quantity;

    let totalReward = rewardPerShare * quantity;



    // Risk Reward Ratio

    let ratio = totalReward / totalRisk;



    let rrText = "1:" + ratio.toFixed(2);



    // Display Results


    document.getElementById("riskAmount").innerHTML =
    "$" + totalRisk.toFixed(2);



    document.getElementById("rewardAmount").innerHTML =
    "$" + totalReward.toFixed(2);



    document.getElementById("rrRatio").innerHTML =
    rrText;



    // Trade Quality


    let status = document.getElementById("tradeStatus");


    if(ratio < 1){

        status.innerHTML = "Poor";

        status.style.color = "red";

    }

    else if(ratio >= 1 && ratio < 2){

        status.innerHTML = "Average";

        status.style.color = "orange";

    }

    else if(ratio >= 2){

        status.innerHTML = "Excellent";

        status.style.color = "green";

    }



}
