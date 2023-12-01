export default [
    {
      question: "Se João é mais alto que Maria e Maria é mais alta que Pedro, quem é o mais baixo?",
      answers: [
        { option: "João", correct: false },
        { option: "Maria", correct: false },
        { option: "Pedro", correct: true },
      ],
    },
    {
      question: "Todos os gatos gostam de peixe. Minnie gosta de peixe. O que podemos concluir?",
      answers: [
        { option: "Minnie é um gato.", correct: false },
        { option: "Minnie gosta de peixe.", correct: true },
        { option: "Nem todos gostam de peixe.", correct: false },
      ],
    },
    {
      question: "Se todas as maçãs são frutas e algumas frutas são doces, o que podemos concluir sobre algumas maçãs?",
      answers: [
        { option: "Algumas maças são doces.", correct: true },
        { option: "Todas as maçãs são doces.", correct: false },
        { option: "Não sabemos se as maçãs são doces", correct: false },
      ],
    },
    {
      question: "Se todos os cachorros latem e Fido late, o que podemos concluir sobre Fido?",
      answers: [
        { option: "Não sabemos se Fido é um cachorro.", correct: false },
        { option: "Fido é um gato", correct: false },
        { option: "Fido é u cachorro", correct: true },
      ],
    },
    {
        question: "Se todas as páginas de um livro estão numeradas e você está na página 25, o que podemos inferir sobre a próxima página?",
        answers: [
          { option: "A Próxima página é a 24.", correct: false },
          { option: "A Próxima p[ágina é a 26.", correct: true },
          { option: "Não podemos saber qual é a próxima página.", correct: false },
        ],
      },
  ];