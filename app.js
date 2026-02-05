const myButton = document.getElementById("add-ticket"); // get
const myContainer = document.querySelector("#ticket-container"); // query (les deux marchent)

// Gestion du clic
myButton.addEventListener('click', ()=> {
    let ticket = document.createElement("div"); // id aléatoire
    ticket.textContent ="Ticket (div)";
    ticket.setAttribute("id", "TK-" + Math.floor(Math.random()*999)); // prévoir vérif que ID = unique

    console.log("Ticket créé :", ticket.id); // debug id

    let delBtn = document.createElement("button"); // bouton supprimer
    delBtn.textContent = "x";
    delBtn.setAttribute("class","delete");

    //delBtn.addEventListener('click', ()=> {
    //    myContainer.removeChild(ticket);
    //}); // clic = child myContainer delBtn? o/n supprimer ticket

    ticket.appendChild(delBtn); // à chaque ticket
    myContainer.appendChild(ticket);  
    
    console.log("CLICK : Ajout"); // debug bouton
    console.log("Le ticket est créé?: ",myContainer.hasChildNodes()); // debug création div
});

// Noeud parent fera hériter son EventListener à ses enfants
myContainer.addEventListener('click', (event)=> {
    // debug : click, event.target, child
    console.log("CLICK : Suppression");
    if (event.target.className != "delete") {
        return;
    } // on vérifie (https://fr.javascript.info/event-delegation creuser ici)
    
    let delBtn = event.target;
    console.log("Element cliqué :\n", delBtn); // debug event
    // accès au premier enfant
    myContainer.removeChild(delBtn.parentNode);
    console.log("Enfant sélectionné :", event.target.querySelector("button"));
    console.log("Type d'évènement :", event.type);

    // event.target = <div></> (ticket)
});