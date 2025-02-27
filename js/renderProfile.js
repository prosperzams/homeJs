// Fonction pour afficher les profils stockés dans le localStorage (Recrutement)
window.onload = function() {
    const storedProfiles = JSON.parse(localStorage.getItem("jobProfiles")) || [];
    const profileList = document.getElementById("profilePreview");

    // Vérifier si des profils existent
    if (storedProfiles.length > 0) {
        profileList.innerHTML = ''; // Réinitialiser la liste avant d'afficher les nouveaux profils

        storedProfiles.forEach(function(profile) {
            const profileCard = document.createElement("div");
            profileCard.classList.add("shadow-sm");

            profileCard.innerHTML = `
                <div class="card">
                    <img src="/images/univer.jpg" class="card-img-top" alt="Photo de profil">
                    <div class="card-body bg-success">
                        <h5 class="card-title">${profile.nom}</h5>
                        <p class="card-text"><strong>Compétences:</strong> ${profile.competences}</p>
                        <p class="card-text"><strong>Expérience:</strong> ${profile.experience}</p>
                        <p class="card-text"><strong>Email:</strong> ${profile.contact}</p>
                        <a href="mailto:${profile.contact}" class="btn btn-warning w-100">Contacter</a>
                    </div>
                </div>
            `;

            profileList.appendChild(profileCard);
        });
    } else {
        profileList.innerHTML = "<p class='empty'>Aucun profil trouvé.</p>";
    }
};
