const myButton = document.getElementById("add-ticket"); // get
const myContainer = document.querySelector("#ticket-container"); // query (les deux marchent)

// Gestion du clic
myButton.addEventListener('click', ()=> {
    let ticket = document.createElement("div"); // id aléatoire
    ticket.textContent ="Ticket (div)";
    ticket.setAttribute("id", "TK-" + Math.floor(Math.random()*999)); // prévoir vérif que ID = unique
    console.log(ticket.id); // debug id

    let delBtn = document.createElement("button"); // bouton supprimer
    delBtn.textContent = "x";

    //delBtn.addEventListener('click', ()=> {
    //    myContainer.removeChild(ticket);
    //}); // clic = child myContainer delBtn? o/n supprimer ticket

    ticket.appendChild(delBtn); // à chaque ticket
    myContainer.appendChild(ticket);  
    
    console.log("CLICK"); // debug bouton
    console.log(myContainer.hasChildNodes()); // debug création div
});

// Noeud parent fera hériter son EventListener à ses enfants
myContainer.addEventListener('click', (event)=> {
    let ticket = event.target;
    console.log(ticket); // debug event
    // accès au premier enfant
    console.log(ticket.children[0]);
    myContainer.removeChild(ticket);
    // event.target = <div></> (ticket)
});