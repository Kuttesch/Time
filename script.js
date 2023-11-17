// Load saved state on page load
document.addEventListener('DOMContentLoaded', function () {
    loadState();
});


function generateCard() {
    var eventDate = document.getElementById('eventDate').value;
    var eventDuration = document.getElementById('eventDuration').value;

    if (!eventDate || !eventDuration) {
        alert('Please fill in all fields.');
        return;
    }

    var cardContainer = document.getElementById('card-container');

    var card = document.createElement('div');
    card.className = 'card';

    var cardContent = document.createElement('p');
    cardContent.textContent = 'Event Date: ' + eventDate + ', Duration: ' + eventDuration + ' hours';

    card.appendChild(cardContent);
    cardContainer.appendChild(card);

    // Clear form fields
    document.getElementById('eventDate').value = '';
    document.getElementById('eventDuration').value = '';

    // Save state after generating a new card
    saveState();
}


function saveState() {
    var cards = [];
    var cardElements = document.querySelectorAll('.card');

    cardElements.forEach(function (cardElement) {
        cards.push({
            content: cardElement.textContent.trim()
        });
    });

    // Save to localStorage
    localStorage.setItem('cards', JSON.stringify(cards));
}

function loadState() {
    // Load from localStorage
    var storedCards = localStorage.getItem('cards');

    if (storedCards) {
        var cards = JSON.parse(storedCards);
        var cardContainer = document.getElementById('card-container');

        cards.forEach(function (card) {
            var newCard = document.createElement('div');
            newCard.className = 'card';

            var cardContent = document.createElement('p');
            cardContent.textContent = card.content;

            newCard.appendChild(cardContent);
            cardContainer.appendChild(newCard);
        });
    }
}