window.onload = function() {
    const storedProfiles = JSON.parse(localStorage.getItem("jobProfiles")) || [];
    const editIndex = parseInt(localStorage.getItem('editIndex'), 10); // Récupérer l'index du profil à modifier et le convertir en entier

    let profileContent = "";

    if (storedProfiles.length > 0) {
        // Afficher le titre si des profils existent
        profileContent += "";

        // Afficher les profils sauvegardés dans la section 'profilePreview'
        storedProfiles.forEach((profile, index) => {
            profileContent += `
                <div class="card profile-item shadow rounded p-0">
                    <img src="/images/recrute.jpeg" class="card-img-top profile-img" alt="Image de l'offre">
                    <div class="card-body profile-body bg-success">
                        <h5 class="card-title">${profile.nom}</h5>
                        <p class="card-text"><strong>Compagnie:</strong> ${profile.competences}</p>
                        <p class="card-text"><strong>Description:</strong> ${profile.experience}</p>
                        <p class="card-text"><strong>Contact:</strong> ${profile.contact}</p>
                        <button class="btn btn-warning" onclick="editProfile(${index})">Modifier</button>
                        <button class="btn btn-danger" onclick="deleteProfile(${index})">Supprimer</button>
                    </div>
                </div>
            `;
        });
    } else {
        profileContent = `
        <p class='text-center line-start' style="font-size: 18px; color: #888;">
            <span style="font-size: 36px;">😔</span> Aucun profil disponible. <span style="font-size: 36px;">😔</span> <br>
        </p>
    `;
    }

    document.getElementById("profilePreview").innerHTML = profileContent;

    if (editIndex !== null && editIndex !== undefined) {
        const profile = storedProfiles[editIndex];
        document.getElementById("nom").value = profile.nom;
        document.getElementById("competences").value = profile.competences;
        document.getElementById("experience").value = profile.experience;
        document.getElementById("contact").value = profile.contact;
    }
};


// Fonction pour supprimer un profil
function deleteProfile(index) {
    const storedProfiles = JSON.parse(localStorage.getItem("jobProfiles")) || [];
    storedProfiles.splice(index, 1); // Supprimer le profil à l'index spécifié
    localStorage.setItem("jobProfiles", JSON.stringify(storedProfiles)); // Sauvegarder les modifications
    window.location.reload(); // Recharger la page pour afficher les données mises à jour
}

// Fonction pour éditer un profil existant
function editProfile(index) {
    const storedProfiles = JSON.parse(localStorage.getItem("jobProfiles")) || [];
    const profile = storedProfiles[index];
    
    // Pré-remplir le formulaire avec les données actuelles
    document.getElementById("nom").value = profile.nom;
    document.getElementById("competences").value = profile.competences;
    document.getElementById("experience").value = profile.experience;
    document.getElementById("contact").value = profile.contact;

    // Mettre à jour l'index de modification dans le dataset
    document.getElementById("addProfile").dataset.editIndex = index;
}
