document.addEventListener("DOMContentLoaded", function() {
    const jobList = document.getElementById("job-list");

    // Récupérer les offres stockées dans le localStorage
    const jobOffers = JSON.parse(localStorage.getItem("jobOffers")) || [];

    // Vérifier s'il y a des offres
    if (jobOffers.length > 0) {
        // Afficher les offres dans la page
        jobOffers.forEach(function(offer) {
            const offerCard = document.createElement("div");
            offerCard.classList.add("card");

            offerCard.innerHTML = `
                <img src="/images/recrute.jpeg" class="card-img-top" alt="Image de l'offre">
                <div class="card-body bg-success">
                    <h5 class="card-title">${offer.jobTitle}</h5>
                    <p class="card-text"><strong>Compagnie:</strong> ${offer.companyName}</p>
                    <p class="card-text"><strong>Description:</strong> ${offer.jobDescription}</p>
                    <p class="card-text"><strong>Contact:</strong> ${offer.contact}</p>
                    <button class="btn btn-warning apply-btn w-100" data-bs-toggle="modal" data-bs-target="#applyModal" data-job-title="${offer.jobTitle}" data-job-description="${offer.jobDescription}">Postuler</button>
                </div>
            `;

            jobList.appendChild(offerCard);
        });
    } else {
        jobList.innerHTML = "<div class='container justify-content-center text-center'><p>Aucune offre disponible pour le moment.</p></div>";
    }

    // Gestion du bouton "Postuler" : ouverture du modal de postulation
    document.querySelectorAll(".apply-btn").forEach(btn => {
        btn.addEventListener("click", function(e) {
            e.preventDefault();

            // Récupérer les données de l'offre
            const jobTitle = this.getAttribute("data-job-title");

            // Remplir le modal de postulation avec le titre du job
            document.getElementById("apply-job-title").value = jobTitle;
        });
    });

});
