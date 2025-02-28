document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("form").addEventListener("submit", function (event) {
        event.preventDefault(); // Empêche le rechargement de la page
        
        // Récupérer les valeurs des champs
        let citation = document.getElementById("citation").value;
        let auteur = document.getElementById("auteur").value;
        
        // Afficher dans la console
        console.log("Citation :", citation);
        console.log("Auteur :", auteur);
    });
});