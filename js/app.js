const cartArray = [];

function display(cartplayer) {

    console.log(cartplayer);
    const tableBody = document.getElementById("players-cart");
    tableBody.innerHTML = '';

    for (let i = 0; i < cartplayer.length; i++) {

        // console.log(cartArray[i].playerName,);
        const name = cartArray[i].playerName;

        const tr = document.createElement("tr");

        tr.innerHTML = `
        <th>${i + 1.}</th>
        <td>${name}</td>
        `;

        tableBody.appendChild(tr);
    }
}




function addToCart(element) {

    const playerName = element.parentNode.parentNode.children[1].innerText;
    // console.log(playerName);

    const playerObj = {
        playerName: playerName,
    }

    cartArray.push(playerObj);


    console.log(cartArray);

    console.log(cartArray.length);

    display(cartArray);
}









