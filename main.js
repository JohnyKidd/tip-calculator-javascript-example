function calculateTip (){
    if (document.getElementById("billInput").value == "" || document.getElementById("guestInput").value == "" || document.getElementById("qualityLevel").value == ""){
        alert("Add an amount, a number of guests and select a quality level, please!")
    }
    else{
        const bill = document.getElementById("billInput")
        const guestNumber = document.getElementById("guestInput")
        const quality = document.getElementById("qualityLevel")

        alert("The tip is "+(bill.value*quality.value)/guestNumber.value+"$ each.")
    }
}

document.getElementById("submitButton").addEventListener("click", ()=>{
    calculateTip()
})