let txtExample = document.getElementById("txtExample")



function calcScores() {

    var stringVals = txtExample.value;

    let myArray = stringVals.split(",");

    let sum = 0;

    for(let i =0; i < myArray.length; i++) {
     sum += Number(myArray[i]);   
    }

    console.log(sum);
    let newEl = document.createElement("div");
    newEl.innerHTML = myArray[i].name;
    dvFound.appendChild(newEl);
}

