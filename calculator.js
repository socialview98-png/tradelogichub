function calculateTrade() {

    const capital = parseFloat(document.getElementById("capital").value);
    const riskPercent = parseFloat(document.getElementById("riskPercent").value);

    const entry = parseFloat(document.getElementById("entry").value);
    const stopLoss = parseFloat(document.getElementById("stopLoss").value);
    const target = parseFloat(document.getElementById("target").value);

    const tradeType =
        document.querySelector('input[name="tradeType"]:checked').value;

    if (
        isNaN(capital) ||
        isNaN(riskPercent) ||
        isNaN(entry) ||
        isNaN(stopLoss) ||
        isNaN(target)
    ) {

        alert("Please fill all fields.");

        return;
    }

    if (capital <= 0 || riskPercent <= 0) {

        alert("Capital and Risk % must be greater than zero.");

        return;
    }

    let riskPerShare;
    let rewardPerShare;

    if (tradeType === "buy") {

        riskPerShare = entry - stopLoss;
        rewardPerShare = target - entry;

    } else {

        riskPerShare = stopLoss - entry;
        rewardPerShare = entry - target;

    }

    if (riskPerShare <= 0 || rewardPerShare <= 0) {

        alert("Please enter valid Entry, Stop Loss and Target values.");

        return;
    }

    const riskAmount = capital * riskPercent / 100;

    const quantity = Math.floor(riskAmount / riskPerShare);

    const rewardAmount = quantity * rewardPerShare;

    const ratio = rewardPerShare / riskPerShare;

    const winRate = 100 / (ratio + 1);

    let rating = "";
    let color = "";

    if (ratio >= 3) {

        rating = "Excellent ⭐⭐⭐⭐⭐";
        color = "green";

    } else if (ratio >= 2) {

        rating = "Good ⭐⭐⭐⭐";
        color = "#2563eb";

    } else if (ratio >= 1.5) {

        rating = "Average ⭐⭐⭐";
        color = "orange";

    } else {

        rating = "Poor ⭐";
        color = "red";

    }

    document.getElementById("riskAmount").innerHTML =
        "Risk Amount : ₹" + riskAmount.toFixed(2);

    document.getElementById("rewardAmount").innerHTML =
        "Reward Amount : ₹" + rewardAmount.toFixed(2);

    document.getElementById("ratio").innerHTML =
        "Risk Reward Ratio : 1 : " + ratio.toFixed(2);

    document.getElementById("quantity").innerHTML =
        "Maximum Quantity : " + quantity + " Shares";

    document.getElementById("winRate").innerHTML =
        "Required Win Rate : " + winRate.toFixed(2) + "%";

    const ratingBox = document.getElementById("rating");

    ratingBox.innerHTML = "Trade Rating : " + rating;

    ratingBox.style.color = color;
}
