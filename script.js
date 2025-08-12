const flashcards = [
  {
    frente: "Quem construiu a arca para escapar do dilúvio?",
    verso: "Noé (Gênesis 6)"
  },
  {
    frente: "Quantos livros há na Bíblia?",
    verso: "66 livros (39 no Antigo Testamento e 27 no Novo Testamento)"
  },
  {
    frente: "Quem foi lançado na cova dos leões?",
    verso: "Daniel (Daniel 6)"
  },
  {
    frente: "Quem libertou os israelitas do Egito?",
    verso: "Moisés (Êxodo 3-14)"
  },
  {
    frente: "Quem traiu Jesus por 30 moedas de prata?",
    verso: "Judas Iscariotes (Mateus 26:14-16)"
  },
  {
    frente: "Qual é o primeiro versículo da Bíblia?",
    verso: "Gênesis 1:1 — No princípio, Deus criou os céus e a terra."
  },
  {
    frente: "Qual é o menor versículo da Bíblia?",
    verso: "João 11:35 — Jesus chorou."
  },
  {
    frente: "Quantos dias durou o dilúvio?",
    verso: "40 dias e 40 noites (Gênesis 7:12)"
  },
  {
    frente: "Quem foi engolido por um grande peixe?",
    verso: "Jonas (Jonas 1:17)"
  },
  {
    frente: "Quem negou Jesus três vezes?",
    verso: "Pedro (Mateus 26:69-75)"
  },
  {
    frente: "Qual o nome da mãe de Jesus?",
    verso: "Maria (Lucas 1:27-31)"
  },
  {
    frente: "Qual apóstolo é conhecido como 'o incrédulo'?",
    verso: "Tomé (João 20:24-29)"
  },
  {
    frente: "Onde Jesus nasceu?",
    verso: "Belém (Mateus 2:1)"
  }
];

function createFlashcard(cardData) {
  const card = document.createElement('div');
  card.className = 'flashcard';
  card.textContent = cardData.frente;

  let showingAnswer = false;
  card.addEventListener('click', () => {
    if (showingAnswer) {
      card.textContent = cardData.frente;
    } else {
      card.textContent = cardData.verso;
    }
    showingAnswer = !showingAnswer;
  });

  return card;
}

function loadFlashcards() {
  const container = document.getElementById('flashcards-container');
  container.innerHTML = '';

  // Mostrar só os primeiros 6 flashcards
  const cardsToShow = flashcards.slice(0, 6);
  cardsToShow.forEach(cardData => {
    const cardElement = createFlashcard(cardData);
    container.appendChild(cardElement);
  });
}

window.onload = loadFlashcards;
