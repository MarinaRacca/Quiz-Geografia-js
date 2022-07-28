export const data = [
    {
      question: "¿Cuál es el nombre del río más largo del mundo?",
      choices: ["Rio Nilo", "Rio Amazonas", "Rio Danubio"],
      answer: "Rio Amazonas",
    },
  
    {
      question: "¿Cuál es el océano más grande del mundo?",
      choices: ["Océano Pacífico", "Océano Índico", "Océano Atlántico"],
      answer: "Océano Pacífico",
    },
  
    {
      question: "¿Cuál es el país más grande del mundo?",
      choices: ["China", "Rusia", "India"],
      answer: "Rusia",
    },
  
    {
      question: "¿Cuál es el país que tiene forma de bota?",
      choices: ["España", "Honduras", "Italia"],
      answer: "Italia",
    },
  
    {
      question: "¿Cuál es el país más poblado de la tierra?",
      choices: ["Estados Unidos", "China", "Rusia"],
      answer: "China",
    },
  
    {
      question: "¿Cuál es la ciudad de los rascacielos?",
      choices: ["Tokio", "New York", "Hong Kong"],
      answer: "New York",
    },
  
    {
      question: "¿En qué país se encuentra ubicada la Casa Rosada?",
      choices: ["Argentina", "Chile", "Mexico"],
      answer: "Argentina",
    },
  
    {
      question: "¿Cuál es la capital de Nicaragua?",
      choices: ["Santiagoo", "Brasilia", "Managua"],
      answer: "Managua",
    },
  
    {
      question: "¿En qué país está ubicada la ciudad de Medellín?",
      choices: ["Colombia", "Venezuela", "Perú"],
      answer: "Colombia",
    },
  
    {
      question: "¿En qué continente se encuentra Surinam?",
      choices: ["África", "América del Sur", "Oceanía"],
      answer: "América del Sur",
    },
  
    {
      question: "¿Cuál es la nación más pequeña del mundo?",
      choices: ["Andorra", "Mónaco", "El Vaticano"],
      answer: "El Vaticano",
    },
  
    {
      question: "¿Cuál es la única ciudad que está en dos continentes distintos?",
      choices: ["Moscú", "Estambul", "Berlín"],
      answer: "Estambul",
    },
  
    {
      question: "¿Cuál es la ciudad italiana conocida como «la novia del mar»?",
      choices: ["Roma", "Florencia", "Venecia"],
      answer: "Venecia",
    },
  
    {
      question: "¿Cuál es la cascada más alta del mundo?",
      choices: ["El Salto del Ángel", "Cataratas de Iguazú", "Cataratas del Niáraga"],
      answer: "El Salto del Ángel",
    },

    {
      question: "¿Cuál es la capital de Pakistán?",
      choices: ["Bagdag", "Islamabad", "Marrakech"],
      answer: "Islamabad",
    },          
];
  
  export function fisherYatesShuffle(arr) {
    for (var i = arr.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  
  fisherYatesShuffle(data);