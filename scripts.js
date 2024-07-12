 // Définir la date cible (par exemple, le 1er janvier 2025 à minuit)
 const targetDate = new Date('January 1, 2025 00:00:00').getTime();

 // Fonction de mise à jour du compte à rebours
 function updateCountdown() {
     const now = new Date().getTime();
     const timeLeft = targetDate - now;

     if (timeLeft >= 0) {
         // Calculer les jours, heures, minutes et secondes restants
         const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
         const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
         const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
         const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

         // Mettre à jour les éléments du DOM
         document.getElementById('days').textContent = days;
         document.getElementById('hours').textContent = hours;
         document.getElementById('minutes').textContent = minutes;
         document.getElementById('seconds').textContent = seconds;
     } else {
         // Si la date cible est atteinte, afficher un message ou arrêter le compte à rebours
         document.querySelector('.countdown').textContent = 'The event has started!';
     }
 }

 // Mettre à jour le compte à rebours toutes les secondes
 setInterval(updateCountdown, 1000);

 // Appeler la fonction immédiatement pour afficher le compte à rebours initialement
 updateCountdown();



 // Observer pour détecter quand les éléments sont visibles à l'écran
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
});

// Sélectionner tous les éléments à animer
const elements = document.querySelectorAll('.animate-on-scroll');

// Observer chaque élément
elements.forEach(element => {
    observer.observe(element);
});

/*whatsapp*/
function openWhatsApp() {
    window.open('https://wa.me/53040263', '_blank');
    // Here you can add the functionality to open the chatbot window or modal
}
