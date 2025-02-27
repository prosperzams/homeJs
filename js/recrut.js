document.addEventListener("DOMContentLoaded", function () {
    const jobs = [
        { title: "Développeur Web", email: "contact@devweb.com", location: "Paris", competences: "Expérience en React et Node.js.", image: "/images/dev-web.jpeg" },
        { title: "Designer UX/UI", email: "contact@designer.com", location: "Lyon", competences: "Maîtrise Figma et Adobe XD.", image: "/images/designer.jpeg" },
        { title: "Data Analyst", email: "contact@bigdata.com", location: "Marseille", competences: "Analyse de données avec Python et SQL.", image: "/images/data-analyst.jpeg" },
        { title: "Chef de projet IT", email: "contact@innovatech.com", location: "Toulouse", competences: "Gestion de projets Agile.", image: "/images/chef-projet.jpeg" },
        { title: "Ingénieur Cloud", email: "contact@cloudsolutions.com", location: "Bordeaux", competences: "AWS, Azure, Kubernetes.", image: "/images/cloud-engineer.jpeg" },
        { title: "Consultant SEO", email: "contact@webmarketing.com", location: "Nice", competences: "Optimisation SEO et stratégie digitale.", image: "/images/seo.jpeg" },
        { title: "Admin Réseau", email: "contact@cybersecurity.com", location: "Lille", competences: "Sécurisation des réseaux.", image: "/images/reseau.jpeg" },
        { title: "Dév Mobile", email: "contact@appmasters.com", location: "Strasbourg", competences: "Dév Android et iOS.", image: "/images/mobile-dev.jpeg" },
        { title: "Rédacteur Web", email: "contact@contentfactory.com", location: "Nantes", competences: "Rédaction SEO.", image: "/images/redacteur.jpg" }
    ];

    const jobContainer = document.getElementById("job-cards");
    const jobSelect = document.getElementById("job-select");
    const formContent = document.querySelector(".form-content");

    jobs.forEach((job) => {
        const card = document.createElement("div");
        card.className = "card shadow-sm";
        card.innerHTML = `
            <img src="${job.image}" class="card-img-top" alt="${job.title}">
            <div class="card-body">
                <h5 class="card-title text-center text-light">${job.title}</h5>
                <h6 class="card-subtitle mb-2 text-muted text-center">${job.email} - ${job.location}</h6>
                <p class="card-text text-center">${job.competences}</p>
                <a href="#" class="btn btn-light col-12 apply-btn" data-job-title="${job.title}">Contacter</a>
            </div>
        `;
        jobContainer.appendChild(card);
    });

});

function scrollJobCardsLeft() {
    document.getElementById("job-cards").scrollBy({ left: -300, behavior: 'smooth' });
}

function scrollRight() {
    document.getElementById("job-cards").scrollBy({ left: 300, behavior: 'smooth' });
}
