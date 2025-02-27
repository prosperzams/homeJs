document.getElementById("addOfferForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Empêcher le rechargement de la page

    // Récupérer les valeurs du formulaire
    const companyName = document.querySelector("input[placeholder='Nom de la compagnie']").value;
    const jobTitle = document.querySelector("input[placeholder='Titre du poste']").value;
    const jobDescription = document.querySelector("textarea[placeholder='Laissez une description du poste']").value;
    const contact = document.querySelector("input[placeholder='Votre contact']").value;

    // Validation des champs
    if (!companyName || !jobTitle || !jobDescription || !contact) {
        let message = "Tous les champs sont requis.";
        if (!companyName) message = "Le nom de la compagnie est requis.";
        else if (!jobTitle) message = "Le titre du poste est requis.";
        else if (!jobDescription) message = "La description du poste est requise.";
        else if (!contact) message = "Le contact est requis.";
        showAlert(message, "danger");
        return;
    }

    // Créer l'objet de l'offre
    const jobOffer = {
        companyName: companyName,
        jobTitle: jobTitle,
        jobDescription: jobDescription,
        contact: contact,
        image: "/images/default-job.jpg"  // Image par défaut pour l'offre
    };

    // Récupérer les offres existantes dans le localStorage
    let jobOffers = [];
    try {
        jobOffers = JSON.parse(localStorage.getItem("jobOffers")) || [];
    } catch (error) {
        showAlert("Une erreur est survenue lors de la récupération des offres. Veuillez réessayer.", "danger");
        return;
    }

    // Ajouter la nouvelle offre
    jobOffers.push(jobOffer);

    // Sauvegarder les offres dans le localStorage
    try {
        localStorage.setItem("jobOffers", JSON.stringify(jobOffers));
    } catch (error) {
        showAlert("Une erreur est survenue lors de l'enregistrement des offres. Veuillez réessayer.", "danger");
        return;
    }

    // Réinitialiser le formulaire
    document.getElementById("addOfferForm").reset();

    // Afficher l'alerte de succès
    showAlert("L'offre a été ajoutée avec succès !", "success");
});

// Fonction pour afficher l'alerte Bootstrap
function showAlert(message, type) {
    const alertContainer = document.getElementById("alert-container");

    // Créer l'élément de l'alerte
    const alertElement = document.createElement("div");
    alertElement.classList.add("alert", `alert-${type}`, "alert-dismissible", "fade", "show");
    alertElement.setAttribute("role", "alert");
    alertElement.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    `;

    // Ajouter l'alerte au conteneur
    alertContainer.appendChild(alertElement);

    // Fermer l'alerte après 5 secondes
    setTimeout(() => {
        alertElement.classList.remove("show");
    }, 5000);
}
