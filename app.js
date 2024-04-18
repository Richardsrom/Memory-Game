const gridDisplay = document.getElementById('grid');
const resultDisplayP1 = document.getElementById('resultP1');
const resultDisplayP2 = document.getElementById('resultP2');
const player1 = document.getElementById('p1');
const player2 = document.getElementById('p2');
const player1N = document.querySelector('.player1');
const player2N = document.querySelector('.player2');

let playerName1;
let playerName2;

let cardsChosen = [];
let cardsChosenIds = [];

let cardsWonP1 = []; //Array para guardar el puntaje del jugador 1.
let cardsWonP2 = []; //Array para guardar el puntaje del jugador 2.


const levels = [

    [
        {
            name: 'milkshake',
            img: './images/milkshake.png',
        },
        {
            name: 'pizza',
            img: './images/pizza.png',
        },
        {
            name: 'milkshake',
            img: './images/milkshake.png',
        },
        {
            name: 'pizza',
            img: './images/pizza.png',
        },

    ],
    [
        {
            name: 'fries',
            img: './images/fries.png',
        },
        {
            name: 'cheeseburger',
            img: './images/cheeseburger.png',
        },
        {
            name: 'hotdog',
            img: './images/hotdog.png',
        },
        {
            name: 'ice-cream',
            img: './images/ice-cream.png',
        },
        {
            name: 'fries',
            img: './images/fries.png',
        },
        {
            name: 'cheeseburger',
            img: './images/cheeseburger.png',
        },
        {
            name: 'hotdog',
            img: './images/hotdog.png',
        },
        {
            name: 'ice-cream',
            img: './images/ice-cream.png',
        },
    ],
    [
        {
            name: 'fries',
            img: './images/fries.png',
        },
        {
            name: 'cheeseburger',
            img: './images/cheeseburger.png',
        },
        {
            name: 'hotdog',
            img: './images/hotdog.png',
        },
        {
            name: 'ice-cream',
            img: './images/ice-cream.png',
        },
        {
            name: 'milkshake',
            img: './images/milkshake.png',
        },
        {
            name: 'pizza',
            img: './images/pizza.png',
        },
        {
            name: 'fries',
            img: './images/fries.png',
        },
        {
            name: 'cheeseburger',
            img: './images/cheeseburger.png',
        },
        {
            name: 'hotdog',
            img: './images/hotdog.png',
        },
        {
            name: 'ice-cream',
            img: './images/ice-cream.png',
        },
        {
            name: 'milkshake',
            img: './images/milkshake.png',
        },
        {
            name: 'pizza',
            img: './images/pizza.png',
        }
    ],
    [
        {
            name: 'fries',                
            img: './images/fries.png',
        },
        {
            name: 'cheeseburger',
            img: './images/cheeseburger.png',
        },
        {
            name: 'hotdog',
            img: './images/hotdog.png',
        },
        {
            name: 'ice-cream',
            img: './images/ice-cream.png',
        },
        {
            name: 'milkshake',
            img: './images/milkshake.png',
        },
        {
            name: 'pizza',
            img: './images/pizza.png',
        },
        {
            name: 'cocktail',
            img: './images/cocktail.png',
        },
        {
            name: 'coffee',
            img: './images/coffee.png',
        },
        {
            name: 'popsicle',
            img: './images/popsicle.png',
        },
        {
            name: 'fries',                
            img: './images/fries.png',
        },
        {
            name: 'cheeseburger',
            img: './images/cheeseburger.png',
        },
        {
            name: 'hotdog',
            img: './images/hotdog.png',
        },
        {
            name: 'ice-cream',
            img: './images/ice-cream.png',
        },
        {
            name: 'milkshake',
            img: './images/milkshake.png',
        },
        {
            name: 'pizza',
            img: './images/pizza.png',
        },
        {
            name: 'cocktail',
            img: './images/cocktail.png',
        },
        {
            name: 'coffee',
            img: './images/coffee.png',
        },
        {
            name: 'popsicle',
            img: './images/popsicle.png',
        }
    ],
    [
        {
            name: 'fries',                
            img: './images/fries.png',
        },
        {
            name: 'cheeseburger',
            img: './images/cheeseburger.png',
        },
        {
            name: 'hotdog',
            img: './images/hotdog.png',
        },
        {
            name: 'ice-cream',
            img: './images/ice-cream.png',
        },
        {
            name: 'milkshake',
            img: './images/milkshake.png',
        },
        {
            name: 'pizza',
            img: './images/pizza.png',
        },
        {
            name: 'cocktail',
            img: './images/cocktail.png',
        },
        {
            name: 'coffee',
            img: './images/coffee.png',
        },
        {
            name: 'popsicle',
            img: './images/popsicle.png',
        },
        {
            name: 'doner',
            img: './images/doner.png',
        },
        {
            name: 'ramen',
            img: './images/ramen.png',
        },
        {
            name: 'soda',
            img: './images/soda.png',
        },
        {
            name: 'fries',                
            img: './images/fries.png',
        },
        {
            name: 'cheeseburger',
            img: './images/cheeseburger.png',
        },
        {
            name: 'hotdog',
            img: './images/hotdog.png',
        },
        {
            name: 'ice-cream',
            img: './images/ice-cream.png',
        },
        {
            name: 'milkshake',
            img: './images/milkshake.png',
        },
        {
            name: 'pizza',
            img: './images/pizza.png',
        },
        {
            name: 'cocktail',
            img: './images/cocktail.png',
        },
        {
            name: 'coffee',
            img: './images/coffee.png',
        },
        {
            name: 'popsicle',
            img: './images/popsicle.png',
        },
        {
            name: 'doner',
            img: './images/doner.png',
        },
        {
            name: 'ramen',
            img: './images/ramen.png',
        },
        {
            name: 'soda',
            img: './images/soda.png',
        }

    ]
]

let currentLevel = 0;


//* Función para mezclar un array utilizando el algoritmo de Fisher-Yates
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); // Genera un índice aleatorio entre 0 e i
        [array[i], array[j]] = [array[j], array[i]]; // Intercambia los elementos en las posiciones i y j
    }
    return array;
}

//* Llamada a la función shuffleArray con el array levels
levels.forEach(level => shuffleArray(level));


//* We're creating the board and adding some event listeners to it 
const createBoard = () => {

    const cardArray = levels[currentLevel];

    for(let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img');
        card.setAttribute('src', './images/question-mark.png');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard);
        gridDisplay.appendChild(card);
    };
};



//^ Funcion para guardar el nombre del jugador y mostrarlo
const playerName = () => {

    const cardsGame = document.querySelectorAll('#grid img');

    cardsGame.forEach(card => {
        card.removeEventListener('click', flipCard);
    });

    Swal.fire({

        toast: true,
        title:`Player 1 name:`,
        input: 'text',
        inputAttributes: {
            autocapitalize: 'off'
        },
        showCancelButton: true,
        confirmButtonText: 'Accept',
        cancelButtonText: 'Cancel',
        showLoaderOnConfirm: true,
            
        preConfirm: (inputValue) => {

            // Puedes hacer algo con el valor ingresado aquí
            if (!inputValue) {
                Swal.showValidationMessage('A name is required');
                return false;
            }
            // Puedes devolver el valor si lo necesitas
            return inputValue;
        }

    }).then((result) => {
  
        if (result.isConfirmed) {
  
            // Si se hace clic en Aceptar:
            playerName1 = result.value;
            player1N.textContent = playerName1;
            playerNameTwo();


        } else {

            // Si se hace clic en Cancelar:
            player1N.textContent = 'Player 1';
            playerName1 = 'Player 1';
            playerNameTwo();

        }          
    });
    
};

const playerNameTwo = () => {

    const cardsGame = document.querySelectorAll('#grid img');


    Swal.fire({

        toast: true,
        title:`Player 2 name:`,
        input: 'text',
        inputAttributes: {
            autocapitalize: 'off'
        },
        showCancelButton: true,
        confirmButtonText: 'Accept',
        cancelButtonText: 'Cancel',
        showLoaderOnConfirm: true,
            
        preConfirm: (inputValue) => {

            // Puedes hacer algo con el valor ingresado aquí
            if (!inputValue) {
                Swal.showValidationMessage('A name is required');
                return false;
            }
            // Puedes devolver el valor si lo necesitas
            return inputValue;
        }

    }).then((result) => {
  
        if (result.isConfirmed) {
  
            // Si se hace clic en Aceptar:
            playerName2 = result.value;
            player2N.textContent = playerName2;
            cardsGame.forEach(card => {
                card.addEventListener('click', flipCard);
            });

  
        } else {

            // Si se hace clic en Cancelar: 
            player2N.textContent = 'Player 2';
            playerName2 = 'Player 2';
            cardsGame.forEach(card => {
                card.addEventListener('click', flipCard);
            });

        }          
    });
};


//^ Aqui tenemos el codigo para los jugadores, el turno y la puntuacion ---

let currentPlayer = 1;

const switchPlayers = () => {
    
    currentPlayer = currentPlayer === 1 ? 2 : 1; // Cambiamos a player 2 si es player 1 y viceversa 
};



//^ Funcion para actualizar los marcadores de los jugadores 
const updateScore = () => {

    if (currentPlayer === 1) {

        player1.classList.add('colorPlayer1');
        player2.classList.remove('colorPlayer2');
        resultDisplayP1.textContent = cardsWonP1.length;

    } else {

        resultDisplayP2.textContent = cardsWonP2.length;
        player2.classList.add('colorPlayer2');
        player1.classList.remove('colorPlayer1');
    };
};


//^ Funcion para saber que jugador gano.
let winner;

const playerW = () => {


    if(cardsWonP1.length > cardsWonP2.length) {
        return `Player ${playerName1} won 🥳`;
    } else if(cardsWonP1.length < cardsWonP2.length){
        return `Player ${playerName2} won 🥳`;
    } else {
        return 'Its a tie 😶';
    }
};



//^ Funcion para verificar si los pares son correctos sino cambiar de jugador y mostrar el ganador del juego
const checkMatch = () => {

    const cards = document.querySelectorAll('#grid img');
    const cardArray = levels[currentLevel];

    if (cardsChosen[0] === cardsChosen[1]) {

        Swal.fire({
            title: 'You have a match! 😯',
            icon: 'success',
            color: '#fff',
            background: '#05547e',
            position: 'top-end',
            showConfirmButton: false,
            timer: 1000

        });

        cards[cardsChosenIds[0]].setAttribute('src', './images/ghost.png');
        cards[cardsChosenIds[1]].setAttribute('src', './images/ghost.png');
        cards[cardsChosenIds[0]].removeEventListener('click', flipCard);
        cards[cardsChosenIds[1]].removeEventListener('click', flipCard);
        cards[cardsChosenIds[0]].classList.remove('flipped'); // Remover la clase flipped de la carta
        cards[cardsChosenIds[1]].classList.remove('flipped'); // Remover la clase flipped de la carta

        //Dependiendo del jugador actual, agregaremos la puntuacion a su array
        if(currentPlayer === 1) {
            cardsWonP1.push(cardsChosen);
        } else {
            cardsWonP2.push(cardsChosen);
        }

    } else {

        cards[cardsChosenIds[0]].setAttribute('src', './images/question-mark.png');
        cards[cardsChosenIds[1]].setAttribute('src', './images/question-mark.png');
        switchPlayers();
        cards[cardsChosenIds[0]].classList.remove('flipped'); // Remover la clase flipped de la carta
        cards[cardsChosenIds[1]].classList.remove('flipped'); // Remover la clase flipped de la carta
        //alert(`Turn to the Player: ${currentPlayer}`);

        Swal.fire({
            title: `Turn to the Player: ${currentPlayer} 🫣`,
            icon: 'info',
            color: '#fff',
            background: '#05547e',
            position: 'top',
            showConfirmButton: false,
            timer: 1170
        });
    }

    updateScore();

    cardsChosen = [];
    cardsChosenIds = [];

    if(cardsWonP1.length + cardsWonP2.length === cardArray.length / 2) {

        winner = playerW();

        Swal.fire({
            toast: true,
            title: `You have passed the next level 😁: ${winner}`,
            icon: 'success',
            color: '#fff',
            background: '#05547e',
            position: 'center'
        });

        if(currentLevel < levels.length - 1 ) {

            //verifica si hay mas niveles disponibles
            currentLevel++;
            gridDisplay.innerHTML = ''; // Limpiar el tablero antes de crear uno nuevo.
            resultDisplayP1.textContent = ''; //Limpiar el score antes de un nuevo nivel.
            resultDisplayP2.textContent = ''; //Limpiar el score antes de un nuevo nivel.

            cardsWonP1.splice(0, cardsWonP1.length);
            cardsWonP2.splice(0, cardsWonP2.length);

            createBoard();

        } else {

            Swal.fire({
                toast: true,
                title: `You have completed all levels! 🎉 ${winner}`,
                icon: 'success',
                color: '#fff',
                background: '#05547e',
                position: 'center'
            });
        }
    }
};



//* Funcion para voltear la carta seleccionada
const flipCard = (e) => {

    const cardArray = levels[currentLevel];
    const cardId = e.target.getAttribute('data-id');

    // Verificar si la carta ya ha sido seleccionada
    if(!e.target.classList.contains('flipped') && (!cardsWonP1.includes(cardArray[cardId]) || !cardsWonP2.includes(cardArray[cardId]) )) {
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenIds.push(cardId);
        e.target.setAttribute('src', cardArray[cardId].img)
        e.target.classList.add('flipped'); // Agregar una clase para marcar la carta como seleccionada

        if (cardsChosen.length === 2) {
            setTimeout(checkMatch, 400);
        }
    }
};


createBoard();
window.onload = () => playerName();