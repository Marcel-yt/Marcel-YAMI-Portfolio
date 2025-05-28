document.addEventListener('DOMContentLoaded', function() {
    const scrollLeft = document.querySelector('.scroll-left');
    const scrollRight = document.querySelector('.scroll-right');

    // Clone les éléments pour un défilement infini
    if (scrollLeft) {
        const content = scrollLeft.innerHTML;
        scrollLeft.innerHTML = content + content;
    }

    if (scrollRight) {
        const content = scrollRight.innerHTML;
        scrollRight.innerHTML = content + content;
    }

    // Pause l'animation au survol
    const containers = document.querySelectorAll('.scroll-container');
    containers.forEach(container => {
        container.addEventListener('mouseenter', function() {
            const slider = this.children[0];
            slider.style.animationPlayState = 'paused';
        });

        container.addEventListener('mouseleave', function() {
            const slider = this.children[0];
            slider.style.animationPlayState = 'running';
        });
    });
});

// Flitre


document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projects = document.querySelectorAll('.project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Retirer la classe active de tous les boutons
            filterButtons.forEach(btn => btn.classList.remove('bg-[#007bff]', 'text-white'));
            
            // Ajouter la classe active au bouton cliqué
            button.classList.add('bg-[#007bff]', 'text-white');
            
            const filterValue = button.getAttribute('data-filter');
            
            projects.forEach(project => {
                if (filterValue === 'all') {
                    project.style.display = 'block';
                } else {
                    if (project.getAttribute('data-category') === filterValue) {
                        project.style.display = 'block';
                    } else {
                        project.style.display = 'none';
                    }
                }
            });
        });
    });
});



// ... Formulaire de contact ...

// Vérifier si le formulaire a été soumis
window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('submitted') === 'true') {
        // Créer et afficher le message de succès
        const successMessage = document.createElement('div');
        successMessage.className = 'fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg';
        successMessage.textContent = 'Message envoyé avec succès !';
        document.body.appendChild(successMessage);

        // Faire disparaître le message après 3 secondes
        setTimeout(() => {
            successMessage.style.transition = 'opacity 0.5s ease-out';
            successMessage.style.opacity = '0';
            setTimeout(() => successMessage.remove(), 500);
        }, 3000);

        // Nettoyer l'URL
        window.history.replaceState({}, document.title, window.location.pathname + '#contact');
    }
};

// Message de confirmation d'envoie du formulaire
document.addEventListener('DOMContentLoaded', function() {
    // Vérifier si l'URL contient le paramètre submitted=true
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('submitted') === 'true') {
        // Afficher le message de succès
        const successMessage = document.getElementById('success-message');
        if (successMessage) {
            successMessage.classList.remove('hidden');
            // Masquer le message après 5 secondes
            setTimeout(() => {
                successMessage.classList.add('hidden');
            }, 5000);
        }
    }
});