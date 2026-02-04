const myButton = document.getElementById("add-ticket"); // get
const myContainer = document.querySelector("#ticket-container"); // query (les deux marchent)

// Gestion du clic
myButton.addEventListener('click', ()=> {
    let ticket = document.createElement("div"); // id aléatoire
    ticket.innerHTML ="je suis une div";
    ticket.setAttribute("id", "TK-" + Math.floor(Math.random()*999)); // prévoir vérif que ID = unique
    console.log(ticket.id); // debug id
    myContainer.appendChild(ticket);  
    console.log("CLICK1"); // debug bouton
    console.log(myContainer.hasChildNodes()); // debug création div
});