let counterElement = document.getElementById("counterValue");

function onIncrement(){
    let previousValue = counterElement.textContent;
    let updateCounterValue = parseInt(previousValue) + 1;
    counterElement.textContent = updateCounterValue;

    if(updateCounterValue>0){
        counterElement.style.color="green"
    }
    else if(updateCounterValue<0){
        counterElement.style.color="Red"
    }
    else{
        counterElement.style.color="black"
    }
}

function onDecrement(){
    let previousValue = counterElement.textContent;
    let updateCounterValue = parseInt(previousValue) - 1;
    counterElement.textContent = updateCounterValue;

    if(updateCounterValue>0){
        counterElement.style.color="green"
    }
    else if(updateCounterValue<0){
        counterElement.style.color="Red"
    }
    else{
        counterElement.style.color="black"
    }

}

function onReset(){
    let counterValue=0;
    counterElement.textContent=counterValue;
    counterElement.style.color="black"
}



