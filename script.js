function calculateTip() {
    var bill = document.getElementById("billVal").value;
    var service = document.getElementById("tipVal").value;
    var people = document.getElementById("peopleVal").value;
    if ( bill<0 ) {
        document.getElementById("billVal").value=0.00;
        alert("Please enter a valid bill amount.");
        return;
    }
    var tip = bill * (service / 100.0)/ people;
    var tota = (bill / people) + tip;
    document.getElementById("tip").innerHTML ="₹"+ tip.toFixed(2);
    document.getElementById("total").innerHTML ="₹"+ tota.toFixed(2);
}
function decreaseTip() {
    var tip = document.getElementById("tipVal").value;
    if ( tip < 1 ) {
        document.getElementById("tipVal").value=0;
        alert("Please enter a valid tip percentage.");
        return;
    }
    tip = tip * 1 - 1;
    document.getElementById("tipVal").value = tip;
    calculateTip();
}

function increaseTip() {
    var tip = document.getElementById("tipVal").value;
    if ( tip < 0 ) {
        document.getElementById("tipVal").value=0;
        alert("Please enter a valid tip percentage.");
        return;
    }
    tip = tip * 1 + 1;
    document.getElementById("tipVal").value = tip;
    calculateTip();
}

function decreasePeoples() {
    var people = document.getElementById("peopleVal").value;
    if ( people < 2 ) {
        document.getElementById("peopleVal").value=1;
        alert("Please enter a valid number of people.");
        return;
    }
    people = people * 1 - 1;
    document.getElementById("peopleVal").value = people;
    calculateTip();
}

function increasePeoples() {
    var people = document.getElementById("peopleVal").value;
    if ( people < 1 ) {
        document.getElementById("peopleVal").value=1;
        alert("Please enter a valid number of people.");
        return;
    }
    people = people * 1 + 1;
    document.getElementById("peopleVal").value = people;
    calculateTip();
}

document.addEventListener("DOMContentLoaded", function() {
    
    document.getElementById("tb1").addEventListener("click", decreaseTip);
    document.getElementById("tb2").addEventListener("click", increaseTip);
    document.getElementById("pb1").addEventListener("click", decreasePeoples);
    document.getElementById("pb2").addEventListener("click", increasePeoples);
}); 
