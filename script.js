

function addQuote(quote, author) {
    // Création des éléments
    const quoteText = document.createElement("p");
    quoteText.className = "text";
    quoteText.textContent = `Citation : "${quote}"`;

    const quoteAuthor = document.createElement("p");
    quoteAuthor.className = "author";
    quoteAuthor.textContent = `Autrice/Auteur : ${author}`;

    const quoteDiv = document.createElement("div");
    quoteDiv.className = "quote";
    quoteDiv.appendChild(quoteText);
    quoteDiv.appendChild(quoteAuthor);

    // Ajout à la liste des citations
    const quoteList = document.getElementById("quote-list");
    quoteList.appendChild(quoteDiv);
}

// Gestionnaire d'événements du formulaire
document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const quoteInput = document.getElementById("quote");
    const authorInput = document.getElementById("author");

    if (quoteInput.value.trim() !== "" && authorInput.value.trim() !== "") {
        addQuote(quoteInput.value, authorInput.value);
        
        // Réinitialisation des champs
        quoteInput.value = "";
        authorInput.value = "";
    }
});

