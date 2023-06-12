let container = document.getElementById("containerCard");

let info = [
  {
    img: "https://pics.filmaffinity.com/Caomo_entrenar_a_tu_dragaon-577181358-large.jpg",
    title: "Como entrenar a tu dragon",
    description:
      "Hipo es un adolescente vikingo que no encaja con el estereotipo de su pueblo de rudos cazadores de dragones: no sabe lanzar un hacha, no sabe usar una espada y es demasiado pequeño y flacucho para luchar. Sin embargo, empeñado en hacerse valer, sale en busca de su primer dragón... pero lo que encuentra no se parece en nada a las historias que ha oído durante toda su vida acerca de esos terribles monstruos. Conocerá a Desdentao, un ejemplar de los legendarios Furia Nocturna, una raza que se creía extinta. Después de dispararle se dará cuenta de que los dragones no son las bestias asesinas que él creía e iniciará una relación de amistad con el dragón que pretendía cazar en un principio.",
  },
  {
    img: "https://www.mostoles.es/culturaenmostoles/es/agenda-actividades/proyecta-cine-familia-entrenar-dragon-2.ficheros/888991-c%C3%B3mo%20entrenar%20a%20tu%20drag%C3%B3n%202.jpg?width=500&height=750&aspectRatio=true",
    title: "Como entrenar a tu dragon 2",
    description:
      "Han pasado cinco años desde los sucesos que llevaron a Hiccup a conseguir entrenar a su dragón, rompiendo la estela de su pueblo vikingo de cazarlos. Astrid y el resto de la pandilla han conseguido que la isla tome contacto con un nuevo deporte: las carreras de dragones. Mientras realizan una carrera, atraviesan los cielos llegando a territorios inhóspitos, donde nadie antes ha estado.Explorando nuevos mundos, el viaje les lleva a descubrir una cueva recubierta de hielo que resulta ser el hogar de cientos de nuevos dragones salvajes, protegidos por un misterioso guardián. Hipo y los suyos deberán unirse al guardián para proteger a los dragones de las fuerzas malignas que quieren acabar con ellos.",
  },
  {
    img: "https://pics.filmaffinity.com/Caomo_entrenar_a_tu_dragaon_3-958591527-large.jpg",
    title: "Como entrenar a tu dragon 3",
    description:
      "La insólita amistad entre el adolescente vikingo Hipo y su fiel compañero dragón, el Furia Nocturna Desdentao, llega a su fin. En esta nueva aventura descubrirán finalmente sus destinos. Mientras el joven gobernante del poblado vikingo de Berk cumple su sueño de crear un mundo utópico en el que los dragones vivan en paz, con ayuda de su compañera Astrid (America Ferrera), el Furia Nocturna será el líder de su propia especie. Además, la aparición de una salvaje y escurridiza dragona, una Furia Luminosa, pondrá a prueba los lazos de su relación como nunca antes. Claro que, cuando la amenaza más oscura a la que se han enfrentado ponga en peligro a sus respectivos clanes, ambos, dragón y vikingo, deberán llevar a cabo decisiones imposibles para salvar a los suyos.",
  },
];

info.forEach((peliculas) => {
  let newCard = document.createElement("div");
  newCard.classList.add("card");

  let newImg = document.createElement("img");
  newImg.src = peliculas.img;
  newImg.width = "imagen";

  let newText = document.createElement("div");
  newText.classList.add("cardText");
  let newTitle = document.createElement("h1");
  newTitle.textContent = peliculas.title;
  let newDescription = document.createElement("p");
  newDescription.textContent = peliculas.description;
  newText.appendChild(newTitle);
  newText.appendChild(newDescription);

  newCard.appendChild(newImg);
  newCard.appendChild(newText);
  container.appendChild(newCard);
});
