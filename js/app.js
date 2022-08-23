const cartArray = [];


function display(cartplayer) {

    console.log(cartplayer);
    const tableBody = document.getElementById("players-cart");
    tableBody.innerHTML = '';



    for (let i = 0; i < 5; i++) {


        // console.log(cartArray[i].playerName,);
        const name = cartArray[i].playerName;

        const tr = document.createElement("tr");

        tr.innerHTML = `
        <th class = "pl-20 text-white">${i + 1}. </th>
        <td class = text-white>${name}</td>
        `;

        tableBody.appendChild(tr);


    }


}


document.getElementById("clicked").addEventListener('click', function () {
    alert("You can clicked only 5 cart");
})






function addToCart(element) {

    element.style.backgroundColor = "tomato"
    element.style.border = "none"
    element.style.color = "white"
    element.innerText = 'SELECTED'
    element.setAttribute('disabled', true)



    const playerName = element.parentNode.parentNode.children[1].innerText;


    const playerObj = {
        playerName: playerName,
    }

    cartArray.push(playerObj);

    console.log(cartArray.length);

    display(cartArray);
}



document.getElementById("per-player-calculate-ammount").addEventListener('click', function () {

    const ammountField = document.getElementById('player-ammount');
    const newPerPlayerAmount = ammountField.value;

    const PlayerAmount = parseFloat(newPerPlayerAmount);

    const ammountTotalElement = document.getElementById("per-player-total");
    const ammountTotal = ammountTotalElement.innerText;
    ammountTotalElement.innerText = newPerPlayerAmount;

})


document.getElementById("calculate-total-ammount").addEventListener('click', function () {

    const ammountTotalElement = document.getElementById("per-player-total");
    const ammountTotal = ammountTotalElement.innerText;
    const perAmmount = parseFloat(ammountTotal);


    const ammountField = document.getElementById('manager-ammount');
    const previousPerManagerAmount = ammountField.value;
    const managerAmount = parseFloat(previousPerManagerAmount);

    const coachAmmountField = document.getElementById('coach-ammount');
    const perPlayerAmount = coachAmmountField.value;
    const coachAmmount = parseFloat(perPlayerAmount);

    const fullTotalAmmount = perAmmount + managerAmount + coachAmmount;


    const coachAmmountTotalElement = document.getElementById('per-total-ammount');
    coachAmmountTotalElement.innerText = fullTotalAmmount;

    // console.log(fullTotalAmmount);


})







