document.getElementById("addProfile").addEventListener("submit", function(event) {
    event.preventDefault(); // Empêcher le rechargement de la page

    const nom = document.getElementById("nom").value;
    const competences = document.getElementById("competences").value;
    const experience = document.getElementById("experience").value;
    const contact = document.getElementById("contact").value;

    let isValid = true;
    // Réinitialiser les messages d'erreur
    document.querySelector(".errorNom").innerHTML = '';
    document.querySelector(".errorComp").innerHTML = '';
    document.querySelector(".errorExp").innerHTML = '';
    document.querySelector(".errorCont").innerHTML = '';

    // Validation des champs
    if (nom.trim() === "") {
        document.querySelector(".errorNom").innerHTML = "Le nom est requis.";
        isValid = false;
    }
    if (competences.trim() === "") {
        document.querySelector(".errorComp").innerHTML = "Les compétences sont requises.";
        isValid = false;
    }
    if (experience.trim() === "") {
        document.querySelector(".errorExp").innerHTML = "L'expérience est requise.";
        isValid = false;
    }
    if (contact.trim() === "") {
        document.querySelector(".errorCont").innerHTML = "L'email est requis.";
        isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(contact)) {
        document.querySelector(".errorCont").innerHTML = "Veuillez entrer un email valide.";
        isValid = false;
    }

    if (isValid) {
        const profile = {
            nom: nom,
            competences: competences,
            experience: experience,
            contact: contact
        };

        const storedProfiles = JSON.parse(localStorage.getItem("jobProfiles")) || [];

        if (this.dataset.editIndex) {
            // Modification du profil existant
            const editIndex = this.dataset.editIndex;
            storedProfiles[editIndex] = profile;

            // Créer une alerte de succès pour la modification
            displayAlert("Profil modifié avec succès!", "success");
        } else {
            // Ajout d'un nouveau profil
            storedProfiles.push(profile);

            // Créer une alerte de succès pour l'ajout
            displayAlert("Profil ajouté avec succès!", "success");
        }

        // Sauvegarder les profils dans le localStorage
        localStorage.setItem("jobProfiles", JSON.stringify(storedProfiles));
        
        // Réinitialiser le formulaire et effacer les erreurs visibles
        document.getElementById("addProfile").reset();
        delete this.dataset.editIndex; // Supprimer l'index de modification pour revenir à l'ajout

        // Recharger la page pour afficher les données mises à jour
        window.location.reload();
    }
});

// Fonction pour afficher une alerte Bootstrap
function displayAlert(message, type) {
    const alertContainer = document.getElementById("alert-container");

    const alert = document.createElement("div");
    alert.classList.add("alert", `alert-${type}`, "alert-dismissible", "fade", "show");
    alert.role = "alert";
    alert.innerHTML = `${message}<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>`;

    alertContainer.appendChild(alert);

    // Optionnel : Supprimer l'alerte après quelques secondes
    setTimeout(() => {
        alert.remove();
    }, 5000);
}
