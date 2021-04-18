import BurgerImage from '../images/burger.jpg';
const burgerImage = new Image(); 
burgerImage.src = BurgerImage;
import PastaImage from '../images/pasta.jpg';
const pastaImage = new Image(); 
pastaImage.src = PastaImage; 
import PizzaImage from '../images/pizza.jpg';
const pizzaImage = new Image(); 
pizzaImage.src = PizzaImage; 
import PokeImage from '../images/poke.jpg';
const pokeImage = new Image(); 
pokeImage.src = PokeImage; 
import QuesadillaImage from '../images/quesadilla.jpg';
const quesadillaImage = new Image(); 
quesadillaImage.src = QuesadillaImage;
import SaladImage from '../images/salad.jpg';
const saladImage = new Image(); 
saladImage.src = SaladImage; 
import SandwichImage from '../images/sandwich.jpg';
const sandwichImage = new Image(); 
sandwichImage.src = SandwichImage; 
import SoupImage from '../images/soup.jpg';
const soupImage = new Image(); 
soupImage.src = SoupImage;
import SushiImage from '../images/sushi.jpg';
const sushiImage = new Image(); 
sushiImage.src = SushiImage;
import TacosImage from '../images/tacos.jpg';
const tacosImage = new Image(); 
tacosImage.src = TacosImage;

export const lunch = [
    {
      text: "Turkey Burger with Cheese",
      img:  burgerImage,
    },
    {
      text: "Spaghetti with Vegetable Marinara",
      img:  pastaImage,
    },
    {
      text: "BBQ Chicken Pizza with Pineapple",
      img:  pizzaImage,
    },
    {
      text: "Salmon Poke Bowl",
      img:  pokeImage,
    },
    {
      text: "Black Bean & Corn Quesadilla",
      img:  quesadillaImage,
    },
    {
       text: "Shrimp Caesar Salad",
       img:  saladImage,
    },
    {
       text: "Italian Sandwich on fresh Baguette",
       img:  sandwichImage,
    },
    {
       text: "Tomato Soup with Fresh Basil",
       img:  soupImage,
    },
    {
       text: "Dragon Sushi Roll",
       img:  sushiImage,
    },
    {
       text: "Chicken Street Tacos",
       img:  tacosImage,
    },
  ];
    
    export default class LunchGenerator {
        constructor(showDescription, showImage) {
            this.showDescription = showDescription; 
            this.showImage = showImage; 
        }

        randomizeLunches() {
                let i, j, k;
                  for (i = lunch.length -1; i > 0; i--) {
                    j = Math.floor(Math.random() * i)
                    k = lunch[i]
                    lunch[i] = lunch[j]
                    lunch[j] = k
                }
        }
    }

export const lunchGenerator = new LunchGenerator(lunch[0].text, lunch[0].img);