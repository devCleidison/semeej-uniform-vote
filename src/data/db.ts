import imgFemaleShirt1 from "../assets/blue-female-shirt.jpeg";
import imgFemaleShirt2 from "../assets/green-female-shirt.jpeg";

import imgMaleShirt1 from "../assets/blue-male-shirt.jpeg";
import imgMaleShirt2 from "../assets/green-male-shirt.jpeg";

export const uniforms = {
  female: [
    {
      id: "option1",
      title: "Blusa feminina azul",
      description: "Blusa com mangas na cor azul e calça azul bic ou preta.",
      image: imgFemaleShirt1
    },
    {
      id:"option2",
      title: "Blusa feminina verde",
      description: "Blusa na cor verde e calça preta.",
      image: imgFemaleShirt2
    },
  ],

  male: [
    {
      id: "option3",
      title: "Blusa masculina azul",

      description: "Blusa social de manga curta na cor azul e calça preta.",
      image: imgMaleShirt1
    },
    {
      id: "option4",
      title: "Blusa masculina verde",
      description: "Blusa social de manga curta na cor verde e calça preta.",
      image: imgMaleShirt2
    },
  ]
}