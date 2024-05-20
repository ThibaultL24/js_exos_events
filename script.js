const footer = document.querySelector('footer');

let compteur = 1;

footer.addEventListener('click', function() {
    console.log(`clic n° ${compteur}`);
    compteur++;
});

const menuButton = document.querySelector('.navbar-toggler');

const navbarHeader = document.getElementById('navbarHeader');

menuButton.addEventListener('click', function() {
    navbarHeader.classList.toggle('collapse');
});

const firstCard = document.querySelector('.card');

const editButton = firstCard.querySelector('.btn-outline-secondary');

editButton.addEventListener('click', function() {
    firstCard.style.color = 'red';
});

const secondCard = document.querySelectorAll('.card')[1];

const editButtonSecondCard = secondCard.querySelector('.btn-outline-secondary');

editButtonSecondCard.addEventListener('click', function() {
    if (secondCard.style.color === 'green') {
        secondCard.style.color = '';
    } else {
        secondCard.style.color = 'green';
    }
});

const navbar = document.querySelector('.navbar');
let bootstrapDisabled = false;

navbar.addEventListener('dblclick', function() {
    const bootstrapLink = document.querySelector('link[href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"]');
    
    if (bootstrapLink) {
        bootstrapLink.disabled = !bootstrapDisabled;
        bootstrapDisabled = !bootstrapDisabled;
    }
});
// Sélection de tous les boutons "View" de chaque card
const viewButtons = document.querySelectorAll('.btn-success');

// Parcours de tous les boutons "View"
viewButtons.forEach(viewButton => {
    // Ajout de l'event listener pour détecter le survol de la souris sur le bouton "View"
    viewButton.addEventListener('mouseenter', function() {
        // Sélection de la card parente du bouton
        const card = viewButton.closest('.card');
        
        // Réduction de la taille de la card
        card.style.transform = 'scale(0.8)';
        
        // Disparition du texte de la card
        const cardText = card.querySelector('.card-text');
        cardText.style.visibility = 'hidden';
    });
    
    // Ajout de l'event listener pour détecter la sortie de la souris du bouton "View"
    viewButton.addEventListener('mouseleave', function() {
        // Sélection de la card parente du bouton
        const card = viewButton.closest('.card');
        
        // Rétablissement de la taille de la card
        card.style.transform = '';
        
        // Réapparition du texte de la card
        const cardText = card.querySelector('.card-text');
        cardText.style.visibility = 'visible';
    });
});


